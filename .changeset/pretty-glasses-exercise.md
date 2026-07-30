---
"@wc-toolkit/jsx-types": patch
---

Fix strongly typed CustomEvent detail types in generated .d.ts. Events whose detail is a named type (e.g. `CustomEvent<MyDetail>`) now import the detail type alongside the component element so the alias resolves. Only single named identifiers are recovered and imported; unions, nested generics, arrays and namespaced details have no single importable name and are left as-is. Events with a bare `CustomEvent`/`Event` type and components without typed event details are unaffected.
