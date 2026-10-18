---
issue: 21
date: 2026-07-09
window_start: 2026-07-02
window_end: 2026-07-09
---

## Headlines

- **Kim Morrison releases first packages of Hex, a computational algebra library.** The first Hex packages provide dense matrices, row reduction, Gram-Schmidt, and a verified implementation of the LLL lattice basis reduction algorithm, plus a version that delegates computation to the C library fplll while verifying a certificate. Specifications are written first, then AIs implement code and proofs, and a blog post runs the Coppersmith attack on RSA. ([kim-em.github.io](https://kim-em.github.io/blog/2026-7-7-lattice-basis-reduction-using-the-hex-lean-library/), [kim-em/hex](https://github.com/kim-em/hex))

## Verification in practice

- **Logos Research proves an F# program and its Python rewrite equivalent.** In a Logos Research prototype, a deterministic translator turns both the original and the rewrite into Lean, and a theorem prover proves the two compute the same result on every input. For iCPPI, a portfolio-insurance algorithm, the machine-checked proof ran to some 22,000 characters, with floats modelled as exact real numbers. ([logosresearch.ai](https://www.logosresearch.ai/news/migrating-code-by-proof/))

## Lean core and ecosystem

- **Kim Morrison releases sos, a sum-of-squares tactic for Lean.** The sos tactic is a sum-of-squares decision procedure for nonlinear real arithmetic, closely following John Harrison's HOL Light implementation. It calls the CSDP semidefinite programming library and rebuilds a fully certified result in Lean. Kim Morrison calls it a prototype and notes that frontier models have become very good at Lean metaprogramming. ([kim-em.github.io](https://kim-em.github.io/blog/2026-5-13-a-sum-of-squares-tactic/), [LinkedIn post](https://www.linkedin.com/posts/kim-morrison-219962b_lean4-formalverification-activity-7478622597069455360-B4aF/))
- **Joachim Breitner adds automatic try? suggestions to Lean at common proof sites.** A merged pull request by Joachim Breitner makes Lean suggest try? output for empty by blocks, unsolved goals, and sorry tactics, gated by three options that default to off. It replaces the tactic.tryOnEmptyBy option from an earlier pull request with a different implementation. ([lean4#13830](https://github.com/leanprover/lean4/pull/13830))
- **Leo de Moura adds rw and case tactics to Lean's sym mode.** Merged pull requests by Leo de Moura implement the rw tactic and the case tactic (relevant for vcgen) in sym => mode, fix universe constraints and unresolved-instance reporting in SymM, add a hygienic parameter to intro-like functions, and speed up instance assignment when the goal type is ground. ([lean4#14287](https://github.com/leanprover/lean4/pull/14287), [lean4#14278](https://github.com/leanprover/lean4/pull/14278), [lean4#14277](https://github.com/leanprover/lean4/pull/14277), [lean4#14280](https://github.com/leanprover/lean4/pull/14280), [lean4#14279](https://github.com/leanprover/lean4/pull/14279), [lean4#14330](https://github.com/leanprover/lean4/pull/14330), [lean4#14314](https://github.com/leanprover/lean4/pull/14314))
- **Wojciech Różowski opens Lean pull requests for stateful linters and unusedVariables hint.** A now-closed pull request adds stateful linters: command linters that thread state from one command to the next, so a linter can accumulate information across a file. A merged pull request adds a hint to the unusedVariables linter, suggesting to rename the unreferenced name with an underscore. ([lean4#14225](https://github.com/leanprover/lean4/pull/14225), [lean4#14259](https://github.com/leanprover/lean4/pull/14259))
- **Mac Malone merges new Lake APIs for dynamic libraries and linking.** Lake adds `Dynlib.runtimeOnlyDeps`, for transitive dependencies that should not be linked but must be preloaded when precompiling, plus an API for retrieving the complete set of core dynamic libraries. A third change lets custom build targets link shared libraries or executables from a module without copying the code in `LeanExe.recBuildExe`. ([lean4#14254](https://github.com/leanprover/lean4/pull/14254), [lean4#14220](https://github.com/leanprover/lean4/pull/14220), [lean4#14219](https://github.com/leanprover/lean4/pull/14219), [lean4#14240](https://github.com/leanprover/lean4/pull/14240))

## Papers, events, press

- **Dwarkesh Patel relays idea of AIs forking Mathlib into parallel mathematics.** In a post on X, Dwarkesh Patel described Grant's speculation that AIs could fork Mathlib, the Lean library of formalized math concepts and proofs, and build a "parallel math civilization." Dwarkesh Patel wrote that Lean guarantees any new conjectures would be logically valid, and that whether they would be interesting is another matter. ([@dwarkesh_sp on X](https://x.com/dwarkesh_sp/status/2072403064846520346))
