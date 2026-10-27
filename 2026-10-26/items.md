---
issue: 38
date: 2026-10-26
window_start: 2026-10-25
window_end: 2026-10-26
---

## Headlines

- **Natalie Marleny announces formal-git, modelling about 30% of Git in Lean 4.** Built over two months with heavy use of coding agents, the project proved more than 8,000 theorems of varying usefulness and uncovered more than 100 potential defects in Git v2.55, including at least two possible security vulnerabilities. Its differential random testing harness and more than 10,000 unique tests will be open-sourced after responsible disclosure. ([@NatalieMarleny on X](https://x.com/NatalieMarleny/status/2113611475554124091))
- **Zhe Ye and coauthors propose agentic verified optimization in Lean 4.** Agents return faster code plus a Lean proof that it equals the original, which serves as the specification. The agents did so for 156 of 189 Verina functions, and 92 proved rewrites sped up 47 of 51 scenarios in 17 applications the authors' Aqueduct framework migrated to Lean from C, C++, Go, or Rust. ([aqueduct.verina.io](https://aqueduct.verina.io/), [arXiv:2610.30188](https://arxiv.org/abs/2610.30188), [@0xlf_ on X](https://x.com/0xlf_/status/2113752716254331352))

## Verification in practice

- **John Zhuoyang Ye and Jens Palsberg verify fault-tolerant quantum compilation in Lean.** The paper introduces QPPM, a language for Pauli-product measurement programs, and verifies lowering of Clifford+T circuits to QPPM and an optimizer that eliminates measurements, fuses and reorders rotations, and schedules logical rounds. On QASMBench, verified fusion and scheduling reduce logical measurement depth by a median of 17.9%. ([arXiv:2610.31694](https://arxiv.org/abs/2610.31694), [paperswithlean.com](https://paperswithlean.com/paper/2610.31694.html))

## Lean core and ecosystem

- **cedar-policy publishes lean-parser-generator, which generates validated LR(1) parsers in Lean.** The tool turns an LR(1) grammar in a .lig file into a compiled Lean parser, plus certificates that Lean checks to prove the parser agrees with a generated dependent specification. It follows the a-posteriori validation architecture also used by Menhir's verified back end, so the automaton construction and code generator need not be trusted. ([cedar-policy/lean-parser-generator](https://github.com/cedar-policy/lean-parser-generator))

## Papers, events, press

- **Software Verification in Lean comes to Stanford University on November 7.** Co-organized by the Beneficial AI Foundation and the Lean FRO, the day of public lectures covers Rust verification with the Aeneas framework, low-level software verification, and formally verified OS kernels. Speakers include Max Tegmark, Shaowei Lin, Leo de Moura, Jonathan Protzenko, Andres Erbsen, and Mike Dodds; a livestream will be available, with recordings afterward. ([@leanprover on X](https://x.com/leanprover/status/2114845590739931589), [functional.cafe](https://functional.cafe/@leanprover/117509551640325237), [bsky.app](https://bsky.app/profile/lean-lang.org/post/3mysr7bbod22j))
