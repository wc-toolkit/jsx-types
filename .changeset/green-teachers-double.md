---
"@wc-toolkit/jsx-types": minor
---

Add CEM-backed prop typing with the new `useCemTypes` and `typesSrc` options.

When `useCemTypes` is enabled, generated JSX prop types can read from configurable
CEM type properties and now import referenced named types so those annotations are
available in the output. The pre-commit hook now also runs the build to catch type
and packaging errors before commit.
