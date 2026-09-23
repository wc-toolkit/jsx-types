import { describe, expect, it } from "vitest";
import type * as cem from "custom-elements-manifest";
import ts from "typescript";
import manifest from "../demo/basic/custom-elements.json";
import { generateJsxTypes } from "../src/type-generator";

type ExtendedClassField = cem.ClassField & {
  parsedType?: cem.Type;
};

type ExtendedCustomElement = cem.CustomElement & {
  members?: ExtendedClassField[];
};

type ExtendedJavaScriptModule = cem.JavaScriptModule & {
  declarations?: ExtendedCustomElement[];
};

type ExtendedPackage = cem.Package & {
  modules: ExtendedJavaScriptModule[];
};

const jsDocManifest = {
  schemaVersion: "1.0.0",
  readme: "",
  modules: [
    {
      kind: "javascript-module",
      path: "src/button.js",
      declarations: [
        {
          kind: "class",
          name: "Button",
          tagName: "x-button",
          customElement: true,
          attributes: [
            {
              name: "text",
              fieldName: "text",
              description: "Button text",
              type: {
                text: "string",
              },
            },
          ],
          members: [
            {
              kind: "field",
              name: "text",
              description: "Button text",
              type: {
                text: "string",
              },
            },
            {
              kind: "field",
              name: "variant",
              description: "Button variant",
              type: {
                text: '"primary" | "secondary"',
              },
            },
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "Button",
          declaration: {
            name: "Button",
            module: "src/button.js",
          },
        },
        {
          kind: "custom-element-definition",
          name: "x-button",
          declaration: {
            name: "Button",
            module: "src/button.js",
          },
        },
      ],
    },
  ],
} satisfies cem.Package;

const namedTypeManifest = {
  schemaVersion: "1.0.0",
  readme: "",
  modules: [
    {
      kind: "javascript-module",
      path: "src/button.js",
      declarations: [
        {
          kind: "class",
          name: "Button",
          tagName: "x-button",
          customElement: true,
          members: [
            {
              kind: "field",
              name: "variant",
              description: "Button variant",
              type: {
                text: "ButtonVariant | undefined",
                references: [
                  {
                    name: "ButtonVariant",
                    module: "src/button.js",
                  },
                ],
              },
            },
            {
              kind: "field",
              name: "size",
              description: "Button size",
              type: {
                text: "ButtonSize",
                references: [
                  {
                    name: "ButtonSize",
                    module: "src/button-types.js",
                  },
                ],
              },
            },
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "Button",
          declaration: {
            name: "Button",
            module: "src/button.js",
          },
        },
      ],
    },
  ],
} satisfies cem.Package;

const parsedTypeManifest: ExtendedPackage = {
  ...jsDocManifest,
  modules: [
    {
      ...jsDocManifest.modules[0],
      declarations: [
        {
          ...jsDocManifest.modules[0].declarations![0],
          members: [
            {
              kind: "field",
              name: "variant",
              description: "Button variant",
              type: {
                text: "ButtonVariant",
                references: [
                  {
                    name: "ButtonVariant",
                    module: "src/button.js",
                  },
                ],
              },
              parsedType: {
                text: '"primary" | "secondary"',
              },
            },
          ],
        },
      ],
    },
  ],
};

const eventDetailManifest = {
  schemaVersion: "1.0.0",
  readme: "",
  modules: [
    {
      kind: "javascript-module",
      path: "src/my-button.ts",
      declarations: [
        {
          kind: "class",
          name: "MyButton",
          tagName: "my-button",
          customElement: true,
          events: [
            {
              name: "my-change",
              type: { text: "CustomEvent<MyDetail>" },
            },
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "MyButton",
          declaration: {
            name: "MyButton",
            module: "src/my-button.ts",
          },
        },
      ],
    },
  ],
} satisfies cem.Package;

const cssOnlyManifest = {
  schemaVersion: "1.0.0",
  readme: "",
  modules: [
    {
      kind: "javascript-module",
      path: "src/my-badge.css",
      declarations: [
        {
          kind: "class",
          name: "my-badge",
          tagName: "my-badge",
          customElement: true,
          superclass: { name: "HTMLUnknownElement" },
          attributes: [
            {
              name: "label",
              type: { text: "string" },
            },
          ],
          cssProperties: [{ name: "--badge-color" }],
          slots: [{ name: "" }],
        },
      ],
    },
  ],
} satisfies cem.Package;

describe("generateJsxTypes", () => {
  it("includes the global role attribute in BaseProps", () => {
    const template = generateJsxTypes(manifest as cem.Package, {
      fileName: undefined,
    });

    expect(template).toContain('role?: string | undefined;');
  });

  it("keeps component property references by default", () => {
    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
    });

    expect(template).toContain(`"text"?: Button['text'] | undefined;`);
    expect(template).toContain(`"variant"?: Button['variant'] | undefined;`);
  });

  it("uses manifest prop types when useCemTypes is enabled", () => {
    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
      useCemTypes: true,
    });

    expect(template).toContain('"text"?: string | undefined;');
    expect(template).toContain(
      '"variant"?: "primary" | "secondary" | undefined;',
    );
  });

  it("uses the configured CEM type source when typesSrc is provided", () => {
    const template = generateJsxTypes(parsedTypeManifest, {
      fileName: undefined,
      useCemTypes: true,
      typesSrc: "parsedType",
    });

    expect(template).toContain(
      '"variant"?: "primary" | "secondary" | undefined;',
    );
    expect(template).not.toContain('"variant"?: ButtonVariant;');
  });

  it("imports named CEM type references when useCemTypes is enabled", () => {
    const template = generateJsxTypes(namedTypeManifest, {
      fileName: undefined,
      useCemTypes: true,
    });

    expect(template).toContain(
      'import type { Button, ButtonVariant } from "src/button.js";',
    );
    expect(template).toContain(
      'import type { ButtonSize } from "src/button-types.js";',
    );
    expect(template).toContain('"variant"?: ButtonVariant | undefined;');
    expect(template).toContain('"size"?: ButtonSize | undefined;');
  });

  it("imports a named CustomEvent detail type alongside the component", () => {
    const template = generateJsxTypes(eventDetailManifest, {
      fileName: undefined,
      stronglyTypedEvents: true,
    });

    expect(template).toMatch(
      /import type \{ [^}]*MyButton[^}]*MyDetail[^}]*\} from "src\/my-button.ts"/,
    );
    expect(template).toContain(
      "export type MyButtonMyChangeElementEvent = MyButtonElementEvent<CustomEvent<MyDetail>>;",
    );
  });

  it("generates valid types for CSS-only declarations", () => {
    const template = generateJsxTypes(cssOnlyManifest, {
      fileName: undefined,
    });

    const sourceFile = ts.createSourceFile(
      "generated.d.ts",
      template!,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );

    expect(sourceFile.parseDiagnostics).toHaveLength(0);
    expect(template).toContain("export type MyBadgeProps = {");
    expect(template).toContain('"label"?: string | undefined;');
    expect(template).toContain(
      '"my-badge": Partial<MyBadgeProps & BaseProps<HTMLUnknownElement>',
    );
    expect(template).toContain('"--badge-color"?: string | undefined;');
    expect(template).not.toContain('from "src/my-badge.css"');
  });

  it("does not import a union CustomEvent detail type", () => {
    const unionManifest = {
      schemaVersion: "1.0.0",
      readme: "",
      modules: [
        {
          kind: "javascript-module",
          path: "src/my-button.ts",
          declarations: [
            {
              kind: "class",
              name: "MyButton",
              tagName: "my-button",
              customElement: true,
              events: [
                {
                  name: "my-change",
                  type: { text: "CustomEvent<Foo | Bar>" },
                },
              ],
            },
          ],
          exports: [
            {
              kind: "js",
              name: "MyButton",
              declaration: {
                name: "MyButton",
                module: "src/my-button.ts",
              },
            },
          ],
        },
      ],
    } satisfies cem.Package;

    const template = generateJsxTypes(unionManifest, {
      fileName: undefined,
      stronglyTypedEvents: true,
    });

    expect(template).not.toMatch(/import [^}]*\|[^}]*\} from/);
  });

  it("imports event detail type even without strongly typed events", () => {
    const template = generateJsxTypes(eventDetailManifest, {
      fileName: undefined,
      stronglyTypedEvents: false,
    });

    expect(template).toMatch(
      /import type \{ [^}]*MyDetail[^}]*\} from "src\/my-button.ts"/,
    );
    expect(template).toContain(
      '  "onmy-change"?: ((e: CustomEvent<MyDetail>) => void) | undefined;',
    );
  });

  it("appends | undefined to optional props", () => {
    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
    });

    expect(template).toContain(`"text"?: Button['text'] | undefined;`);
    expect(template).toContain(`"variant"?: Button['variant'] | undefined;`);
  });

  it("does not duplicate | undefined when the CEM type already includes undefined", () => {
    const template = generateJsxTypes(namedTypeManifest, {
      fileName: undefined,
      useCemTypes: true,
    });

    expect(template).toContain('"variant"?: ButtonVariant | undefined;');
    expect(template).not.toContain(
      '"variant"?: ButtonVariant | undefined | undefined;',
    );
    expect(template).toContain('"size"?: ButtonSize | undefined;');
  });

  it("does not duplicate | undefined when the CEM type is a function already unioned with undefined", () => {
    const manifest = {
      schemaVersion: "1.0.0",
      readme: "",
      modules: [
        {
          kind: "javascript-module" as const,
          path: "src/button.js",
          declarations: [
            {
              kind: "class" as const,
              name: "Button",
              tagName: "x-button",
              customElement: true,
              members: [
                {
                  kind: "field" as const,
                  name: "handler",
                  description: "Event handler",
                  type: {
                    text: "((e: string) => void) | undefined",
                  },
                },
              ],
            },
          ],
          exports: [
            {
              kind: "js" as const,
              name: "Button",
              declaration: {
                name: "Button",
                module: "src/button.js",
              },
            },
          ],
        },
      ],
    } satisfies cem.Package;

    const template = generateJsxTypes(manifest, {
      fileName: undefined,
      useCemTypes: true,
    });

    expect(template).toContain(
      '"handler"?: ((e: string) => void) | undefined;',
    );
    expect(template).not.toContain("| undefined | undefined");
  });

  it("does not duplicate | undefined when the CEM type is a parenthesized union with undefined", () => {
    const manifest = {
      schemaVersion: "1.0.0",
      readme: "",
      modules: [
        {
          kind: "javascript-module" as const,
          path: "src/button.js",
          declarations: [
            {
              kind: "class" as const,
              name: "Button",
              tagName: "x-button",
              customElement: true,
              members: [
                {
                  kind: "field" as const,
                  name: "value",
                  description: "Button value",
                  type: {
                    text: "(string | undefined)",
                  },
                },
              ],
            },
          ],
          exports: [
            {
              kind: "js" as const,
              name: "Button",
              declaration: {
                name: "Button",
                module: "src/button.js",
              },
            },
          ],
        },
      ],
    } satisfies cem.Package;

    const template = generateJsxTypes(manifest, {
      fileName: undefined,
      useCemTypes: true,
    });

    expect(template).toContain('"value"?: (string | undefined);');
    expect(template).not.toContain(
      '"value"?: (string | undefined) | undefined;',
    );
  });

  it("appends | undefined to BaseProps / GLOBAL_PROPS", () => {
    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
    });

    expect(template).toContain("children?: any | undefined;");
    expect(template).toContain("class?: string | undefined;");
    expect(template).toContain("id?: string | undefined;");
    expect(template).toContain("role?: string | undefined;");
    expect(template).toContain(
      "ref?: (T | ((e: T) => void)) | undefined;",
    );
    expect(template).toContain("dir?: \"ltr\" | \"rtl\" | undefined;");
  });

  it("appends | undefined to event handlers with paren-wrapping", () => {
    const template = generateJsxTypes(eventDetailManifest, {
      fileName: undefined,
      stronglyTypedEvents: false,
    });

    expect(template).toContain(
      '"onmy-change"?: ((e: CustomEvent<MyDetail>) => void) | undefined;',
    );
    expect(template).not.toContain(
      '"onmy-change"?: (e: CustomEvent<MyDetail>) => void;',
    );
  });

  it("appends | undefined to BaseEvents / GLOBAL_EVENTS", () => {
    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
      includeDefaultDOMEvents: true,
    });

    expect(template).toContain(
      "onClick?: ((event: MouseEvent) => void) | undefined;",
    );
    expect(template).toContain(
      "onKeyDown?: ((event: KeyboardEvent) => void) | undefined;",
    );
  });

  it("appends | undefined to multi-line globalEvents entries", () => {
    const multilineEvents = `  "onbig"?: {
    nested: boolean;
    other: string;
  };`;

    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
      globalEvents: multilineEvents,
    });

    expect(template).toContain(
      '"onbig"?: {\n    nested: boolean;\n    other: string;\n  } | undefined;',
    );
  });

  it("appends | undefined to CSS custom properties", () => {
    const cssManifest = {
      schemaVersion: "1.0.0",
      readme: "",
      modules: [
        {
          kind: "javascript-module",
          path: "src/button.js",
          declarations: [
            {
              kind: "class",
              name: "Button",
              tagName: "x-button",
              customElement: true,
              cssProperties: [
                {
                  name: "--button-color",
                  description: "Button color",
                },
              ],
              attributes: [],
              members: [],
            },
          ],
          exports: [
            {
              kind: "js",
              name: "Button",
              declaration: {
                name: "Button",
                module: "src/button.js",
              },
            },
          ],
        },
      ],
    } satisfies cem.Package;

    const template = generateJsxTypes(cssManifest, {
      fileName: undefined,
    });

    expect(template).toContain('"--button-color"?: string | undefined;');
  });

  it("appends | undefined to SolidJS props (innerHTML, textContent, prop:, attr:)", () => {
    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
    });

    expect(template).toContain("innerHTML?: string | undefined;");
    expect(template).toContain(
      "textContent?: string | number | undefined;",
    );
    expect(template).toContain(
      `"prop:text"?: Button['text'] | undefined;`,
    );
    expect(template).toContain(
      `"prop:variant"?: Button['variant'] | undefined;`,
    );
  });

  it("appends | undefined to multi-line generic globalEvents entries", () => {
    const multilineGenericEvents = `  "onfoo"?: Record<
    string,
    boolean
  >;`;

    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
      globalEvents: multilineGenericEvents,
    });

    expect(template).toContain(
      '"onfoo"?: Record<\n    string,\n    boolean\n  > | undefined;',
    );
  });

  it("appends | undefined to multi-line parenthesized union globalEvents entries", () => {
    const multilineParenEvents = `  "onbar"?: (
    string | number
  );`;

    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
      globalEvents: multilineParenEvents,
    });

    expect(template).toContain(
      '"onbar"?: (\n    string | number\n  ) | undefined;',
    );
  });
});
