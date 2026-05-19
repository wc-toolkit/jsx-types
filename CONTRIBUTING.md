# Contributing

Thanks for contributing to `@wc-toolkit/jsx-types`.

This repository generates JSX type definitions for custom elements from a Custom Elements Manifest. Keep changes focused, typed, and easy to review.

## Local setup

1. Install dependencies with `pnpm install`.
2. Use `pnpm` for project commands.
3. Make changes in `src/`, add or update tests in `test/`, and use `demo/basic/` when you need a realistic manifest example.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/` | Library source code |
| `test/` | Vitest coverage for generator behavior |
| `demo/basic/` | Sample component library and generated manifest used for examples/tests |
| `dist/` | Build output generated from `src/` |

## Development workflow

1. Read the relevant code before editing and keep changes surgical.
2. Prefer extending existing helpers and patterns over adding parallel implementations.
3. Preserve strict TypeScript types; do not introduce `any` unless there is no better option.
4. Update README examples or option docs when public behavior changes.
5. Add or update tests whenever generation behavior, output shape, or public options change.

## Quality checks

Run these commands before opening a PR:

```bash
pnpm lint
pnpm test
pnpm build
```

Useful repo scripts:

```bash
pnpm format
pnpm demo
pnpm changeset
```

## Release notes

All pull requests should include a changeset created with `pnpm changeset`.

## Pull requests

PRs are easiest to review when they:

- include a changeset,
- explain the user-facing impact,
- include tests or a clear reason tests were not needed,
- avoid unrelated refactors,
- call out any generated output or documentation updates.

## Guidance for coding agents

Agents working in this repository should follow the same standards as human contributors:

1. Use `pnpm`, not `npm`, for direct project commands.
2. Prefer small, behavior-safe edits over broad rewrites.
3. Do not hand-edit `dist/` unless the task explicitly requires committed build output.
4. Reuse existing source patterns before introducing new abstractions.
5. Update tests and docs alongside code when behavior changes.
6. Run `pnpm lint`, `pnpm test`, and `pnpm build` for code changes; documentation-only changes usually do not need those commands.

## Questions

If repository behavior and documentation disagree, follow the code and update the docs in the same change.
