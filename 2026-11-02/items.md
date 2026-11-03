---
issue: 45
date: 2026-11-02
window_start: 2026-11-01
window_end: 2026-11-02
---

## Headlines

- **Tau Ceti uses AI to build a library of formalized mathematics.** Human-written roadmaps specify the intended mathematics, Lean's kernel checks every proof the AI contributors produce, and adversarial AI reviewers assess whether definitions and statements match what the roadmaps intend. Incubated by the Lean FRO and the Mathlib Initiative, the project aims at reusable formalizations of "all of basic mathematics" and invites contributions from everyone. ([lean-lang.org](https://lean-lang.org/use-cases/tau-ceti/), [@leanprover on X](https://x.com/leanprover/status/2117333513242550672))

## Verification in practice

- **Autoresearch, Inc. releases Silmaril: Lean models of programs and verified WebAssembly tools.** Silmaril uses Lean 4 to model programs and prove properties about them, with a library of logics, models, lambda calculi and verified translations. Its demo exercises all seven Binaryen-style WebAssembly tools and checks that run() returns 42 in both the Lean WebAssembly interpreter and Node. ([hiloopai/silmaril-lean](https://github.com/hiloopai/silmaril-lean))
- **Sébastien Celles uses Lean 4 to find correctness bugs in Go.** Inspired by julia-in-lean, the go-in-lean proof-of-concept models a bounded subset of Go (including all of math/bits), states each function's documented behaviour as a theorem, proves it with Lean's kernel and bv_decide, and turns failed proofs into Go tests. Counterexamples must reproduce in Go, and the README lists Go compiler bugs reported after human review. ([s-celles/go-in-lean](https://github.com/s-celles/go-in-lean))
- **Volodymyr Pavlyshyn's LeanRDF certifies RDF entailment with a verified checker.** Its Lean 4 libraries define the W3C semantics of RDF, RDFS, OWL 2 RL and EL, SPARQL 1.1 and SHACL Core. Untrusted engines, Elpi (λProlog) and oxilite (a SPARQL store on SQLite), find answers that the checker turns into theorems, and the SPARQL evaluator and SHACL validator are proven to compute their semantics exactly. ([Volland/rdf-lean](https://github.com/Volland/rdf-lean))

## Papers, events, press

- **Darius Foo and coauthors reconstruct the Iris base logic in Lean.** Indirection Theory is simpler than Iris, thanks to ordinary dependent types, but less expressive; the authors' lightweight Lean mechanisation generalises it to Iris-style resources. Two case studies, including a program logic complete enough to verify concurrent and higher-order programs, show the base logic is expressive and faithful to Iris. ([arXiv:2610.41202](https://arxiv.org/abs/2610.41202))
