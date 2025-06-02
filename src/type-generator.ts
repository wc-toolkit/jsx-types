 
import fs from "fs";
import path from "path";
import { JsxTypesOptions } from "./types";
import {
  Component,
  getAllComponents,
  getAttrsAndProps,
  getComponentDetailsTemplate,
  getMemberDescription,
} from "@wc-toolkit/cem-utilities";
import type * as cem from "custom-elements-manifest";
import { Logger } from "./logger";
import { GLOBAL_EVENTS, GLOBAL_PROPS } from "./global-types";

const DEFAULT_OPTIONS: JsxTypesOptions = {
  fileName: "custom-element-jsx.d.ts",
  outdir: "./",
  exclude: [],
  prefix: "",
  suffix: "",
};

/**
 * Generates TypeScript type definitions for custom elements to be used in JSX
 *
 * @param manifest - Custom Elements Manifest containing component definitions
 * @param options - Configuration options for type generation
 */
export function generateJsxTypes(
  manifest: cem.Package,
  options: JsxTypesOptions = {}
) {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const log = new Logger(mergedOptions.debug);

  if (mergedOptions.skip) {
    log.yellow("[jsx-types] - Skipped");
    return;
  }

  if (!manifest || !manifest.modules || manifest.modules.length === 0) {
    log.red("[jsx-types] - No modules found in the manifest.");
    return;
  }

  if (!mergedOptions.outdir) {
    log.red("[jsx-types] - No output directory specified.");
    return;
  }

  if (!mergedOptions.fileName) {
    log.red("[jsx-types] - No file name specified.");
    return;
  }

  log.log("[jsx-types] - Generating types...");

  const template = getTypeTemplate(manifest, mergedOptions);
  createOutDir(mergedOptions.outdir!);
  saveFile(mergedOptions.outdir!, mergedOptions.fileName!, template);

  log.green(
    `[jsx-types] - Generated "${path.join(mergedOptions.outdir!, mergedOptions.fileName!)}".`
  );
}

function getImports(manifest: cem.Package, options: JsxTypesOptions) {
  const importTemplates: string[] = [];
  let modules: string[] = [];
  const moduleNames: string[] = [];

  manifest.modules.forEach((module) => {
    if (
      !module.declarations ||
      !module.declarations.length ||
      !module.declarations.some((d) => (d as cem.CustomElement).customElement)
    ) {
      return;
    }

    if (options.globalTypePath) {
      // If a global type path is provided, we import all components as a single import
      modules = [
        ...new Set([
          ...modules,
          ...(module.exports?.map((e) => e.declaration.name) || []),
        ]),
      ];
    } else {
      module.declarations?.forEach((element) => {
        const component = element as cem.CustomElement;
        const importPath =
          typeof options.componentTypePath === "function"
            ? options.componentTypePath?.(component.name, component.tagName, module.path)
            : module.path;
        const uniqueExports: string[] = [];

        module.exports?.forEach((e) => {
          const exportName = e.declaration.name;

          if (!exportName || moduleNames.includes(exportName)) {
            return;
          }
          moduleNames.push(exportName);
          uniqueExports.push(exportName);
        });

        if (!uniqueExports?.length) {
          return;
        }

        importTemplates.push(
          `import type { ${
            options.defaultExport ? `default as ${component.name}` : ""
          } ${uniqueExports?.map((e) => e).join(", ")} } from "${importPath}";`
        );
      });
    }
  });

  return options.globalTypePath
    ? `import type { ${modules.join(", ")} } from "${options.globalTypePath}";`
    : importTemplates.join("\n");
}

function getTypeTemplate(manifest: cem.Package, options: JsxTypesOptions) {
  const components = getAllComponents(manifest, options.exclude);
  const imports = getImports(manifest, options);

  return `
${imports}

/**
 * This type can be used to create scoped tags for your components.
 * 
 * Usage:
 * 
 * \`\`\`ts
 * import type { ScopedElements } from "path/to/library/jsx-integration";
 * 
 * declare module "my-library" {
 *   namespace JSX {
 *     interface IntrinsicElements
 *       extends ScopedElements<'test-', ''> {}
 *   }
 * }
 * \`\`\`
 * 
 */
export type ScopedElements<
  Prefix extends string = "",
  Suffix extends string = ""
> = {
  [Key in keyof CustomElements as \`\${Prefix}\${Key}\${Suffix}\`]: CustomElements[Key];
};

type BaseProps<T extends HTMLElement> = {
${GLOBAL_PROPS}
} ${options.allowUnknownProps ? `& Record<string, any>` : ""};

type BaseEvents = {
${options.includeDefaultDOMEvents ? GLOBAL_EVENTS : ""}
${Object.hasOwn(options, "globalEvents") ? options.globalEvents : ""}
};

${components
  ?.map((component: Component) => {
    if (!component.name || !component.tagName) {
      return "";
    }

    const cachedProps =
      getAttrsAndProps(component)?.filter(
        (prop) => !prop.readonly && !prop.static
      ) || [];

    return `

export type ${component.name}Props = {
${(() => {
  if (cachedProps.length === 0) return "";

  return cachedProps.reduce((acc, prop) => {
    const description = getMemberDescription(prop.description, prop.deprecated);
    const type = prop.propName
      ? `${component.name}['${prop.propName}']`
      : "unknown";

    // Check if we already have this property in the accumulator
    const propExists = acc.includes(`  "${prop.propName}"?:`);
    const attrExists = prop.attrName && acc.includes(`  "${prop.attrName}"?:`);

    let result = acc;

    // Add attribute declaration if it exists and doesn't match property name
    if (prop.attrName && prop.propName !== prop.attrName && !attrExists) {
      result += `  /** ${description} */
  "${prop.attrName}"?: ${type};\n`;
    }

    // Add property declaration if it doesn't exist yet
    if (!propExists) {
      result += `  /** ${description} */
  "${prop.propName}"?: ${type};\n`;
    }

    return result;
  }, "");
})()}
${
  component.events
    ?.map((event) => {
      return `  /** ${getMemberDescription(
        event.description,
        event.deprecated
      )} */
  "on${event.name}"?: (e: CustomEvent<${
    event.type?.text || "never"
  }>) => void;`;
    })
    .join("\n") || ""
}
}`;
  })
  .join("\n")}

  export type CustomElements = {
${components
  .map((component) => {
    if (!component.name || !component.tagName) {
      return "";
    }

    return `

  /**
    ${getComponentDetailsTemplate(component, options.componentDescriptionOptions, true)}
  */
    "${options.prefix}${component.tagName}${options.suffix}": Partial<${
      component.name
    }Props & BaseProps<${component.name}> & BaseEvents>;`;
  })
  .join("\n")}
  }
`;
}

function createOutDir(outDir: string) {
  if (outDir !== "./" && !fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
}

function saveFile(outDir: string, fileName: string, contents: string) {
  const outputPath = path.join(outDir, fileName);

  fs.writeFileSync(outputPath, contents);

  return outputPath;
}
