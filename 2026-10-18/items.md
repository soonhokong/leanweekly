---
issue: 31
date: 2026-10-18
window_start: 2026-10-15
window_end: 2026-10-18
---

## Headlines

- **Lean now ships verified kernels (proof checkers) and a lake check command.** Leo de Moura writes that AI agents are effective at finding vulnerabilities in Lean's kernel. Lean v4.35.0's lake check rechecks a project with leanchecker, the official Lean kernel without the baggage around it, and lake check --paranoid runs four additional kernels, including con-leche, the first kernel for Lean written in Lean and proven consistent. ([leodemoura.github.io](https://leodemoura.github.io/blog/2026-10-15-lean-now-ships-with-verified-kernels/))
- **Jeremy Avigad and coauthors back formalizing all of mathematics, if done well.** The Xena guest post, co-written by Kevin Buzzard, Johan Commelin, Rémy Degenne, Kim Morrison, Oliver Nash and Adam Topaz, follows a big OpenAI release and warns against building formal libraries nobody uses. It highlights Tau Ceti, an AI-written library slightly larger than Mathlib, and says most of mathematics can be formalized within three years. ([xenaproject.wordpress.com](https://xenaproject.wordpress.com/2026/10/16/how-to-formalize-all-of-mathematics/))
- **Shanghai AI Lab's Shusheng-S2 helps prove 3D Ghys conjecture, verified in Lean.** Tech Times calls Shusheng-S2 the first Chinese AI model to help resolve a world-class open conjecture in pure mathematics: the three-dimensional Ghys conjecture, unresolved for 31 years. A Peking University team, using up to 100 AI agents, independently verified every logical step of Jiesong Zhang's proof, producing more than 550,000 lines of Lean code. ([techtimes.com](https://www.techtimes.com/articles/329134/20261016/chinese-ai-model-helps-prove-31-year-old-math-conjecture-machine-verified-lean-proof.htm), [pandaily.com](https://pandaily.com/shanghai-ai-lab-intern-s2-ghys-conjecture-proof-human-ai-collaboration-lean-sheaf))

## AI and formalization

- **Researchers formalize Razborov's flag algebra method for extremal graph theory in Lean.** Gyeongwon Jeong, Seonghun Park, Jihoon Hyun, Sang-il Oum, and Hongseok Yang cover finite simple graphs in Lean 4, building on Mathlib, and add a tactic that turns semidefinite programming certificates into Lean proofs. Results include seven Turán-type upper bounds and the first formalization, to the authors' knowledge, of the asymptotic Erdős pentagon theorem. ([arXiv:2607.23500](https://arxiv.org/abs/2607.23500))
- **AxiomProver generates Lean proof of Collatz positive density results.** CollatzPosDens, a Palomar registry entry, formally proves the main results of Kenny Lau's paper "Explicit positive lower density for the Collatz Conjecture", including Theorem 1.3, an explicit positive density of odd starting values reaching a prescribed target not divisible by 3. AxiomProver, Axiom Math's in-house theorem proving system, generated the Lean files. ([palomar-registry.org](https://palomar-registry.org/entry?id=PALOMAR-2026-10-15-000013&version=1), [AxiomMath/CollatzPositiveDensity](https://github.com/AxiomMath/CollatzPositiveDensity))
