import { generateJsxTypes } from "../../../dist/index.js";
import manifest from "@awesome.me/webawesome/dist/custom-elements.json" with { type: "json" };

generateJsxTypes(manifest, {
  outdir: "./types",
  componentTypePath: (_, tagName) =>
    `@awesome.me/webawesome/dist/components/${tagName?.replace("wa-", "")}/${tagName?.replace("wa-", "")}.js`,
  defaultExport: true,
  stronglyTypedEvents: true,
});
