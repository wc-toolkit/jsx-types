import { describe, expect, it } from "vitest";
import type * as cem from "custom-elements-manifest";
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

describe("generateJsxTypes", () => {
  it("includes the global role attribute in BaseProps", () => {
    const template = generateJsxTypes(manifest as cem.Package, {
      fileName: undefined,
    });

    expect(template).toContain('role?: string;');
  });

  it("keeps component property references by default", () => {
    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
    });

    expect(template).toContain(`"text"?: Button['text'];`);
    expect(template).toContain(`"variant"?: Button['variant'];`);
  });

  it("uses manifest prop types when useCemTypes is enabled", () => {
    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
      useCemTypes: true,
    });

    expect(template).toContain('"text"?: string;');
    expect(template).toContain('"variant"?: "primary" | "secondary";');
  });

  it("uses the configured CEM type source when typesSrc is provided", () => {
    const template = generateJsxTypes(parsedTypeManifest, {
      fileName: undefined,
      useCemTypes: true,
      typesSrc: "parsedType",
    });

    expect(template).toContain('"variant"?: "primary" | "secondary";');
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
    expect(template).toContain('"size"?: ButtonSize;');
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
      '  "onmy-change"?: (e: CustomEvent<MyDetail>) => void;',
    );
  });

  it("appends | undefined to optional props when exactOptionalPropertyTypes is enabled", () => {
    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
      exactOptionalPropertyTypes: true,
    });

    expect(template).toContain(`"text"?: Button['text'] | undefined;`);
    expect(template).toContain(`"variant"?: Button['variant'] | undefined;`);
  });

  it("does not append | undefined when exactOptionalPropertyTypes is disabled", () => {
    const template = generateJsxTypes(jsDocManifest, {
      fileName: undefined,
      exactOptionalPropertyTypes: false,
    });

    expect(template).toContain(`"text"?: Button['text'];`);
    expect(template).toContain(`"variant"?: Button['variant'];`);
  });

  it("does not duplicate | undefined when the CEM type already includes undefined", () => {
    const template = generateJsxTypes(namedTypeManifest, {
      fileName: undefined,
      useCemTypes: true,
      exactOptionalPropertyTypes: true,
    });

    expect(template).toContain('"variant"?: ButtonVariant | undefined;');
    expect(template).not.toContain(
      '"variant"?: ButtonVariant | undefined | undefined;',
    );
    expect(template).toContain('"size"?: ButtonSize | undefined;');
  });
});
