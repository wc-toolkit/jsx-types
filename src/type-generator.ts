/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import { JsxTypesOptions } from "./types";
import {
  AttributeAndProperty,
  Component,
  getAllComponents,
  getAttrsAndProps,
  getComponentDetailsTemplate,
  getMemberDescription,
} from "@wc-toolkit/cem-utilities";
import * as cem from "custom-elements-manifest";
import { Logger } from "./logger";

const DEFAULT_OPTIONS: JsxTypesOptions = {
  fileName: "custom-element-jsx.d.ts",
  outdir: "./",
  exclude: [],
  prefix: "",
  suffix: "",
};

let userOptions = DEFAULT_OPTIONS;

export function generateJsxTypes(manifest: any, options: JsxTypesOptions = {}) {
  const log = new Logger(options.debug);

  if (options.skip) {
    log.yellow("[jsx-types] - Skipped");
    return;
  }
  userOptions = { ...DEFAULT_OPTIONS, ...options };

  log.log("[jsx-types] - Generating types...");

  const template = getTypeTemplate(manifest, userOptions);
  createOutDir(userOptions.outdir!);
  saveFile(userOptions.outdir!, userOptions.fileName!, template);
  log.green(
    `[jsx-types] - Generated "${path.join(userOptions.outdir!, userOptions.fileName!)}".`
  );
}

function getImports(
  manifest: cem.Package,
  options: JsxTypesOptions,
  attrsAndProps: Map<string, AttributeAndProperty[]>
) {
  const importTemplates: string[] = [];
  let modules: string[] = [];
  const componentsWithoutProps = [];
  attrsAndProps.forEach((props, componentName) => {
    if (props.length === 0) {
      componentsWithoutProps.push(componentName);
    }
  });
  const moduleNames: string[] = [];

  manifest.modules.forEach((module) => {
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
            ? options.componentTypePath?.(component.name, component.tagName)
            : module.path;
        const uniqueExports: string[] = [];

        module.exports?.forEach((e) => {
          const exportName = e.declaration.name;

          if (moduleNames.includes(exportName)) {
            return;
          }
          moduleNames.push(exportName);
          uniqueExports.push(exportName);
        });
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
  const attrsAndProps = new Map<string, AttributeAndProperty[]>();
  components.forEach((component: Component) => {
    const props = getAttrsAndProps(component);
    attrsAndProps.set(component.name, props);
  });
  const imports = getImports(manifest, options, attrsAndProps);

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

type BaseProps = {
  /** Content added between the opening and closing tags of the element */
  children?: any;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  class?: string;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  className?: string;
  /** Takes an object where the key is the class name(s) and the value is a boolean expression. When true, the class is applied, and when false, it is removed. */
  classList?: Record<string, boolean | undefined>;
  /** Specifies the text direction of the element. */
  dir?: "ltr" | "rtl";
  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;
  /** For <label> and <output>, lets you associate the label with some control. */
  htmlFor?: string;
  /** Specifies whether the element should be hidden. */
  hidden?: boolean | string;
  /** A unique identifier for the element. */
  id?: string;
  /** Keys tell React which array item each component corresponds to */
  key?: string | number;
  /** Specifies the language of the element. */
  lang?: string;
  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;
  /** Use the ref attribute with a variable to assign a DOM element to the variable once the element is rendered. */
  ref?: unknown | ((e: unknown) => void);
  /** Adds a reference for a custom element slot */
  slot?: string;
  /** Prop for setting inline styles */
  style?: Record<string, string | number>;
  /** Overrides the default Tab button behavior. Avoid using values other than -1 and 0. */
  tabIndex?: number;
  /** Specifies the tooltip text for the element. */
  title?: string;
  /** Passing 'no' excludes the element content from being translated. */
  translate?: "yes" | "no";
};

type BaseEvents = {${
    Object.hasOwn(options, "globalEvents") ? options.globalEvents : ""
  }};

${components
  ?.map((component: Component) => {
    return `

export type ${component.name}Props = {
${
  (() => {
    const attrs = [...new Set(getAttrsAndProps(component))]
    .map((prop) => {
      return prop.attrName
        ? `  /** ${getMemberDescription(prop.description, prop.deprecated)} */
  "${prop.attrName}"?: ${component.name}['${prop.propName}'];
  /** ${getMemberDescription(prop.description, prop.deprecated)} */
  "${prop.propName}"?: ${component.name}['${prop.propName}'];`
        : `  /** ${getMemberDescription(prop.description, prop.deprecated)} */
  "${prop.propName}"?: ${component.name}['${prop.propName}'];`;
    })
    .join("\n") || "";
        console.log(attrs);

    return attrs;
  })()
}
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
    return `

  /**
    ${getComponentDetailsTemplate(component, options.componentDescriptionOptions, true)}
  */
    "${options.prefix}${component.tagName}${options.suffix}": Partial<${
      component.name
    }Props & BaseProps & BaseEvents>;`;
  })
  .join("\n")}
  }
`;
}

// function getTypeImportsFromGlobalType(
//   components: Component[],
//   options: JsxTypesOptions
// ) {
//   return options.globalTypePath
//     ? `import type { ${components
//         .map((c) => {
//           const componentType = options.defaultExport
//             ? `default as ${c.name}`
//             : c.name;
//           const types = getComponentEventsWithType(c, {
//             overrideCustomEventType: options.overrideCustomEventType,
//           });
//           return componentType + (types ? `, ${types}` : "");
//         })
//         .join(", ")} } from "${options.globalTypePath}";`
//     : "";
// }

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
