<div align="center">
  
![workbench with tools, html, css, javascript, and jsx logos](https://raw.githubusercontent.com/wc-toolkit/jsx-types/refs/heads/main/assets/wc-toolkit_jsx.png)

</div>

# WC Toolkit Custom Element JSX Types Generator

This package is designed to generate [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html) types for your custom elements. These types will generate inline documentation, autocomplete, and type-safe validation for your custom elements in frameworks that use JSX like [React (19+)](https://react.dev/), [Preact](https://preactjs.com/) and [StencilJS](https://stenciljs.com/).

![demo of autocomplete features for custom elements in a jsx project](https://github.com/break-stuff/cem-tools/blob/main/demo/images/solid-js-integration/solid-js-integration.gif?raw=true)

This allows developers to use your custom elements in their JSX projects with full type support, making it easier to integrate and use your components.

> **_NOTE:_** If you are using react 18 or below, check out our [react wrappers](https://www.npmjs.com/package/custom-element-react-wrappers).

Types will be generated for all custom elements defined in your [Custom Elements Manifest](https://custom-elements-manifest.open-wc.org/). 

This includes types and documentation for:

- Custom elements (types and docs)
- Attributes (types and docs)
- Properties (types and docs)
- Events (types and docs)
- Methods (types and docs)
- Slots (docs)
- CSS Custom Properties (docs)
- CSS Props (docs)
- CSS States (docs)

## Usage

This package includes two ways to generate the custom data config file:

1. calling a function in your build pipeline
2. as a plugin for the [Custom Element Manifest Analyzer](https://custom-elements-manifest.open-wc.org/)

### Install

```bash
npm i -D @wc-toolkit/jsx-types
```

### Build Pipeline

```ts
import { generateJsxTypes, JsxTypesOptions } from "@wc-toolkit/jsx-types";
import manifest from "./path/to/custom-elements.json";

const options: JsxTypesOptions = {...};

generateJsxTypes(manifest, options);
```

### CEM Analyzer

#### Set-up

Ensure the following steps have been taken in your component library prior to using this plugin:

- Install and set up the [Custom Elements Manifest Analyzer](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/)
- Create a [config file](https://custom-elements-manifest.open-wc.org/analyzer/config/#config-file)

#### Import

```js
// custom-elements-manifest.config.js

import { jsxTypesPlugin } from "@wc-toolkit/jsx-types";

const options = {...};

export default {
  plugins: [
    jsxTypesPlugin(options)
  ],
};
```

## Implementation

In order for teams to take advantage of this, all they need to do is import the types in their project and extend JSX's `IntrinsicElements`. They should immediately begin seeing the type support for your components in the editor.

```ts
// custom-elements-types.d.ts
import type { CustomElements } from "path/to/jsx-types";

declare module "my-app" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
}
```

> **_NOTE:_** Libraries will often have their own module names you will need to use when extending the `IntrinsicElements` interface. For example, Preact requires you to use the `"preact"` module name instead of `"my-app"` (`declare module "preact"`) and StencilJS uses "@stencil/core" (`declare module "@stencil/core"`).

For more detailed information on how to configure and manage these types, be sure to check out the [official docs](https://wc-toolkit.com/integrations/jsx).