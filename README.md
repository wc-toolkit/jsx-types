<div align="center">
  
![workbench with tools, html, css, javascript, and jsx logos](https://raw.githubusercontent.com/wc-toolkit/jsx-types/refs/heads/main/assets/wc-toolkit_jsx.png)

</div>

# WC Toolkit Custom Element JSX Types Generator

This package is designed to generate [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html) types for your custom elements. These types will generate inline documentation, autocomplete, and type-safe validation for your custom elements in frameworks that use JSX like [React (19+)](https://react.dev/), [Preact](https://preactjs.com/), [StencilJS](https://stenciljs.com/), and [SolidJS](https://www.solidjs.com/).

![demo of autocomplete features for custom elements in a jsx project](https://github.com/break-stuff/cem-tools/blob/main/demo/images/solid-js-integration/solid-js-integration.gif?raw=true)

This allows developers to use your custom elements in their JSX projects with full type support, making it easier to integrate and use your components.

> **_NOTE:_** If you are using react 18 or below, check out our [react wrappers](https://wc-toolkit.com/integrations/react/).

Types will be generated for all custom elements defined in your [Custom Elements Manifest](https://custom-elements-manifest.open-wc.org/). 

This includes types and documentation for:

- Custom elements (types and docs)
- Attributes (types and docs)
- Properties (types and docs)
- Events (types and docs)
- Methods (types and docs)
- Slots (docs)
- CSS Custom Properties (docs)
- CSS States (docs)

## Usage

This package includes two ways to generate the custom data config file:

1. programatically calling a function in your build pipeline
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

In order for teams to take advantage of this, all they need to do is import the types in their project. There are two ways to configure the JSX types:

### Option 1: TSConfig Configuration

Add the types to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["path/to/jsx-types"]
  }
}
```

### Option 2: TypeScript Declaration File

Create a declaration file and extend JSX's `IntrinsicElements`:

```ts
// custom-elements-types.d.ts
import type { CustomElements, CustomCssProperties } from "path/to/jsx-types";

declare module "my-library" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}
```

> **_NOTE:_** Libraries will have their own module names you will need to use when extending the `IntrinsicElements` interface. For example, Preact requires you to use the `"preact"` module name instead of `"my-library"` (`declare module "preact"`) and StencilJS uses "@stencil/core" (`declare module "@stencil/core"`).



## Configuration Options

The `JsxTypesOptions` interface provides several configuration options to customize how types are generated for your project:

### Basic Options

#### `fileName`
- **Type:** `string`
- **Default:** `"custom-element-jsx.d.ts"`
- **Description:** The name of the generated type definition file.

```ts
{
  fileName: "my-components.d.ts"
}
```

#### `outdir`
- **Type:** `string`
- **Default:** `"./"`
- **Description:** The output directory where the generated types file will be saved.

```ts
{
  outdir: "./types"
}
```

#### `exclude`
- **Type:** `string[]`
- **Default:** `[]`
- **Description:** Array of component names to exclude from type generation.

```ts
{
  exclude: ["my-internal-component", "my-deprecated-component"]
}
```

### Import Configuration

#### `componentTypePath`
- **Type:** `(name: string, tag?: string, modulePath?: string) => string`
- **Description:** A function that returns the import path for each component. This is useful when you need to customize the import statements in the generated types.

```ts
{
  componentTypePath: (name, tagName) => 
    `my-lib/components/${tagName}/${tagName}.js`
}
```

#### `globalTypePath`
- **Type:** `string`
- **Description:** When provided, generates a single import statement for all components from this path instead of individual imports. This is useful if your library has a barrel file that exports all components.

```ts
{
  globalTypePath: "my-lib"
}
```

#### `defaultExport`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Set to `true` if your component classes use default exports instead of named exports.

```ts
{
  defaultExport: true
}
```

### Event Configuration

#### `stronglyTypedEvents`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** This feature is highly recommended for better type safety and autocomplete. Creates event types where the event's target is strongly typed to the custom element, providing better autocomplete and type safety for event handlers. When enabled, `e.detail` and `e.target` are strongly typed.

```ts
{
  stronglyTypedEvents: true
}
```

#### `includeDefaultDOMEvents`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Includes standard DOM events (e.g., `onClick`, `onHover`, etc.) in the generated types. The down side is that it can pollute the component API with attributes that aren't relevant to the component.

```ts
{
  includeDefaultDOMEvents: true
}
```

#### `globalEvents`
- **Type:** `string`
- **Description:** TypeScript type reference for global event props to add to all component types. This can be useful for adding custom events or event handlers to all components for things like custom telemetry.

```ts
{
  globalEvents: "React.DOMAttributes<HTMLElement>"
}
```

### Additional Options

#### `allowUnknownProps`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Allows users to add undefined attributes or props to the custom elements without TypeScript errors.

```ts
{
  allowUnknownProps: true
}
```

#### `excludeCssCustomProperties`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Excludes CSS custom property types from generation.

```ts
{
  excludeCssCustomProperties: true
}
```

#### `tagFormatter`
- **Type:** `(tagName: string) => string`
- **Description:** Optional function to format tag names before processing. Useful for adding prefixes, suffixes, or transforming tag names.

```ts
{
  tagFormatter: (tagName) => tagName.replace("my-", "custom-")
}
```

### Utility Options

#### `skip`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Skips the entire type generation process when set to `true`.

```ts
{
  skip: process.env.SKIP_TYPES === "true"
}
```

#### `debug`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Enables debug logging to help troubleshoot type generation issues.

```ts
{
  debug: true
}
```

### Deprecated Options

#### `prefix` _(deprecated)_
- **Type:** `string`
- **Description:** Use `tagFormatter` instead. Adds a prefix to tag references.

#### `suffix` _(deprecated)_
- **Type:** `string`
- **Description:** Use `tagFormatter` instead. Adds a suffix to tag references.

#### `overrideCustomEventType` _(deprecated)_
- **Type:** `boolean`
- **Default:** `false`
- **Description:** This feature never worked as intended and will be removed in the next major version.

## Framework-Specific Considerations

### SolidJS

When using these generated types with SolidJS, there are several important considerations to ensure proper integration:

#### Custom TypeScript Declaration File

If you are using a custom TypeScript declaration file, SolidJS has a custom type to include the attribute prefixes, so you will need to use `CustomElementsSolidJs` instead of `CustomElements`. For example:

```ts
// custom-elements-types.d.ts
import type { CustomElementsSolidJs, CustomCssProperties } from "path/to/jsx-types";

declare module "my-library" {
  namespace JSX {
    interface IntrinsicElements extends CustomElementsSolidJs {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}
```

#### Property Binding

SolidJS generates special type definitions that include property prefixes to handle different binding scenarios:

- **`attr:propertyName`** - For attribute binding (string values)
- **`prop:propertyName`** - For property binding (any type)
- **`bool:propertyName`** - For boolean properties

This allows SolidJS to properly handle web component properties:

```tsx
// Attribute binding (as string)
<my-component attr:value={someString} />

// Property binding (with signals or objects)
<my-component prop:value={someSignal()} />

// Boolean property
<my-component bool:disabled={isDisabled} />
```

#### Custom Events

SolidJS uses the `on:` prefix for custom events. The generated types include proper event handler types:

```tsx
import { createSignal } from 'solid-js';

const [value, setValue] = createSignal('');

<my-input
  prop:value={value()}
  on:my-input={(e) => {
    // e.target is strongly typed when stronglyTypedEvents is enabled
    setValue(e.target.value);
  }}
  on:my-change={(e) => {
    // e.detail is strongly typed when stronglyTypedEvents is enabled
    console.log('Changed:', e.detail);
  }}
/>
```

#### Recommended Configuration for SolidJS

When generating types for SolidJS projects, use the following configuration:

```ts
generateJsxTypes(manifest, {
  outdir: "./types",
  fileName: "custom-element-jsx.d.ts",
  defaultExport: true, // if your components use default exports
  stronglyTypedEvents: true, // for better event type safety
  componentTypePath: (name, tagName) => 
    `your-lib/components/${tagName}/${tagName}.js`
});
```

#### TypeScript Declaration

For SolidJS, create a declaration file that extends the `solid-js` JSX namespace:

```ts
// custom-elements-types.d.ts
import type { CustomElements, CustomCssProperties } from "./path/to/types/custom-element-jsx";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
}

// Optional: Extend CSS properties
declare module "csstype" {
  interface Properties extends CustomCssProperties {}
}
```

#### innerHTML and textContent

SolidJS types also include `innerHTML` and `textContent` properties for setting element content:

```tsx
<my-component innerHTML="<strong>Bold text</strong>" />
<my-component textContent="Plain text content" />
```

#### Reactive Property Updates

When working with reactive values in SolidJS, always use the `prop:` prefix for non-string properties:

```tsx
import { createSignal } from 'solid-js';

const [isOpen, setIsOpen] = createSignal(false);
const [items, setItems] = createSignal([]);

<my-dialog prop:open={isOpen()} />
<my-list prop:items={items()} />
```

#### Refs and Methods

Access custom element methods using SolidJS refs:

```tsx
import { onMount } from 'solid-js';

let dialogRef: any;

onMount(() => {
  // Call custom element methods
  dialogRef?.show();
});

<my-dialog ref={dialogRef}>
  Dialog content
</my-dialog>
```

### React

For React 19+ projects, the types work with the native custom element support:

```tsx
<my-component
  value="hello"
  disabled={false}
  onmy-event={(e) => console.log(e)}
/>
```

### Preact

Preact requires extending the `"preact"` module:

```ts
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
}
```

### StencilJS

StencilJS requires extending the `"@stencil/core"` module:

```ts
declare module "@stencil/core" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
}
```

## Complete Configuration Example

Here's a comprehensive example showing all commonly used options:

```ts
import { generateJsxTypes } from "@wc-toolkit/jsx-types";
import manifest from "./custom-elements.json";

generateJsxTypes(manifest, {
  // Output configuration
  fileName: "custom-element-jsx.d.ts",
  outdir: "./types",
  
  // Component filtering
  exclude: ["internal-component"],
  
  // Import configuration
  componentTypePath: (name, tagName, modulePath) => {
    return `my-library/components/${tagName}/${tagName}.js`;
  },
  defaultExport: true,
  
  // Event configuration
  stronglyTypedEvents: true,
  includeDefaultDOMEvents: true,
  
  // Tag formatting
  tagFormatter: (tagName) => tagName.toLowerCase(),
  
  // Additional features
  allowUnknownProps: false,
  excludeCssCustomProperties: false,
  
  // Development
  debug: process.env.DEBUG === "true",
  skip: false,
});
```

For more information about this library and other Web Component tools, check out the [WC Toolkit website](https://wc-toolkit.com).