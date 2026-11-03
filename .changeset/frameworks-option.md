---
"@wc-toolkit/jsx-types": minor
---

Add a `frameworks` option to limit the frameworks whose JSX the types augment. Each augmentation is a `declare module` of the framework's own module, which a project without that framework cannot resolve unless it sets `skipLibCheck`. It defaults to every framework, as before.
