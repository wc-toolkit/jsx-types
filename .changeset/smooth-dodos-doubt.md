---
"@wc-toolkit/jsx-types": minor
---

Add type declarations for react/jsx-runtime and react/jsx-dev-runtime

When using the modern JSX transform (`"jsx": "react-jsx"`), TypeScript
resolves JSX types through `react/jsx-runtime` and `react/jsx-dev-runtime`,
not the top-level `"react"` module. These new module augmentations ensure
IntrinsicElements and CSSProperties are available for consumers using the
automatic runtime.
