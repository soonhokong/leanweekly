---
issue: 13
date: 2026-04-23
window_start: 2026-04-16
window_end: 2026-04-23
---

## Headlines

- **Beneficial AI Foundation launches Signal Shot to verify Signal in Lean.** The Beneficial AI Foundation is verifying the Signal protocol and its Rust implementation in Lean, a public project meant to show that formal verification of major applications is doable today. The plan proves security properties of a protocol model, then uses the Aeneas tool to translate Signal's Rust code to Lean and check it against that model. ([beneficialaifoundation.org](https://www.beneficialaifoundation.org/blog/signal-shot))
- **Dsyme's Lean Squad workflow applies Lean 4 verification to three codebases.** Lean Squad, a GitHub Agentic Workflow, proved 443 theorems for raft-rs with three human nudge comments for about $240, and 518 theorems for Cloudflare's quiche, where it found an Ord antisymmetry violation. It also proved 259 theorems for PX4-Autopilot and found 2 bugs. Every definition and theorem statement is AI written. ([dsyme.net](https://dsyme.net/2026/04/20/lean-squad-automated-software-verification-with-near-zero-human-labour/))

## AI and formalization

- **New arXiv papers test LLM formalization faithfulness, agents, and benchmarks in Lean.** Kyuhee Kim, Auguste Poiroux and Antoine Bosselut evaluate GPT-5 and DeepSeek-R1 on 303 first-order logic problems: GPT-5 fabricates axioms during proof generation, while DeepSeek-R1 mistranslates premises. Other papers introduce PRIME, a benchmark of 156 theorems annotated in Lean 4, analyze tool-augmented formalization agents, and formalize the Wu-Ritt characteristic set method. ([arXiv:2604.19459](https://arxiv.org/abs/2604.19459), [arXiv:2604.19000](https://arxiv.org/abs/2604.19000), [arXiv:2604.16538](https://arxiv.org/abs/2604.16538), [arXiv:2604.14912](https://arxiv.org/abs/2604.14912), [arXiv:2604.18882](https://arxiv.org/abs/2604.18882))

## Verification in practice

- **Alexandre Rademaker presents a port of AWS's s2n-bignum to Lean 4.** s2n-bignum is a collection of integer arithmetic routines in pure machine code for cryptographic applications, and each function ships with a machine-checked proof in HOL Light. The CSLib Community port, presented at INRIA Paris 2026, covers the ARM (aarch64) part first, with the first two tutorials completed. ([arademaker.github.io](https://arademaker.github.io/sviL-hackathon-2026/), [atlas-computing-org/bignum](https://github.com/atlas-computing-org/bignum))

## Papers, events, press

- **Software Verification in Lean 2026 workshop recordings now available.** Talks from the one-day workshop at INRIA Paris on April 20, 2026 are on YouTube, including a talk presenting SymM, a new monadic framework for high-performance verification tools built on Lean, Son Ho on SymCrypt, and Karthikeyan Bhargavan on verifying cryptographic applications. Derek Sorensen's talk was not recorded, and slides were provided instead. ([beneficial-ai-foundation.github.io](https://beneficial-ai-foundation.github.io/SVIL2026/), [leodemoura.github.io](https://leodemoura.github.io/static/svil26/))
