---
issue: 47
date: 2026-11-04
window_start: 2026-11-03
window_end: 2026-11-04
---

## Headlines

- **Nidhal Mghirbi and Seth Douglas give Lean-checked hyperbolic counterexamples to Kaplansky's conjectures.** For every prime p, a torsion-free, word-hyperbolic group based on OpenAI's constructions fails all four group-ring conjectures in characteristic p; no torsion-free hyperbolic counterexample to any of them was previously known. Nidhal Mghirbi's Lean 4 formalization proves the main theorem, including existence forms of the random-graph estimates, and builds on OpenAI's Lean development. ([arXiv:2611.04599](https://arxiv.org/abs/2611.04599), [Apsiape/kaplansky-conjectures-hyperbolic-groups](https://github.com/Apsiape/kaplansky-conjectures-hyperbolic-groups))
- **Xi Yin, Michael R. Douglas and Anna Mei machine-check the Osterwalder-Schrader correspondence.** Three Lean theorems, registered in the Palomar Registry, go from Euclidean Schwinger functions to relativistic Wightman distributions and back, in every positive spatial dimension. Euclidean growth is assumed and not recovered, so the two directions do not compose to a biconditional; field operators are not reconstructed, and four conventions are weaker than textbook ones. ([palomar-registry.org](https://palomar-registry.org/entry?id=PALOMAR-2026-11-04-000010&version=1), [mrdouglasny/OSreconstruction-comparator](https://github.com/mrdouglasny/OSreconstruction-comparator))

## Verification in practice

- **Luk Koska, Tom Koska and Ben Koska verify GPU kernels in Lean.** The authors formalize PTX, combining an interpreter covering 81 instruction forms with the axiomatic PTX memory model, and prove correct 9 hand-written PTX entry points (454 instructions), including simple implementations of FlashAttention and a 3-kernel MoE pipeline. LLM coding agents helped write the 34,034 lines of proof, which contain no sorry or custom axioms. ([arXiv:2611.04447](https://arxiv.org/abs/2611.04447), [paperswithlean.com](https://paperswithlean.com/paper/2611.04447.html))
