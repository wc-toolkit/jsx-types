---
"@wc-toolkit/jsx-types": minor
---

Add `exactOptionalPropertyTypes` option for TS `exactOptionalPropertyTypes` compatibility

When enabled, the generator appends `| undefined` to every optional property
type — component props, SolidJS props, event handlers, CSS custom properties,
and global props/events — so the generated JSX types accept explicit `undefined`
values in projects using TypeScript's `exactOptionalPropertyTypes` compiler
option. Types that already include `undefined` are not duplicated. Defaults to
`false`, preserving existing behavior.
