import { describe, expect, it, afterAll } from "vitest";
import fs from "fs";
import path from "path";
import os from "os";
import { execSync } from "child_process";
import { createRequire } from "module";
import type * as cem from "custom-elements-manifest";
import { generateJsxTypes } from "../src/type-generator";

const require = createRequire(import.meta.url);

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "jsx-types-compile-"));

afterAll(() => {
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

const compileManifest: cem.Package = {
  schemaVersion: "1.0.0",
  readme: "",
  modules: [
    {
      kind: "javascript-module",
      path: "src/button.ts",
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
              type: { text: "string" },
            },
          ],
          members: [
            {
              kind: "field",
              name: "text",
              description: "Button text",
              type: { text: "string" },
            },
            {
              kind: "field",
              name: "variant",
              description: "Button variant",
              type: { text: '"primary" | "secondary"' },
            },
            {
              kind: "field",
              name: "mode",
              description: "Button mode",
              type: { text: "Mode" },
            },
          ],
          events: [
            {
              name: "button-click",
              type: { text: "CustomEvent<ButtonDetail>" },
            },
          ],
          cssProperties: [
            {
              name: "--button-color",
              description: "Button color",
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
            module: "src/button.ts",
          },
        },
        {
          kind: "js",
          name: "ButtonDetail",
          declaration: { name: "ButtonDetail", module: "src/button.ts" },
        },
      ],
    },
  ],
};

const buttonStub = `
import type { Mode } from "./types";
export type ButtonDetail = { message: string };
export class Button extends HTMLElement {
  text?: string;
  variant?: "primary" | "secondary";
  mode?: Mode;
}
`;

const globalEvents = `  "oncustom"?: (e: CustomEvent<string>) => void;`;

const consumerCode = `
import type { ButtonProps, CustomElements, CustomElementsSolidJs, CustomCssProperties } from "./types/generated.d.ts";

// Component props accept explicit undefined
const props: ButtonProps = { text: undefined, variant: undefined };

// Event handlers accept explicit undefined
const eventProps: ButtonProps = { "onbutton-click": (event) => event.detail.message };

// BaseProps / GLOBAL_PROPS accept explicit undefined
const baseProps: CustomElements["x-button"] = { class: undefined, id: undefined, role: undefined };

// BaseEvents / GLOBAL_EVENTS accept explicit undefined
const baseEvents: CustomElements["x-button"] = { onClick: undefined, onKeyDown: undefined };

// globalEvents accept explicit undefined
const customEvents: CustomElements["x-button"] = { oncustom: undefined };

// CSS custom properties accept explicit undefined
const cssProps: CustomCssProperties = { "--button-color": undefined };

// SolidJS props accept explicit undefined
const solidProps: CustomElementsSolidJs["x-button"] = { "prop:text": undefined, innerHTML: undefined, textContent: undefined };

// CSS-only elements use their CEM attribute type without a JavaScript class.
const layout: CustomElements["zd-flex"] = { direction: "row" };
`;

describe("tsc compilation under exactOptionalPropertyTypes", () => {
  it("generated output compiles cleanly with exactOptionalPropertyTypes: true", () => {
    const manifest = structuredClone(compileManifest);
    const buttonPath = path.join(tmpDir, "src", "button.ts");
    const typePath = path.join(tmpDir, "src", "types.ts");
    manifest.modules[0].path = path.join(tmpDir, "src", "button.ts");
    manifest.modules[0].exports?.forEach((exportDeclaration) => {
      exportDeclaration.declaration.module = buttonPath;
    });
    const modeMember = manifest.modules[0].declarations?.[0].members?.find(
      (member) => member.kind === "field" && member.name === "mode",
    );
    if (modeMember?.kind === "field") {
      modeMember.type = {
        text: "Mode",
        references: [{ name: "Mode", module: typePath }],
      };
    }
    manifest.modules.push({
      kind: "javascript-module",
      path: typePath,
      declarations: [],
      exports: [
        {
          kind: "js",
          name: "Mode",
          declaration: { name: "Mode", module: typePath },
        },
      ],
    });
    manifest.modules.push({
      kind: "javascript-module",
      path: path.join(tmpDir, "src", "zd-flex.css"),
      declarations: [
        {
          kind: "class",
          name: "zd-flex",
          tagName: "zd-flex",
          customElement: true,
          superclass: { name: "HTMLUnknownElement" },
          attributes: [{ name: "direction", type: { text: "row | column" } }],
        },
      ],
      exports: [],
    });
    const typesDir = path.join(tmpDir, "types");
    const template = generateJsxTypes(manifest, {
      fileName: undefined,
      outdir: typesDir,
      useCemTypes: true,
      includeDefaultDOMEvents: true,
      globalEvents,
    });

    expect(template).toBeDefined();

    fs.mkdirSync(path.join(tmpDir, "src"), { recursive: true });
    fs.writeFileSync(path.join(tmpDir, "src", "button.ts"), buttonStub);
    fs.writeFileSync(
      path.join(tmpDir, "src", "types.ts"),
      'export type Mode = "compact" | "wide";\n',
    );
    fs.mkdirSync(typesDir, { recursive: true });
    fs.writeFileSync(path.join(typesDir, "generated.d.ts"), template!);
    fs.writeFileSync(path.join(tmpDir, "consumer.ts"), consumerCode);

    const tsconfig = {
      compilerOptions: {
        target: "ESNext",
        module: "ESNext",
        moduleResolution: "bundler",
        strict: true,
        exactOptionalPropertyTypes: true,
        skipLibCheck: true,
        noEmit: true,
        types: [],
      },
      include: ["consumer.ts"],
    };

    fs.writeFileSync(
      path.join(tmpDir, "tsconfig.json"),
      JSON.stringify(tsconfig, null, 2),
    );

    const tscPath = path.resolve(
      path.dirname(require.resolve("typescript")),
      "../bin/tsc",
    );

    let result = "";
    try {
      result = execSync(
        `"${process.execPath}" "${tscPath}" --noEmit --project tsconfig.json`,
        {
          cwd: tmpDir,
          encoding: "utf-8",
          stdio: "pipe",
        },
      ).trim();
    } catch (err) {
      const output = err as {
        stdout?: string;
        stderr?: string;
        message: string;
      };
      throw new Error(
        `tsc compilation failed:\n${output.stdout || ""}\n${output.stderr || ""}`,
      );
    }

    expect(result).toBe("");
  });
});
