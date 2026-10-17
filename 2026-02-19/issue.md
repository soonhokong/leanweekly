---
issue: 7
date: 2026-02-19
window_start: 2026-02-12
window_end: 2026-02-19
---

## Headlines

- **Lean v4.28.0 released with a symbolic simulation framework and grind extensions.** Lean v4.28.0 adds a lightweight symbolic simulation framework that integrates with grind and enables verification condition generators, plus user-defined grind attributes, a solver mode for bv_decide, and a first_par combinator that runs tactics in parallel. The release landed 309 changes, including performance improvements in bv_decide. ([v4.28.0 release notes](https://lean-lang.org/doc/reference/latest/releases/v4.28.0/), [lean4 v4.28.0](https://github.com/leanprover/lean4/releases/tag/v4.28.0))
- **Lean v4.29.0-rc1 changes how isDefEq handles transparency on implicit arguments.** Leo de Moura's lean#12179, merged on 2026-02-16, stops isDefEq from raising transparency to .default for implicit arguments, a behavior that caused scalability problems in Mathlib. Kim Morrison advises downstream projects not to move to v4.29.0-rc1 yet, and a later PR documents the design rationale behind the transparency hierarchy. ([leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/113486-announce/topic/releases.20of.20new.20Lean.20versions/near/574617729), [lean4#12179](https://github.com/leanprover/lean4/pull/12179), [lean4#12561](https://github.com/leanprover/lean4/pull/12561))

## Verification in practice

- **Kim Morrison removes the one axiom in LambdaClass's verified optimizer Truth Research ZK.** LambdaClass described Truth Research ZK, which turns Lean 4 specifications into optimized C and Rust code with formal correctness guarantees, noting one axiom (applyIndex_tensor_eq) needed for the tensor product of permutations. A pull request by Kim Morrison, prepared with Claude Code, proves that axiom as a theorem. ([amo-lean#2](https://github.com/lambdaclass/amo-lean/pull/2), [blog.lambdaclass.com](https://blog.lambdaclass.com/amo-lean-towards-formally-verified-optimization-via-equality-saturation-in-lean-4/))

## Lean core and ecosystem

- **Leo de Moura adds higher-order Miller patterns to grind's e-matching.** A merged Lean 4 pull request lets grind's e-matching engine keep lambda arguments as patterns when pattern variables are applied only to distinct lambda-bound variables. Previously such lambdas were ignored during matching, which limited theorems about combinators like List.foldl that take a function argument. ([lean4#12483](https://github.com/leanprover/lean4/pull/12483))
- **Nick Palladinos publishes SmtLibDsl, a type-safe SMT-LIB DSL for Lean 4.** SmtLibDsl is a domain-specific language embedded in Lean 4 for writing SMT-LIB2 constraint programs, with backends including Z3, cvc5, Kissat, and CaDiCaL. Bitvector widths and enabled SMT theories are tracked at compile time, and Lean validates every decoded SAT model. ([palladin/SmtLibDsl](https://github.com/palladin/SmtLibDsl))
- **Leo de Moura adds a cache for isDefEqI results in Sym.** A merged Lean 4 pull request by Leo de Moura caches isDefEqI results in Sym, since symbolic computation such as VC generators finds the same instances repeatedly. On the vcgen_deep_add_sub_cancel benchmark, speedups range from 30% to 37%, with goal_1000 dropping from 1663.1 ms to 1141.9 ms. ([lean4#12486](https://github.com/leanprover/lean4/pull/12486))
- **Kim Morrison proposes making Mathlib's OrderDual a structure, prepared with Claude Code.** A Mathlib pull request by Kim Morrison changes OrderDual from a type alias to a one-field structure, which prevents defeq abuse between a type and its order dual and requires explicit toDual/ofDual wrapping at type boundaries. The pull request notes it was prepared with Claude Code. ([mathlib4#35125](https://github.com/leanprover-community/mathlib4/pull/35125))

## Papers, events, press

- **Stephen Diehl tests Opus 4.6 on a category theory library in Lean.** Stephen Diehl built Kitty Cats, about 900 lines of Lean, with Anthropic's Opus 4.6 over two 30-minute sessions. The model handled the Yoneda lemma but needed guidance on multi-step rewrites and on refactoring verbose proofs. Diehl credits the lean-lsp-mcp server and the lean4-skills plugin for giving the model a feedback loop. ([stephendiehl.com](https://www.stephendiehl.com/posts/lean-opus-blog/))
