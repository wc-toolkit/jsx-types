/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateJsxTypes } from "./type-generator";
import type { JsxTypesOptions } from "./types";
import type { Plugin } from "@wc-toolkit/cem-generator";
import type { Package } from "custom-elements-manifest";

/**
 * Plugin to generate JSX types for web components based on a custom elements manifest.
 * 
 * @param options - Configuration options for the JSX types plugin
 * @returns 
 */
export function jsxTypesPlugin(options: JsxTypesOptions = {}) {
  return {
    name: "@wc-toolkit/jsx-types",
    packageLinkPhase({ customElementsManifest }: any) {
      generateJsxTypes(customElementsManifest, options);
    },
  };
}

/** Plugin for @wc-toolkit/cem-generator that generates JSX types from the finalized CEM. */
export function jsxTypesGeneratorPlugin(options: JsxTypesOptions = {}): Plugin {
  return {
    name: "@wc-toolkit/jsx-types:cem-generator",
    afterGenerate(manifest: Package) {
      generateJsxTypes(manifest, options);
    },
  };
}
