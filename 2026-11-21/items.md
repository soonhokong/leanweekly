---
issue: 61
date: 2026-11-21
window_start: 2026-11-20
window_end: 2026-11-21
---

## Headlines

- **AlphaProof Nexus finds Lean proof of high-dimensional photonic GHZ no-go theorem.** Mario Krenn and coauthors used AlphaProof Nexus, which combines language models with Lean compiler feedback, to prove a Formal Conjectures statement: no complex-weighted monochromatic quantum graph exists for any even N of at least 4 when D is at least N. Generating an N-photon, D-dimensional GHZ state is equivalent to constructing such a graph. ([arXiv:2611.26300](https://arxiv.org/abs/2611.26300), [paperswithlean.com](https://paperswithlean.com/paper/2611.26300.html))

## Verification in practice

- **Long Qian and André Platzer check ODE reachability proofs with Lean 4.** The paper's differential dynamic logic proofs certify ordinary differential equation (ODE) reachability, like UNSAT proofs in satisfiability solving, and any approximation correctly computed via Taylor models (a technique for rigorous ODE bounds), even by untrusted algorithms, provably yields one. The checker, implemented in Lean 4 for improved performance, can formally verify ARCH competition benchmarks. ([arXiv:2611.25303](https://arxiv.org/abs/2611.25303))
- **Tether monitors AI agents with security policies written in Lean 4.** Tether, by Meghana Aparna Sistla and coauthors, sandboxes proposed commands and commits side effects only if a policy allows them; its Lean 4 DSL is both the executable monitor and the specification for mechanized proofs. On coding-agent benchmarks, one shared policy blocks 100% of in-scope attacks with a 4.7% benign false-positive rate. ([arXiv:2611.25599](https://arxiv.org/abs/2611.25599), [paperswithlean.com](https://paperswithlean.com/paper/2611.25599.html))
