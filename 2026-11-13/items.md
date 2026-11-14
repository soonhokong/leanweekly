---
issue: 54
date: 2026-11-13
window_start: 2026-11-12
window_end: 2026-11-13
---

## Headlines

- **AxiomMath publishes AI-written Lean formalization of Faltings' theorem, the Mordell conjecture.** The library, about 430 modules written by AI agents, follows E. Bombieri's proof, builds on Mathlib and the Stacks Project in Lean, and proves the statement of the LeanEval faltings problem verbatim. Lean's kernel checks every proof, with no sorry, no native_decide, and no added axiom; humans have not yet reviewed the code. ([AxiomMath/Mordell](https://github.com/AxiomMath/Mordell))
- **Grothendieck Labs publishes a Lean formalization of Grothendieck–Riemann–Roch.** The proof covers projective morphisms of smooth quasi-projective varieties over a field, uses no sorry and no axioms beyond Lean's standard three, and rests on Stacks for Chow groups and Chern classes. It was made on the grothendieck platform with the model Fable 5.2 in 6 hours 23 minutes. ([grothendiecklabs/grothendieck-riemann-roch](https://github.com/grothendiecklabs/grothendieck-riemann-roch))
- **Malvin Gattinger answers an open logic question using LLMs and Lean.** Malvin Gattinger's arXiv paper gives a counterexample showing that test-free PDL (Propositional Dynamic Logic without the '?' operator) lacks Craig Interpolation, which Borzechowski et al. (2026) showed PDL has. The example was originally obtained using LLMs and Lean, and the paper links to all prompts, LLM output summaries and the Lean proof. ([arXiv:2611.16759](https://arxiv.org/abs/2611.16759), [doi.org](https://doi.org/10.5281/zenodo.23987961))

## AI and formalization

- **Igor Inozemtsev registers Lean proof of Ben Green's Problem 64 in Palomar.** The proof shows, without additional hypotheses, that there are infinitely many primes p for which p minus 2 has an odd number of prime factors, counted with multiplicity. The standalone development, credited to gpt-6 astra and adapting Jizhou Guo's argument, includes supporting analytic number theory and uses Mathlib as its only direct Lake dependency. ([palomar-registry.org](https://palomar-registry.org/entry?id=PALOMAR-2026-11-13-000010&version=1), [inozemtsev/formal-math](https://github.com/inozemtsev/formal-math), [data.palomar-registry.org](https://data.palomar-registry.org/entries/PALOMAR-2026-11-13-000010-v1.json))

## Verification in practice

- **okcontract publishes Solidity Spec, an executable formal model of Solidity in Lean.** The Lean 4.29.0 package targets Solidity 0.8.36 and comes with a paper on its semantics and trust boundary. Conformance checks compare selected executions with the pinned compiler and a local Cancun EVM; okcontract calls the formalization incomplete and notes that compiler compatibility, scoped to viaIR: true, is not a proof of general compiler conformance. ([okcontract/solidity-spec](https://github.com/okcontract/solidity-spec))
- **mathematics-inc runs Linux's WireGuard handshake code in Lean, finding undefined behaviour.** The repository holds the Cerberus Core of a program running a complete two-peer WireGuard handshake, as readable Lean modules with one definition per WireGuard C function. Running it under a C semantics in Cerberus-Lean produced output identical to an independent reference implementation and also found limitations of Cerberus and Cerberus-Lean. ([mathematics-inc/wireguard-handshake-cerberus-lean](https://github.com/mathematics-inc/wireguard-handshake-cerberus-lean))

## Papers, events, press

- **Leo de Moura is guest speaker at an NYU Courant seminar.** NYU Courant announced in a November 13 post on X that Leo de Moura would speak at a special Mathematics in the Age of AI Seminar the next day at 3:30pm in Warren Weaver Hall. The post links to more information on NYU Courant's website. ([@NYU_Courant on X](https://x.com/NYU_Courant/status/2121352240036225061))
