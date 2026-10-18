---
issue: 24
date: 2026-08-06
window_start: 2026-07-23
window_end: 2026-08-06
---

## Headlines

- **Amazon provides long-term financial support to the Lean Focused Research Organization.** Amazon is providing substantial, long-term financial support to the Lean Focused Research Organization (FRO), the team building Lean, which Amazon calls the single largest donation in the FRO's history. Amazon ties the investment to agentic safety and cites Lean-based verification in Policy in Amazon Bedrock AgentCore, SampCert, and AWS Neuron. ([amazon.science](https://www.amazon.science/news/amazon-is-investing-in-the-lean-focused-research-organization), [itpro.com](https://www.itpro.com/software/development/amazon-targets-agent-safety-gains-with-investment-in-team-behind-lean-programming-language))
- **CSLib adds a fully verified proof of the FLP impossibility result.** CSLib, the Lean Computer Science Library, now includes a proof of the FLP (Fischer, Lynch and Paterson) result: consensus is impossible in a distributed system with a faulty process and asynchronous messaging. Ching-Tsun Chou formalised the constructive pen and paper proof by Hagen Völzer from 2004. ([lnkd.in](https://lnkd.in/p/gJ9DvPbH), [leanprover/cslib](https://github.com/leanprover/cslib))
- **Pramaana Labs reports solving all 6 IMO 2026 problems in Lean.** Arnav Mehta of Pramaana Labs reports that the company's system, which translates each question from English into Lean and then proves it, solved all 6 IMO 2026 problems in under 7 hours for less than $150. Pramaana Labs earlier announced $27 million in seed funding led by Khosla Ventures. ([lnkd.in](https://lnkd.in/p/g2QdBa-m), [techcrunch.com](https://techcrunch.com/2026/06/17/pramaana-labs-raises-27-million-seed-round-from-khosla-ventures-to-bring-formal-verification-to-ai/))

## AI and formalization

- **Yueyang Feng, Ilya Sergey and coauthors present LeetProof for verified code generation.** LeetProof is an agentic pipeline built on Velvet, a multi-modal verifier embedded in Lean, that generates a program, its formal specification, and a machine-checkable proof from a natural-language description. The paper, accepted to ASE'26, reports that property-based testing validates specifications before any code is synthesised. ([arXiv:2604.16584](https://arxiv.org/abs/2604.16584), [lnkd.in](https://lnkd.in/p/gVM47Zvb))

## Verification in practice

- **CircuitProver uses a Lean 4 agent to prove parameterized hardware designs correct.** Ziyi Yang, Wenji Fang, Chen Chen, Zhiyao Xie, and Hongce Zhang present CircuitProver, an agentic Lean 4-based verification framework that translates hardware designs and natural language specifications into Lean 4 models and reuses verified lemmas across tasks. Across 63 tasks it proves all benchmarks, while a vanilla agent solves 92.1% of them. ([arXiv:2607.27259](https://arxiv.org/abs/2607.27259))

## Lean core and ecosystem

- **bv_decide solves 2401 of 2540 benchmarks at SMT-COMP 2026.** In the QF_Bitvec division of the SMT-COMP 2026 Single Query Track, bv_decide reached a correct score of 2401 with zero errors, ahead of cvc5 at 2375 and Z3-GEX at 2229. Bitwuzla-MachBV led the division with 2495. ([smt-comp.github.io](https://smt-comp.github.io/2026/results/qf_bitvec-single-query/))
- **Sebastian Graf extends Lean's def contracts with requires and assert.** Merged Lean pull requests by Sebastian Graf name the precondition clause of a def contract `requires`, pairing with `ensures`, let `requires` and `invariant` bind assertion arguments such as a state monad's state, and add an `assert` element to `do` notation that `vcgen` proves as a verification condition while doing nothing at runtime. ([lean4#14602](https://github.com/leanprover/lean4/pull/14602), [lean4#14589](https://github.com/leanprover/lean4/pull/14589), [lean4#14603](https://github.com/leanprover/lean4/pull/14603), [lean4#14614](https://github.com/leanprover/lean4/pull/14614))
- **Lean speed site charts Mathlib build instructions across 25,000 commits.** A graph on speed.lean-lang.org tracks mathlib4 build instructions over 25,000 commits, scaling older values to line up with newer ones across the move from the old speedcenter to radar and the switch to measuring only userspace instructions. Dashed lines mark the 90 toolchain bumps. ([speed.lean-lang.org](https://speed.lean-lang.org/graphs/mathlib-instructions.html))

## Papers, events, press

- **Leo de Moura gives FLoC 2026 talk on Lean's design and impact.** Leo de Moura presented "The Lean Theorem Prover: Design, Evolution, and Impact" at FLoC 2026 in Lisbon on July 26, 2026. Kim Morrison and Leo de Moura followed with a talk at IJCAR (Monday July 27 at 11:50 am) on grind, a new extensible tactic based on SMT techniques. ([leodemoura.github.io](https://leodemoura.github.io/static/floc26/), [leodemoura.github.io](https://leodemoura.github.io/static/ijcar26/))
- **Alexander Gerko says AI-assisted research produced several PhDs' worth of results.** In a LinkedIn post, Alexander Gerko says that over the last month he "vibe researched" several PhDs' worth of maths results in his former field, complete with Lean formalization, including a claimed counterexample to a top-5 major conjecture. Gerko predicts "50 years' worth of maths progress in the next 2 years." ([lnkd.in](https://lnkd.in/p/gwY9Sc2S))
