---
issue: 53
date: 2026-11-12
window_start: 2026-11-11
window_end: 2026-11-12
---

## Headlines

- **Salvatore Mercuri and Bhavik Mehta formally verify Riemann hypothesis up to 10⁸.** Lean's kernel checks, using only the standard axioms, that the first 248,008,818 nontrivial zeros of the Riemann zeta function lie on the critical line. The announcement calls this the first kernel-checked verification at this scale; the build of more than 6 million modules took over 240,000 CPU hours on EPCC's Cirrus supercomputer. ([leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/579630-Project-announcements/topic/The.20Riemann.20hypothesis.20up.20to.2010.E2.81.B8/with/639780945), [smmercuri/zeta](https://www.github.com/smmercuri/zeta), [zenodo.org](https://zenodo.org/records/24085183))
- **Axiom formalizes first seven chapters of Introduction to Cluster Algebras in Lean.** Using Axiom's AxiomCode tooling, AI agents (Anthropic's Claude) formalized 1,348 of 1,429 blueprint entries, one per definition or result, from the textbook by Sergey Fomin, Lauren Williams, and Andrei Zelevinsky. The Mathlib-based library declares no axioms, stating its 31 assumptions as explicit hypotheses, and Lean's comparator checks that it proves eleven headline theorems. ([axiommath.ai](https://axiommath.ai/research/cluster-algebras-formalized-in-lean/), [clusteralgebras.axiommath.ai](https://clusteralgebras.axiommath.ai/), [AxiomMath/ClusterAlgebras](https://github.com/AxiomMath/ClusterAlgebras))

## Verification in practice

- **Bartosz Naskręcki publishes Lean Doom Lab, pairing Doom play with Lean proofs.** Users can play a route, pause on a game tick and inspect its Lean proof; in a browser course of nine authored maps, all 27 supplied route witnesses have stock Lean kernel audits. The lab's first-safe-exit theorems state that the player remains alive, physics succeeds and the last input raises the exit flag. ([nasqret/leandoom-proofs](https://github.com/nasqret/leandoom-proofs))
- **Kamil Braun's Kotlean runs proven Lean code inside Android apps.** Developers write an app's state, behavior and UI in Lean, prove properties of that code, and compile it into the app, while a small Kotlin host renders native Android Views. Examples include SnackNet, an original maze-chase game written in Lean, and Counter, a smaller starter with buttons and an editable note. ([kbr-/kotlean](https://github.com/kbr-/kotlean))
