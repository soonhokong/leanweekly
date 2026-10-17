---
issue: 3
date: 2026-01-22
window_start: 2026-01-15
window_end: 2026-01-22
---

## Headlines

- **Leo de Moura presents The State of Lean at Lean Together 2026.** Leo de Moura, Chief Architect of the Lean FRO, reviewed 2025 at Lean Together in January 2026: 12 releases, a new compiler fully implemented in Lean, and the grind proof-automation tactic. The talk also said 2026 will be the last year with significant changes to the language and standard library. ([slides (pdf)](https://leodemoura.github.io/files/LeanTogether2026.pdf))
- **Project Numina announces Numina-Lean-Agent, an open-source theorem-proving framework.** Yann Fleureau announced Numina-Lean-Agent, an open-source agentic framework for autoformalization and theorem proving using generic AI models. The announcement reports 12/12 on Putnam 2025 and a formalization of the "Effective Brascamp-Lieb inequalities" research paper, more than 90% of it AI-generated. ([LinkedIn post](https://www.linkedin.com/posts/yann-fleureau-b1179983_announcing-numina-lean-agent-an-open-source-share-7419390875769692160-fA_Q))

## Verification in practice

- **Ilya Sergey shows how to verify imperative Lean 4 programs with Velvet.** A Proofs and Intuitions post walks through Velvet, a verifier embedded in Lean as a library and developed by VERSE Lab. Velvet discharges most proof obligations with SMT solvers (such as Z3 and cvc5) and tactics like grind, then leaves the rest for interactive proof. In the example, Claude Code and Harmonic's Aristotle each finished the remaining proof. ([proofsandintuitions.net](https://proofsandintuitions.net/2026/01/21/multi-modal-verification-velvet/))

## Lean core and ecosystem

- **Leo de Moura adds ground evaluation and conditional rewriting to Sym.simp.** Three merged Lean 4 pull requests by Leo de Moura extend Sym.simp: a simplification procedure evaluating ground terms of builtin numeric types such as Nat, Int and BitVec n, support for conditional rewriting rules, and offset terms, essential for equational theorems of functions that pattern match on natural numbers. ([lean4#12031](https://github.com/leanprover/lean4/pull/12031), [lean4#12033](https://github.com/leanprover/lean4/pull/12033), [lean4#12053](https://github.com/leanprover/lean4/pull/12053))
- **Lean repository adds SymM symbolic simulation benchmark from Lean@Google Hackathon.** A new benchmark in the lean4 test suite, described as a synthetic benchmark from the Lean@Google Hackathon, compares a MetaM tactic solution with SymM solutions, including a "SymM Solution + reusing simplifier cache" variant, on generated command sequences of up to 700 iterations, also timing kernel checking. ([leanprover/lean4](https://github.com/leanprover/lean4/blob/ef1e080386afea1599ffe8891433a440875d18e6/tests/bench/sym/add_sub_cancel.lean))

## Papers, events, press

- **Alexandre Rademaker teaches Programming with Proofs using Lean at Universidade de Aveiro.** Alexandre Rademaker says the course is probably the first Lean course taught in Portugal and is an official World Logic Day 2026 event. It uses The Hitchhiker's Guide to Logical Verification and is partly supported by Atlas Computing via a Schmidt Sciences grant. ([LinkedIn post](https://www.linkedin.com/posts/alexandrerademaker_lean-lean-share-7417675303738753024-GZws))
