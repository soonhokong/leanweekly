---
issue: 6
date: 2026-02-12
window_start: 2026-02-05
window_end: 2026-02-12
---

## Verification in practice

- **Ilya Sergey shows how to verify distributed protocols in Veil.** In a February 9, 2026 post, Ilya Sergey walks through modelling, model checking, and proving the Dolev-Strong Floodset consensus protocol in Veil, VERSE lab's auto-active Lean-based verifier for distributed protocols. Veil's model checker Lace explored 54904 states, 362 of them distinct, and caught a deliberately introduced agreement bug. ([proofsandintuitions.net](https://proofsandintuitions.net/2026/02/09/distributed-verification-veil/))

## Lean core and ecosystem

- **Leo de Moura merges two Lean core elaborator changes.** Leo de Moura merged a pull request stopping isDefEq from raising transparency to .default for implicit arguments, which was creating scalability problems in Mathlib (old behavior: set_option backward.isDefEq.respectTransparency false). A second pull request fixes the type class resolution cache for classes with output parameters. ([lean4#12179](https://github.com/leanprover/lean4/pull/12179), [lean4#12286](https://github.com/leanprover/lean4/pull/12286))
- **Leo de Moura tests Claude-assisted refactoring of Lean's grind and Sym modules.** Leo de Moura opened leanprover/lean4#12448, a pull request that refactors the `grind` and `Sym` modules using Claude-assisted code transformations as an experiment in AI-aided code maintenance. The pull request is marked "do not merge". ([lean4#12448](https://github.com/leanprover/lean4/pull/12448))
