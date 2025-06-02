/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateJsxTypes } from "./type-generator";
import type { JsxTypesOptions } from "./types";

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
