---
issue: 37
date: 2026-10-25
window_start: 2026-10-24
window_end: 2026-10-25
---

## Headlines

- **Joachim Breitner releases con-agua, a Lean checker with verified x86 assembly.** Written by AI under Joachim Breitner's supervision, con-agua is an x86 assembly port of the external Lean checker con-leche and requires the Kraken x86 semantics to be correct in place of the Lean compiler and runtime. A 5MB assembly file and a 200-line main.c, plus one data file, are all it needs. ([leanprover/con-agua](https://github.com/leanprover/con-agua/), [leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/113488-general/topic/con-agua.2C.20an.20x86.20assembly.20port.20of.20con-leche/with/634779855))

## Verification in practice

- **AssureCode uses Lean for structured justification of AI-generated code.** Logan Murphy and coauthors describe AssureCode, which autoformalizes developer intent into Lean specifications for human approval, then decomposes claims via Lean templates, with Lean checking an agent's decomposition-soundness proofs. On HumanEval, LiveCodeBench and MBPP samples with four LLMs, a single run recovered most of an iterative LLM baseline's concerns and surfaced additional ones. ([arXiv:2610.29758](https://arxiv.org/abs/2610.29758), [paperswithlean.com](https://paperswithlean.com/paper/2610.29758.html))
