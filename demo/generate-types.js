import { generateJsxTypes } from '../dist/index.js';
import manifest from './shoelace-cem.json' with { type: 'json' };

generateJsxTypes(manifest, {
  componentDescriptionOptions: {
    descriptionSrc: 'summary'
  }
});
