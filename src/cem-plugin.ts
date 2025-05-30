/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateJsxTypes } from "./type-generator";
import type { JsxTypesOptions } from "./types";

export function customElementJsxPlugin(options: JsxTypesOptions = {}) {
  return {
    name: "custom-element-jsx-integration",
    packageLinkPhase({ customElementsManifest }: any) {
      generateJsxTypes(customElementsManifest, options);
    },
  };
}
