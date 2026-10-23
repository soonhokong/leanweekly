---
issue: 34
date: 2026-10-22
window_start: 2026-10-21
window_end: 2026-10-22
---

## Verification in practice

- **Tanner Duve of Logical Intelligence offers Veil an invariant-synthesis tactic.** Written for Veil, a Lean-based verifier for transition systems, #synthesize_invariants runs the universal PDR algorithm on a module and its safety property. It returns inductive invariants or a counterexample (both proven sound), a "no universal invariant" result (not proven sound) or "unknown"; it succeeded on every Veil example tested within its supported fragment. ([leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/537982-Veil/topic/.23synthesize_invariants.20tactic.20using.20PDR.20algorithm/with/634045646), [verse-lab/veil](https://github.com/verse-lab/veil/compare/main...tannerduve:veil:updr))
- **ATOMSLab's LeanSMILES formalizes molecular representations and learning algorithms in Lean.** The repository's SMILES toolkit parses SMILES strings into typed molecular graphs, with a canonicity proof for canonical SMILES and an order-invariance proof for RDKit-compatible Morgan fingerprints. Its LeanLearn library covers linear and logistic regression, and the machine-learning pipeline from SMILES to model runs in Lean, with results checked against scikit-learn. ([ATOMSLab/LeanSMILES](https://github.com/ATOMSLab/LeanSMILES))

## Lean core and ecosystem

- **Sebastian Ullrich proposes precomputed prefix trees to speed up Lean imports.** The open pull request replaces hash maps of imported constants, built eagerly at import time, with per-module prefix trees precomputed when oleans are written and merged lazily on first access. The change cuts `import Lean` wall-clock time by 28% and Mathlib's import phase by 21%, in exchange for about 6% larger standard library oleans. ([lean4#14362](https://github.com/leanprover/lean4/pull/14362))
- **Lean 4 merges libuv buffer fix and refactor from Sofia Rodrigues.** The fix, merged October 14, makes send and recv fail with an invalid-argument error for buffers of 4 GiB or more, instead of letting the length wrap to 32 bits. The refactor, merged October 15, adds owned_ref, a helper that owns Lean objects and helps avoid hundreds of lean_inc and lean_dec in libuv code. ([lean4#15598](https://github.com/leanprover/lean4/pull/15598), [lean4#15603](https://github.com/leanprover/lean4/pull/15603))
- **Leo de Moura adds three `lia` changes that avoid large case splits.** The pull requests, merged October 20 and 21, add dynamic variable reordering before large Cooper splits (case splits with as many cases as a variable's coefficient), exact elimination of equations without unit coefficients, and divisibility normalization. Chains of such equations from `/` and `%` definitions no longer yield Cooper splits with thousands of cases. ([lean4#15835](https://github.com/leanprover/lean4/pull/15835), [lean4#15838](https://github.com/leanprover/lean4/pull/15838), [lean4#15827](https://github.com/leanprover/lean4/pull/15827))

## Papers, events, press

- **Leo de Moura publishes MiniForth, a Lean tutorial for programming language semantics.** MiniForth's Forth-inspired teaching language, whose programs act on a stack, has arithmetic, DUP, SWAP, DROP, calls, and conditionals. The tutorial embeds it as Lean functions (a shallow embedding) and as data (a deep embedding), proves program equivalences, and adds a second pass where grind handles routine reasoning; the build checks the examples and proofs. ([leodemoura/MiniForth](https://github.com/leodemoura/MiniForth))
