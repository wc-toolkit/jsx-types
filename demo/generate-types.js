import { generateJsxTypes } from "../dist/index.js";
import manifest from "./shoelace-cem.json" with { type: "json" };

generateJsxTypes(manifest, {
  outdir: "./demo/types",
  includeGlobalEvents: true,
  allowUnknownProps: true,
  defaultExport: false,
  componentDescriptionOptions: {
    descriptionSrc: "summary",
  },
});
