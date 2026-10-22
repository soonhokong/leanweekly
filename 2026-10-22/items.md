---
issue: 34
date: 2026-10-22
window_start: 2026-10-21
window_end: 2026-10-22
---

## Lean core and ecosystem

- **Sebastian Ullrich proposes precomputed prefix trees to speed up Lean imports.** The open pull request replaces hash maps of imported constants, built eagerly at import time, with per-module prefix trees precomputed when oleans are written and merged lazily on first access. The change cuts `import Lean` wall-clock time by 28% and Mathlib's import phase by 21%, in exchange for about 6% larger standard library oleans. ([lean4#14362](https://github.com/leanprover/lean4/pull/14362))
- **Leo de Moura changes Lean's `lia` to avoid large Cooper case splits.** A Cooper case split on a variable has as many cases as its coefficient in the conflicting bounds. Three merged pull requests make `lia` reorder variables instead of enumerating splits with many cases, exactly eliminate equations without unit coefficients (as in the Omega test), and solve large-modulus divisibility goals without a split per residue. ([lean4#15835](https://github.com/leanprover/lean4/pull/15835), [lean4#15838](https://github.com/leanprover/lean4/pull/15838), [lean4#15827](https://github.com/leanprover/lean4/pull/15827))
- **Lean 4 merges libuv buffer fix and refactor from Sofia Rodrigues.** The fix, merged October 14, makes send and recv fail with an invalid-argument error for buffers of 4 GiB or more, instead of letting the length wrap to 32 bits. The refactor, merged October 15, adds owned_ref, a helper that owns Lean objects and helps avoid hundreds of lean_inc and lean_dec in libuv code. ([lean4#15598](https://github.com/leanprover/lean4/pull/15598), [lean4#15603](https://github.com/leanprover/lean4/pull/15603))
