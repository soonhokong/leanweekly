---
issue: 17
date: 2026-05-28
window_start: 2026-05-14
window_end: 2026-05-28
---

## Headlines

- **The Mathlib Initiative launches Formal Frontier for open-source AI autoformalization.** Formal Frontier is a new project focused on responsible, scalable, and open-source AI-driven autoformalization of mathematics, with XTX Markets supporting it. Its initial phase covers a community autoformalization specification, open-source tooling, and autoformalized texts chosen to fill gaps in Mathlib's existing coverage. ([mathlib-initiative.org](https://mathlib-initiative.org/formal-frontier/))

## Verification in practice

- **Cajal introduces Talos, a Lean 4 framework for verifying WebAssembly modules.** Talos provides a Wasm interpreter optimized for reasoning plus a WP calculus layer for proving program properties, with a proof that the num-integer crate's gcd using Stein's algorithm is correct. The early-stage project aims for full Wasm coverage by passing the official testsuite, and verification of any Rust crate that compiles to Wasm. ([leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/579630-Project-announcements/topic/Talos.3A.20A.20Formal.20Verification.20Framework.20for.20WebAssembly/with/597057652))

## Lean core and ecosystem

- **Lean's hex aggregator bundles verified computational algebra libraries for Lean 4.** The leanprover/hex repository installs the released hex libraries at a single pinned set, including HexLLL for LLL lattice reduction and HexBerlekampZassenhaus for integer polynomial factorization. Each computational library is Mathlib-free, with Mathlib correspondence proofs in a separate theory library. ([kim-em/hex](https://github.com/kim-em/hex))
- **Kim Morrison splits Lean's implicit transparency level into implicit and instances.** A merged pull request by Kim Morrison separates the levels so that @[implicit_reducible] annotations no longer have the side effects @[instance_reducible] has, such as allowing type class search to see through marked declarations. The hierarchy is now none < reducible < instances < implicit < default < all, and a new with_implicit tactic is added. ([lean4#13637](https://github.com/leanprover/lean4/pull/13637))
- **Kyle Miller replaces Lean's tactic configuration system with a faster one.** A merged Lean pull request by Kyle Miller adds a tactic configuration system that supports custom configuration syntaxes, and on a simple benchmark configuration evaluation takes 6.2% of the time it used to. A separate pull request by Kyle Miller makes InfoView hovers include information about specific metavariables. ([lean4#13651](https://github.com/leanprover/lean4/pull/13651), [lean4#13446](https://github.com/leanprover/lean4/pull/13446))
- **Joachim Breitner adds an impossible tactic combinator to Lean.** The merged pull request adds `impossible by t`, which uses the tactic `t` to prove that the current goal is impossible, closing the original goal as if `sorry` were used. `try?` gains an `impossible` branch that runs `impossible by decide`, `impossible by simp`, and `impossible by grind` in parallel. ([lean4#13771](https://github.com/leanprover/lean4/pull/13771))
- **Sebastian Ullrich merges cross-file object sharing for Lean module serialization.** A merged pull request adds Lean.CompactedRegion.save and read, which save or load one module at a time with explicit sharing, generalizing the batch saveModuleDataParts API. Separate pull requests by Sebastian Ullrich make Lean's CI build everything with Lake and fold the Linux Lake job into the Linux release job. ([lean4#13185](https://github.com/leanprover/lean4/pull/13185), [lean4#13721](https://github.com/leanprover/lean4/pull/13721), [lean4#13759](https://github.com/leanprover/lean4/pull/13759))
- **Leo de Moura adds a dsimp tactic for Lean's sym => mode.** In a series of merged pull requests, Leo de Moura built infrastructure for a dsimp in SymM, functions for simplifying binders, reusable reduction DSimprocs (beta, zeta, zetaAll, dsimpProj, dsimpMatch), and syntax for declaring dsimp variants. The last pull request implements the dsimp tactic for interactive sym => mode. ([lean4#13857](https://github.com/leanprover/lean4/pull/13857), [lean4#13823](https://github.com/leanprover/lean4/pull/13823), [lean4#13824](https://github.com/leanprover/lean4/pull/13824), [lean4#13825](https://github.com/leanprover/lean4/pull/13825), [lean4#13854](https://github.com/leanprover/lean4/pull/13854))
