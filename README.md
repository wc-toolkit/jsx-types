<div align="center">
  
![workbench with tools, html, css, javascript, and jsdoc logos](https://raw.githubusercontent.com/wc-toolkit/jsdoc-tags/refs/heads/main/assets/wc-toolkit_jsdoc.png)

</div>

# WC Toolkit Custom Element JSX Types Generator

This package is designed to generate [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html) types for your custom elements. These types will generate inline documentation, autocomplete, and type-safe validation for your custom elements in frameworks that use JSX like [React (19+)](https://react.dev/), [Preact](https://preactjs.com/) and [StencilJS](https://stenciljs.com/).

> **_NOTE:_** If you are using react 18 or below, check out our [react wrappers](https://www.npmjs.com/package/custom-element-react-wrappers).

![demo of autocomplete features for custom elements in a solidjs project](https://github.com/break-stuff/cem-tools/blob/main/demo/images/solid-js-integration/solid-js-integration.gif?raw=true)

<a href="https://stackblitz.com/edit/vitejs-vite-cm3xdr">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>

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

## Configuration

The configuration has the following optional parameters:

```ts
type JsxTypesOptions = {
  /** Used to get a specific path for a given component */
  componentTypePath?: (name: string, tag?: string) => string;
  /** Name of the file generated */
  fileName?: string;
  /** Path to output directory */
  outdir?: string;
  /** Component names to exclude form process */
  exclude?: string[];
  /** Used to get global type reference for components */
  globalTypePath?: string;
  /** Indicates if the component classes are a default export rather than a named export */
  defaultExport?: boolean;
  /** Include standard global events (ie - `onClick`, `onHover`, etc. */
  includeDefaultDOMEvents?: boolean;
  /** Used to add global element props to all component types */
  globalEvents?: string;
  /** Adds types to allow users to add undefined attributes or props to the custom elements */
  allowUnknownProps?: boolean;
  /** Adds a prefix to tag references */
  prefix?: string;
  /** Adds a suffix to tag references */
  suffix?: string;
  /** Available options for configuring the way the components description is rendered */
  componentDescriptionOptions?: ComponentDescriptionOptions;
  /** Uses your custom event type instead of `CustomEvent<T>` */
  overrideCustomEventType?: boolean;
  /** Skips the code from running */
  skip?: boolean;
  /** Shows contextual logs */
  debug?: boolean;
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

## Configuration

### Output

You can configure the destination and the file name of the generated type file using the `outdir` and `fileName` configuration.

```ts
{
  /** Path to output directory */
  outdir: 'dist',
  /** File name for the types */
  fileName: 'jsx-integration.d.ts'
}
```

### Descriptions

Using the `descriptionSrc` configuration, you can determine the source of the text that gets displayed in the editor autocomplete bubble. This is useful if you want to provide alternate descriptions for your React users.

If no value is provided, the plugin will use the `summary` property and then fall back to the `description` property if a summary is not available.

![description section of autocomplete popup from vs code](https://github.com/break-stuff/cem-plugin-vs-code-custom-data-generator/blob/main/demo/images/description.png?raw=true)

**Note:** _Descriptions support multiple lines by breaking the comment up into multiple lines whereas summaries do not and will need to be manually added using `\n`._

````js
// description example

/**
 *
 * Radio groups are used to group multiple radios or radio buttons so they function as a single form control. Here is its [documentation](https://my-docsite.com).
 *
 * Use it like this:
 * ```html
 * <radio-group value="2" size="3">
 *   <span slot="label">My Label</span>
 *   <radio-button value="1">Option 1</radio-button>
 *   <radio-button value="2">Option 2</radio-button>
 *   <radio-button value="3">Option 3</radio-button>
 * </radio-group>
 * ```
 *
 */
````

````js
// summary example

/**
 *
 * @summary Radios buttons allow users to select a single option from a group. Here is its [documentation](https://my-site.com/documentation).\n\nUse it like this:\n```html\n<radio-button value="1" disabled>Your label</radio-button>\n```
 *
 * /
````

### Default Exports

If you component class does not provide a named export and is the default export, be sure to set `defaultExport` to `true`. This will endure the import for the class gets resolved correctly.

### Types

If your components were built using TypeScript, you should define a path to your type declarations to pass that type-safety on to the JSX project.

> _***NOTE:*** All type paths should be relative to the location specified in the `outdir` option._

If your types are rolled up into a single type declaration file, you can set the `globalTypePath` option to the location of that file.

```ts
{
  globalTypePath: ".dist/types.d.ts";
}
```

If each of the component type definitions are split out by each component, you can use the `componentTypePath` to reference individual component paths.

```ts
{
  componentTypePath: (name, tag) => `./types/${tag}/${name}.d.ts`;
}
```

> _***NOTE:*** It's important to note that if a type path is not provided, the generator will fall back to the type defined in the Custom Elements Manifest._

### Custom Event Type Handling with `overrideCustomEventType`

By default, the JSX Types Generator uses the standard `CustomEvent<T>` type for all custom events emitted by your components. However, some libraries may create custom event types.

The `overrideCustomEventType` option allows you to use your own event type convention instead

When enabled:

- The generator will not explicitly use `CustomEvent<T>` in the generated types
- Instead, it will use the event type exactly as specified in your components
- This works well with frameworks that have their own event wrapper types

#### Use Cases

This option is particularly useful when:

1. Your framework has its own event type system (like some versions of Stencil)
2. You've created a custom event type that extends or modifies the standard CustomEvent
3. You're working with a TypeScript setup that has special handling for events

#### Example

Without this option, events might be typed like:

```typescript
"onmy-change"?: (e: CustomEvent<T>) => void;
```

With `overrideCustomEventType: true`, if your event type is defined as `MyCustomEvent<T>`, the generator will preserve that type:

```typescript
"onsl-change"?: (e: MyCustomEvent<T>) => void;
```

> **_NOTE:_** Only enable this option if you have specific event typing needs. For most cases, the default `CustomEvent<T>` is the appropriate choice.

### Type Flexibility with `allowUnknownProps`

By default, the generated types are strict, only allowing properties and events that are explicitly defined in the custom elements manifest. This ensures type safety but can sometimes be restrictive when you need to pass additional properties that aren't formally defined in the component.

When enabled:

- Components will accept any additional properties beyond those explicitly defined
- This can be helpful in the following scenarios:
  - When components have undocumented properties
  - When you need to pass data attributes (`data-*`)
  - When using third-party libraries that attach special properties
  - During development when component APIs are still evolving

Example usage:

```jsx
// With allowUnknownProps: true
<my-component
  standardProp="value"
  data-analytics="click-tracking" // Works with allowUnknownProps: true
  custom-attribute="something" // Works with allowUnknownProps: true
/>
```

> **_NOTE:_** While this option makes development more flexible, it comes at the cost of type safety. Use it sparingly and consider adding proper types to your components instead whenever possible.

## Scoped Elements

There are two ways to work with scoped custom elements (elements with prefixes or suffixes):

### 1. Configuration Options: `prefix` and `suffix`

When generating your types, you can automatically add prefixes or suffixes to all tags:

```ts
// In your configuration
{
  // Adds "my-" to the beginning of all component tags
  prefix: "my-",

  // Adds "-component" to the end of all component tags
  suffix: "-component"
}
```

This will generate types where components like `<button>` become available as `<my-button-component>`.

### 2. Using `ScopedElements` Utility Type

If you've already generated types without prefixes/suffixes, you can use the `ScopedElements` utility type to create scoped versions:

```ts
// scoped-types.d.ts
import type { CustomElements, ScopedElements } from "path/to/jsx-types";

declare module "my-app" {
  namespace JSX {
    interface IntrinsicElements extends ScopedElements<"prefix-", "-suffix"> {}
  }
}
```

> **Note:** When using `ScopedElements`, you'll lose the detailed hover documentation that would normally be available when using the components.

## Adding DOM Event Support

### DOM Event Handlers

Custom elements can respond to standard DOM events like clicks, keyboard input, and focus changes. There are two ways to add these event types to your components:

### 1. Using `includeDefaultDOMEvents`

The simplest approach - automatically include all standard DOM event handlers:

```ts
{
  includeDefaultDOMEvents: true; // Adds onClick, onKeyDown, onFocus, etc. to all components
}
```

This adds common event handlers like `onClick`, `onMouseOver`, `onKeyDown`, etc. to all your components.

### 2. Using `globalEvents` for Custom Control

For more control over which events are included:

```ts
{
  globalEvents: `
    // Only include the events you need
    /** Triggered when the user clicks the element */
    onMyClick?: (event: MouseEvent) => void;
    
    /** Triggered when the element gains focus */
    onMyFocus?: (event: FocusEvent) => void;
  `;
}
```

### Combining Both Approaches

You can use both options together:

```ts
{
  // Include standard DOM events
  includeDefaultDOMEvents: true,

  // Add your own custom events
  globalEvents: `
    /** Custom event fired when special action occurs */
    onMySpecialEvent?: (event: CustomEvent<{ id: string }>) => void;
  `
}
```

### Available Default DOM Events

When using `includeDefaultDOMEvents: true`, the following event categories are included:

- **Mouse Events**: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, etc.
- **Keyboard Events**: onKeyDown, onKeyUp, onKeyPress
- **Focus Events**: onFocus, onBlur
- **Form Events**: onChange, onInput, onSubmit, onReset
- **UI Events**: onScroll
- **Wheel Events**: onWheel
- **Animation Events**: onAnimationStart, onAnimationEnd, onAnimationIteration
- **Transition Events**: onTransitionEnd
- **Media Events**: onLoad, onError
- **Clipboard Events**: onCopy, onCut, onPaste

> **Tip:** Always include JSDoc comments for your custom events. These comments will appear in editor tooltips, improving the developer experience.
