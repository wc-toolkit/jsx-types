import { describe, expect, it } from "vitest";
import type * as cem from "custom-elements-manifest";
import manifest from "../demo/basic/custom-elements.json";
import { generateJsxTypes } from "../src/type-generator";

describe("generateJsxTypes", () => {
  it("includes the global role attribute in BaseProps", () => {
    const template = generateJsxTypes(manifest as cem.Package, {
      fileName: undefined,
    });

    expect(template).toContain('role?: string;');
  });
});
