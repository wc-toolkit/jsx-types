# @wc-toolkit/jsx-types

## 1.7.1

### Patch Changes

- 3972ca8: Fix strongly typed CustomEvent detail types in generated .d.ts. Events whose detail is a named type (e.g. `CustomEvent<MyDetail>`) now import the detail type alongside the component element so the alias resolves. Only single named identifiers are recovered and imported; unions, nested generics, arrays and namespaced details have no single importable name and are left as-is. Events with a bare `CustomEvent`/`Event` type and components without typed event details are unaffected.

## 1.7.0

### Minor Changes

- 5da16e9: Add type declarations for react/jsx-runtime and react/jsx-dev-runtime

  When using the modern JSX transform (`"jsx": "react-jsx"`), TypeScript
  resolves JSX types through `react/jsx-runtime` and `react/jsx-dev-runtime`,
  not the top-level `"react"` module. These new module augmentations ensure
  IntrinsicElements and CSSProperties are available for consumers using the
  automatic runtime.

## 1.6.0

### Minor Changes

- a61908d: Add CEM-backed prop typing with the new `useCemTypes` and `typesSrc` options.

  When `useCemTypes` is enabled, generated JSX prop types can read from configurable
  CEM type properties and now import referenced named types so those annotations are
  available in the output. The pre-commit hook now also runs the build to catch type
  and packaging errors before commit.

## 1.5.4

### Patch Changes

- 90964cb: Add the global `role` attribute to generated `BaseProps` so custom elements accept semantic role annotations in JSX. Also avoid logging a generated output path when file generation is skipped.

## 1.5.3

### Patch Changes

- b79f3ac: Fix generator creating invalid imports (like `import type { * }`) when using un-namespaced wildcard exports

## 1.5.2

### Patch Changes

- 5982e68: Fixed issue where `CustomEvent` was returning `CustomElement`

## 1.5.1

### Patch Changes

- 8e2508f: Updated strongly typed event names to include `Element` to prevent name collisions

## 1.5.0

### Minor Changes

- 798ff12: Deprecated the `overrideCustomEventType` option. This was never working as intended and has resulted in malformed types. It will be removed in the next major version.
- 798ff12: Added `stronglyTypedEvents` config to strongly type the `event.target` property
- 798ff12: Added types for SolidJS

## 1.4.3

### Patch Changes

- d775dac: Fixed module name for Hono JSX types

## 1.4.2

### Patch Changes

- 4870f71: Updated exports to explicitly define the exports and types

## 1.4.1

### Patch Changes

- b6f56f7: Fixed CJS export

## 1.4.0

### Minor Changes

- 90f65b2: Upgrade `@wc-toolkit/cem-utilities` dependency to 1.4.1
- 90f65b2: Deprecated `prefix` and `suffix` options
- 90f65b2: Added `tagFormatter` configuration option
- 90f65b2: Updated configuration to prevent file generation if `fileName` option is "falsey"
- 90f65b2: Updated `generateJsxTypes` to return type file contents

## 1.3.0

### Minor Changes

- 706bb2e: Added type generator for component custom CSS properties

## 1.2.2

### Patch Changes

- a95f31b: Fix duplicate imports when `defaultExport` option is "true"

## 1.2.1

### Patch Changes

- fd89b2e: Fix namespacing for type declarations

## 1.2.0

### Minor Changes

- 538c54d: Simplify implmentation details by including the `InstrinsicElements` extensions in the type

### Patch Changes

- 538c54d: Deprecated the runtime scoping utility as it creates duplicate type entries

## 1.1.0

### Minor Changes

- cc31aff: Add module path parameter to `componentTypePath` config option

## 1.0.0

### Patch Changes

- d68f17f: initial commit
