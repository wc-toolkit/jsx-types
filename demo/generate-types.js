import { generateJsxTypes } from "../dist/index.js";
import manifest from "./shoelace-cem.json" with { type: "json" };

const types = generateJsxTypes(manifest, {
  outdir: "./demo/types",
  tagFormatter: (tagName) => tagName.replace("sl-", "wa-"),
  includeGlobalEvents: true,
  allowUnknownProps: true,
  defaultExport: false,
  componentDescriptionOptions: {
    descriptionSrc: "summary",
  },
});

console.log(types);
