# @wc-toolkit/jsx-types

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
