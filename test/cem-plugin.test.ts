import { describe, expect, it } from "vitest";
import { jsxTypesGeneratorPlugin } from "../src/cem-plugin";

describe("jsxTypesGeneratorPlugin", () => {
  it("implements the cem-generator completion hook", () => {
    const plugin = jsxTypesGeneratorPlugin();

    expect(plugin.name).toBe("@wc-toolkit/jsx-types:cem-generator");
    expect(plugin.afterGenerate).toEqual(expect.any(Function));
  });
});
