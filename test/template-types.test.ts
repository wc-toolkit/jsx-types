import { afterAll, describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import os from "os";
import ts from "typescript";
import type * as cem from "custom-elements-manifest";
import { generateTemplateTypes } from "../src/template-types";

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "template-types-"));

afterAll(() => {
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

const manifest = {
  schemaVersion: "1.0.0",
  readme: "",
  modules: [
    {
      kind: "javascript-module",
      path: "src/elements.ts",
      declarations: [
        {
          kind: "class",
          name: "UiInput",
          tagName: "ui-input",
          customElement: true,
          events: [
            {
              name: "value-change",
              type: { text: "CustomEvent<{ value: string }>" },
            },
          ],
        },
        {
          kind: "class",
          name: "UiButton",
          tagName: "ui-button",
          customElement: true,
          events: [],
        },
        {
          kind: "class",
          name: "Hidden",
          tagName: "ui-hidden",
          customElement: true,
        },
      ],
    },
  ],
} as unknown as cem.Package;

describe("generateTemplateTypes", () => {
  it("augments the JSX namespace of the named module", () => {
    const text = generateTemplateTypes(manifest, {
      moduleName: "my-lib",
      componentTypePath: () => "./elements",
    });

    expect(text).toContain('declare module "my-lib" {');
    expect(text).toContain("export namespace JSX {");
    expect(text).toContain("export interface IntrinsicElements {");
  });

  it("maps each element to its class and events", () => {
    const text = generateTemplateTypes(manifest, {
      moduleName: "my-lib",
      componentTypePath: () => "./elements",
    });

    expect(text).toContain(
      'import type { UiInput, UiButton, Hidden } from "./elements";',
    );
    expect(text).toContain(
      '"ui-input": TemplateProps<UiInput> & TemplateEvents<{ "value-change": CustomEvent<{ value: string }>; }> & TemplateDomEvents;',
    );
    expect(text).toContain(
      '"ui-button": TemplateProps<UiButton> & TemplateDomEvents;',
    );
  });

  it("skips excluded tags", () => {
    const text = generateTemplateTypes(manifest, {
      moduleName: "my-lib",
      exclude: ["ui-hidden"],
    });

    expect(text).not.toContain("ui-hidden");
    expect(text).not.toContain("Hidden");
  });

  it("writes the file only when fileName is given", () => {
    const outdir = path.join(tmpDir, "written");
    generateTemplateTypes(manifest, {
      moduleName: "my-lib",
      outdir,
      fileName: "template-types.d.ts",
      componentTypePath: () => "./elements",
    });

    const written = fs.readFileSync(
      path.join(outdir, "template-types.d.ts"),
      "utf8",
    );
    expect(written).toContain('declare module "my-lib"');
  });
});

describe("generated types", () => {
  it("type-check template bindings against the element class and events", () => {
    const root = fs.mkdtempSync(path.join(tmpDir, "consumer-"));
    const write = (file: string, contents: string) => {
      fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
      fs.writeFileSync(path.join(root, file), contents);
    };

    write(
      "node_modules/my-lib/package.json",
      JSON.stringify({ name: "my-lib", types: "index.d.ts" }),
    );
    write(
      "node_modules/my-lib/index.d.ts",
      "export declare function html(s: TemplateStringsArray, ...v: unknown[]): unknown;",
    );
    write(
      "src/elements.ts",
      [
        "export class UiInput extends HTMLElement {",
        "  value = '';",
        "  disabled = false;",
        "}",
        "export class UiButton extends HTMLElement {",
        "  variant: 'primary' | 'secondary' = 'primary';",
        "}",
        "export class Hidden extends HTMLElement {}",
      ].join("\n"),
    );
    write(
      "src/consumer.ts",
      [
        'import type { JSX } from "my-lib";',
        'type Entry = JSX.IntrinsicElements["ui-input"];',
        'export const value: keyof Entry = ".value";',
        "// @ts-expect-error unknown property",
        'export const unknown: keyof Entry = ".nope";',
        'export const listener: NonNullable<Entry["onvalue-change"]> = (e: CustomEvent<{ value: string }>) => e.detail.value;',
        "// @ts-expect-error listener for the wrong event",
        'export const wrong: NonNullable<Entry["onvalue-change"]> = (e: MouseEvent) => e.clientX;',
        "// @ts-expect-error helper types are not exported from the library",
        'export type Leak = import("my-lib").TemplateProps<unknown>;',
      ].join("\n"),
    );

    generateTemplateTypes(manifest, {
      moduleName: "my-lib",
      outdir: path.join(root, "src"),
      fileName: "template-types.ts",
      componentTypePath: () => "./elements",
    });

    const program = ts.createProgram(
      [
        path.join(root, "src/template-types.ts"),
        path.join(root, "src/consumer.ts"),
      ],
      {
        strict: true,
        target: ts.ScriptTarget.ES2022,
        module: ts.ModuleKind.ESNext,
        moduleResolution: ts.ModuleResolutionKind.Bundler,
        lib: ["lib.es2022.d.ts", "lib.dom.d.ts"],
        noEmit: true,
      },
    );
    const messages = ["template-types.ts", "consumer.ts"].flatMap((name) => {
      const sf = program.getSourceFile(path.join(root, "src", name));
      return sf
        ? program
            .getSemanticDiagnostics(sf)
            .map((d) => ts.flattenDiagnosticMessageText(d.messageText, " "))
        : [`missing ${name}`];
    });

    expect(messages).toEqual([]);
  });
});
