---
issue: 22
date: 2026-07-16
window_start: 2026-07-09
window_end: 2026-07-16
---

## Headlines

- **Lean v4.32.0 makes the new do elaborator the default.** Lean v4.32.0 adds the do← marker for effect forwarding and cuts import Mathlib time by about 10% through a DiscrTree insertion fix. Lake's linting framework gains option-based control and module linters, and an experimental incremental-compilation mode lands behind CLI flags. ([v4.32.0 release notes](https://lean-lang.org/doc/reference/latest/releases/v4.32.0/), [lean4 v4.32.0](https://github.com/leanprover/lean4/releases/tag/v4.32.0))

## Lean core and ecosystem

- **Sebastian Ullrich merges editor whitespace fix and deterministic kernel recursion limit.** Lean now reuses tactic results when only whitespace after a tactic changes, so progress is kept when preparing to type the next tactic. The kernel's deep recursion error is now bounded by the maxRecDepth option instead of the physical stack size, which is a breaking change that may require explicit maxRecDepth bumps. ([lean4#13956](https://github.com/leanprover/lean4/pull/13956), [lean4#11958](https://github.com/leanprover/lean4/pull/11958))
- **Wojciech Różowski adds two-phase stateful linters to Lean.** A merged pull request lets linters persist and share state across command elaboration, with each stateful linter running an early phase and a late phase. Wojciech Różowski also changed the UnusedSimpArgs linter hint and split registerParametricAttribute as preparatory work for warning when @[deprecated] points at an already-deprecated declaration. ([lean4#14357](https://github.com/leanprover/lean4/pull/14357), [lean4#14344](https://github.com/leanprover/lean4/pull/14344), [lean4#14313](https://github.com/leanprover/lean4/pull/14313))
- **Paul Reichert fixes slowdown caused by Lean's stricter transparency default.** A merged Lean pull request by Paul Reichert makes `whnfMatcher` use the WHNF cache at sub-default transparency. It fixes a performance regression from #13895, merged on 2026-07-06, which enabled `backward.isDefEq.respectTransparency.types` by default as a breaking change that gives users more control over what is unfolded. ([lean4#14323](https://github.com/leanprover/lean4/pull/14323), [lean4#13895](https://github.com/leanprover/lean4/pull/13895))
- **Leo de Moura merges three fixes to Lean's SymM and Sym.simp.** Leo de Moura merged pull requests that improve support for offsets in the SymM matcher/unifier, fix Sym.simp failing to rewrite terms containing unassigned metavariables (a failure reported by Sebastian Graf), and stop preprocessType in SymM from performing zetaDelta by default. ([lean4#14404](https://github.com/leanprover/lean4/pull/14404), [lean4#14405](https://github.com/leanprover/lean4/pull/14405), [lean4#14401](https://github.com/leanprover/lean4/pull/14401))
- **Leo de Moura adds liaSteps option and BitVec literal propagators to grind.** A merged Lean pull request adds a `liaSteps` configuration option to `grind`, meant to quickly interrupt the search for hard linear integer arithmetic problems. A second merged pull request implements `grind` propagators that evaluate `BitVec` operations on literals. ([lean4#14392](https://github.com/leanprover/lean4/pull/14392), [lean4#14393](https://github.com/leanprover/lean4/pull/14393))
