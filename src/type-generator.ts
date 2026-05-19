import fs from "fs";
import path from "path";
import { JsxTypesOptions } from "./types";
import {
  Component,
  getAllComponents,
  getComponentDetailsTemplate,
  getComponentPublicProperties,
  getMemberDescription,
  toPascalCase,
} from "@wc-toolkit/cem-utilities";
import type * as cem from "custom-elements-manifest";
import { Logger } from "./logger";
import { GLOBAL_EVENTS, GLOBAL_PROPS } from "./global-types";
import prettier from "@prettier/sync";

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
  options: JsxTypesOptions = {},
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

  log.log("[jsx-types] - Generating types...");

  const template = getTypeTemplate(manifest, mergedOptions);

  // save file only if a filename is provided
  if (mergedOptions.fileName) {
    createOutDir(mergedOptions.outdir!);
    saveFile(mergedOptions.outdir!, mergedOptions.fileName!, template);
    log.green(
      `[jsx-types] - Generated "${path.join(mergedOptions.outdir!, mergedOptions.fileName)}".`,
    );
  } else {
    log.yellow(
      `[jsx-types] - File generation skipped because \`fileName\` was not defined.`,
    );
  }

  return template;
}

function getImports(manifest: cem.Package, options: JsxTypesOptions) {
  const imports = new Map<string, Set<string>>();
  const componentModules = new Map<string, { modulePath: string; tagName?: string }>();

  manifest.modules.forEach((module) => {
    if (
      !module.declarations ||
      !module.declarations.length ||
      !module.declarations.some((d) => (d as cem.CustomElement).customElement)
    ) {
      return;
    }

    module.declarations?.forEach((element) => {
      const component = element as cem.CustomElement;

      if (!component.customElement || !component.name) {
        return;
      }

      componentModules.set(component.name, {
        modulePath: module.path,
        tagName: component.tagName,
      });
    });

    if (options.globalTypePath) {
      module.exports?.forEach((exportDeclaration) => {
        const exportName = exportDeclaration.declaration.name;

        if (!exportName || exportName === "*") {
          return;
        }

        addImport(imports, options.globalTypePath!, exportName);
      });
    } else {
      module.declarations?.forEach((element) => {
        const component = element as cem.CustomElement;

        if (!component.customElement || !component.name) {
          return;
        }

        const importPath =
          getComponentImportPath(component.name, component.tagName, module.path, options);

        module.exports?.forEach((exportDeclaration) => {
          const exportName = exportDeclaration.declaration.name;

          if (!exportName || exportName === "*") {
            return;
          }

          if (!(options.defaultExport && exportName === component.name)) {
            addImport(imports, importPath, exportName);
          }
        });

        if (options.defaultExport) {
          addImport(imports, importPath, `default as ${component.name}`);
        }
      });
    }
  });

  if (options.useCemTypes) {
    getAllComponents(manifest, options.exclude).forEach((component) => {
      if (!component.name) {
        return;
      }

      const componentModule = componentModules.get(component.name);

      if (!componentModule) {
        return;
      }

      getComponentProps(component).forEach((prop) => {
        const propType = getResolvedPropType(prop, options);

        propType?.references?.forEach((reference) => {
          if (!reference.name || reference.name === "default") {
            return;
          }

          const importPath = getTypeImportPath(
            reference,
            componentModule.modulePath,
            component,
            options,
          );

          if (!importPath) {
            return;
          }

          addImport(imports, importPath, reference.name);
        });
      });
    });
  }

  return Array.from(imports.entries())
    .map(
      ([importPath, exportNames]) =>
        `import type { ${Array.from(exportNames).join(", ")} } from "${importPath}";`,
    )
    .join("\n");
}

function getTypeTemplate(manifest: cem.Package, options: JsxTypesOptions) {
  const components = getAllComponents(manifest, options.exclude);
  const imports = getImports(manifest, options);
  const cssPropertiesTemplate = options.excludeCssCustomProperties
    ? ""
    : "export interface CSSProperties extends CustomCssProperties {}";
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
 * @deprecated Runtime scoped elements result in duplicate types and can confusing for developers. It is recommended to use the \`prefix\` and \`suffix\` options to generate new types instead.
 */
export type ScopedElements<
  Prefix extends string = "",
  Suffix extends string = ""
> = {
  [Key in keyof CustomElements as \`\${Prefix}\${Key}\${Suffix}\`]: CustomElements[Key];
};

${
  options.stronglyTypedEvents
    ? `/**
  * A generic type for strongly typing custom events with their targets
  * @template T - The type of the event target (extends EventTarget)
  * @template D - The type of the detail payload for the custom event
  */
 type TypedEvent<
   T extends EventTarget,
   E = Event
 > = E & {
   target: T;
 };`
    : ""
}

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
      getComponentProps(component)?.filter((prop) => !prop.readonly && !prop.static) ||
      [];

    const strongEventTypes = getStrongEventTypes(component);

    let solidTypes = "";

    return `
${options.stronglyTypedEvents ? getStronglyTypedEvents(component) : ""}

export type ${component.name}Props = {
${(() => {
  if (!cachedProps?.length) {
    return "";
  }

  return cachedProps.reduce((acc, prop) => {
    const description = getMemberDescription(prop.description, prop.deprecated);
    const typeInfo = getResolvedPropType(prop, options);
    const type = getPropType(component.name, prop, typeInfo, options);

    // Check if we already have this property in the accumulator
    const propExists = acc.includes(`  "${prop.propName}"?:`);
    const attrExists = prop.attrName && acc.includes(`  "${prop.attrName}"?:`);

    let result = acc;

    // Add attribute declaration if it exists and doesn't match property name
    if (prop.attrName && prop.propName !== prop.attrName && !attrExists) {
      if(prop.propName !== prop.attrName) {
        result += `  /** ${description} */
          "${prop.attrName}"?: ${type};\n`;
      }
      solidTypes += `  /** ${description} */
        "${(typeInfo?.text || prop.type?.text || "").includes("boolean") ? "bool" : "attr"}:${prop.attrName}"?: ${type};\n`;
    }

    // Add property declaration if it doesn't exist yet
    if (!propExists) {
      result += `  /** ${description} */
        "${prop.propName}"?: ${type};\n`;
      solidTypes += `  /** ${description} */
        "prop:${prop.propName}"?: ${type};\n`;
    }

    return result;
  }, "");
})()}
${
  component.events
    ?.filter((e) => e.name)
    ?.map((event) => {
      const eventType = event.type?.text?.startsWith("{")
        ? `CustomEvent<${event.type.text}>`
        : event.type?.text || "Event";
      solidTypes += `  /** ${getMemberDescription(
        event.description,
        event.deprecated,
      )} */
  "on:${event.name}"?: (e: ${getEventTypeName(
    eventType,
    strongEventTypes?.find((x) => x.name === event.name)?.newType || null,
    component.name,
    options.stronglyTypedEvents,
  )}) => void;\n`;
      return `  /** ${getMemberDescription(
        event.description,
        event.deprecated,
      )} */
  "on${event.name}"?: (e: ${getEventTypeName(
    eventType,
    strongEventTypes?.find((x) => x.name === event.name)?.newType || null,
    component.name,
    options.stronglyTypedEvents,
  )}) => void;\n`;
    })
    .join("") || ""
}
}

export type ${component.name}SolidJsProps = {
${solidTypes}
  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
}`;
  })
  .join("\n")}

  export type CustomElements = {
${components
  .map((component) => {
    if (!component.name || !component.tagName) {
      return "";
    }

    let tagName = component.tagName;
    if (options.tagFormatter) {
      tagName = options.tagFormatter(component.tagName);
    } else if (options.prefix || options.suffix) {
      tagName = `${options.prefix}${component.tagName}${options.suffix}`;
    }

    return `

  /**
    ${getComponentDetailsTemplate(component, options.componentDescriptionOptions, true)}
  */
    "${tagName}": Partial<${
      component.name
    }Props & BaseProps<${component.name}> & BaseEvents>;`;
  })
  .join("\n")}
  }

  export type CustomElementsSolidJs = {
${components
  .map((component) => {
    if (!component.name || !component.tagName) {
      return "";
    }

    let tagName = component.tagName;
    if (options.tagFormatter) {
      tagName = options.tagFormatter(component.tagName);
    } else if (options.prefix || options.suffix) {
      tagName = `${options.prefix}${component.tagName}${options.suffix}`;
    }

    return `

  /**
    ${getComponentDetailsTemplate(component, options.componentDescriptionOptions, true)}
  */
    "${tagName}": Partial<${component.name}Props & ${
      component.name
    }SolidJsProps & BaseProps<${component.name}> & BaseEvents>;`;
  })
  .join("\n")}
  }

export type CustomCssProperties = {
${(() => {
  const uniqueCssProperties = new Set<string>();
  const cssPropertiesArray: string[] = [];

  components.forEach((component) => {
    component.cssProperties?.forEach((property) => {
      if (!uniqueCssProperties.has(property.name)) {
        uniqueCssProperties.add(property.name);
        cssPropertiesArray.push(
          `  /** ${getMemberDescription(property.description, property.deprecated)} */
  "${property.name}"?: string;`,
        );
      }
    });
  });

  return cssPropertiesArray.join("\n");
})()}
}


declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  ${cssPropertiesTemplate}
}

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  ${cssPropertiesTemplate}
}

declare module '@builder.io/qwik' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  ${cssPropertiesTemplate}
}

declare module '@stencil/core' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  ${cssPropertiesTemplate}
}

declare module 'hono/jsx' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  ${cssPropertiesTemplate}
}

declare module 'react-native' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  ${cssPropertiesTemplate}
}

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements extends CustomElementsSolidJs {}
  }
  ${cssPropertiesTemplate}
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  ${cssPropertiesTemplate}
}
`;
}

type ComponentProp = {
  attrName?: string;
  propName?: string;
  description?: string;
  deprecated?: boolean | string;
  readonly?: boolean;
  static?: boolean;
  type?: cem.Type;
  attribute?: cem.Attribute;
  property?: cem.ClassField;
};

function addImport(
  imports: Map<string, Set<string>>,
  importPath: string,
  exportName: string,
) {
  const existing = imports.get(importPath);

  if (existing) {
    existing.add(exportName);
    return;
  }

  imports.set(importPath, new Set([exportName]));
}

function getComponentImportPath(
  componentName: string,
  tagName: string | undefined,
  modulePath: string,
  options: JsxTypesOptions,
) {
  return typeof options.componentTypePath === "function"
    ? options.componentTypePath(componentName, tagName, modulePath)
    : modulePath;
}

function getTypeImportPath(
  reference: cem.TypeReference,
  componentModulePath: string,
  component: Component,
  options: JsxTypesOptions,
) {
  if (reference.package) {
    return reference.package;
  }

  if (!reference.module) {
    return null;
  }

  if (reference.module === componentModulePath) {
    if (options.globalTypePath) {
      return options.globalTypePath;
    }

    if (component.name) {
      return getComponentImportPath(
        component.name,
        component.tagName,
        componentModulePath,
        options,
      );
    }
  }

  return reference.module;
}

function getComponentProps(component: Component): ComponentProp[] {
  const properties = getComponentPublicProperties(component) as cem.ClassField[];
  const propertyMap = new Map(properties.map((property) => [property.name, property]));
  const attributeProps =
    component.attributes?.map((attribute) => ({
      attrName: attribute.name,
      propName: attribute.fieldName,
      description: attribute.description,
      deprecated: attribute.deprecated,
      readonly: false,
      static: false,
      type: attribute.type,
      attribute,
      property: attribute.fieldName
        ? propertyMap.get(attribute.fieldName)
        : undefined,
    })) || [];
  const attributePropNames = new Set(
    attributeProps
      .map((attribute) => attribute.propName)
      .filter((propName): propName is string => Boolean(propName)),
  );
  const propertyOnlyProps = properties
    .filter((property) => !attributePropNames.has(property.name))
    .map((property) => ({
      attrName: undefined,
      propName: property.name,
      description: property.description,
      deprecated: property.deprecated,
      readonly: property.readonly,
      static: property.static,
      type: property.type,
      attribute: undefined,
      property,
    }));

  return [...attributeProps, ...propertyOnlyProps];
}

function getTypeFromSource(
  source: cem.Attribute | cem.ClassField | undefined,
  sourceKey: string,
) {
  const candidate = source
    ? (source as unknown as Record<string, unknown>)[sourceKey]
    : undefined;

  if (
    candidate &&
    typeof candidate === "object" &&
    "text" in candidate &&
    typeof candidate.text === "string"
  ) {
    return candidate as cem.Type;
  }

  return undefined;
}

function getResolvedPropType(prop: ComponentProp, options: JsxTypesOptions) {
  const sourceKey = options.typesSrc || "type";

  return (
    getTypeFromSource(prop.property, sourceKey) ??
    getTypeFromSource(prop.attribute, sourceKey) ??
    (sourceKey === "type" ? undefined : getTypeFromSource(prop.property, "type")) ??
    (sourceKey === "type" ? undefined : getTypeFromSource(prop.attribute, "type")) ??
    prop.type
  );
}

function getPropType(
  componentName: string,
  prop: ComponentProp,
  propType: cem.Type | undefined,
  options: JsxTypesOptions,
) {
  if (options.useCemTypes) {
    return propType?.text || "unknown";
  }

  return prop.propName ? `${componentName}['${prop.propName}']` : "unknown";
}

function getEventTypeName(
  eventType: string,
  strongEventType: string | null,
  componentName: string = "",
  stronglyTyped?: boolean,
) {
  return stronglyTyped
    ? (strongEventType ?? `${componentName}ElementEvent`)
    : eventType;
}

function getStrongEventTypes(component: Component) {
  const eventTypes = component?.events
    ?.filter((e) => e.name)
    ?.map((event) => ({
      name: event.name,
      type: event?.type?.text,
    }));

  if (!eventTypes) {
    return [];
  }

  return eventTypes
    .filter(
      (eventType) =>
        eventType.type &&
        eventType.type !== "Event" &&
        eventType.type !== "CustomEvent",
    )
    .map((eventType) => {
      return {
        name: eventType.name,
        type: eventType.type.startsWith("{")
          ? `CustomEvent<${eventType.type}>`
          : eventType.type,
        newType: `${component.name}${toPascalCase(eventType.name)}ElementEvent`,
      };
    });
}

function getStronglyTypedEvents(component: Component): string {
  if (!component.events?.length) {
    return "";
  }

  const eventTypes = getStrongEventTypes(component);
  const types: string[] = [
    `/** \`${component.name}\` component event */
     export type ${component.name}ElementEvent<E = Event> = TypedEvent<${component.name}, E>;`,
  ];

  eventTypes.forEach((eventType) => {
    types.push(
      `/** \`${eventType.name}\` event type */
      export type ${eventType.newType} = ${component.name}ElementEvent<${eventType.type}>;`,
    );
  });

  return types.join("\n");
}

function createOutDir(outDir: string) {
  if (outDir !== "./" && !fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
}

function saveFile(outDir: string, fileName: string, contents: string) {
  const outputPath = path.join(outDir, fileName);

  fs.writeFileSync(
    outputPath,
    prettier.format(contents, { parser: "typescript", printWidth: 80 }),
  );

  return outputPath;
}