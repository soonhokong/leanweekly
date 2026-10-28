---
issue: 39
date: 2026-10-27
window_start: 2026-10-26
window_end: 2026-10-27
---

## Headlines

- **Axiom Math formalizes the classification of finite simple groups in Lean.** The complete formalization follows the first-generation proof (thousands of journal pages by about a hundred mathematicians), and Lean's kernel checks every logical step. Axiom Math engineers and mathematicians directed AI agents over 24 days, producing approximately 43.1 million lines of code and finding an issue in a published argument for the Unbalanced Group Theorem. ([axiommath.ai](https://axiommath.ai/research/the-enormous-theorem-formalized/), [cfsg.axiommath.ai](https://cfsg.axiommath.ai/), [AxiomMath/CFSG](https://github.com/AxiomMath/CFSG), [hexagonmath.org](https://hexagonmath.org/pdf/2610.00575v1))
- **Michael Stoll had Claude build a verified Lean 4 model of ratpoints.** Claude mirrored ratpoints, Michael Stoll's C program that finds rational points on hyperelliptic curves, in Lean function by function and proved, as Comparator certified, that the model meets a short specification. Michael Stoll called the work token-intensive enough to use up a Max 20x subscription's weekly Opus 5.5 allowance within three to four days. ([MichaelStollBayreuth/RatpointsLean](https://github.com/MichaelStollBayreuth/RatpointsLean), [leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/583339-AI-authored-projects/topic/RatpointsLean/with/635501056), [MichaelStollBayreuth/ratpoints](https://github.com/MichaelStollBayreuth/ratpoints))

## Verification in practice

- **Harmonic's Aristotle proved 185 properties of Tensordyne's most complex block.** Aristotle, an AI that formally verifies software and hardware, also refuted 56 properties of the 12.2 million gate-equivalent block, each with a reproducible counterexample, exposing bugs up to 110,000 cycles after reset. Counting earlier Aristotle runs on sub-blocks, Tensordyne found 8 bugs early in its next chip's design cycle. ([harmonic.fun](https://www.harmonic.fun/aristotle/case-studies/tensordyne/), [harmonic.fun](https://www.harmonic.fun/))
- **Harmonic's Aristotle fixes three LibTomMath bugs and verifies optimized routines.** Aristotle, Harmonic's AI that formally verifies software, found and repaired three bugs in LibTomMath 1.2.0, which supplies large-integer arithmetic to Tcl and Dropbear SSH. Aristotle then optimized two arithmetic routines, making modular exponentiation 31–38% faster in benchmarks, and proved them against the repaired code's specifications for results, memory safety, errors, and stored values. ([harmonic.fun](https://www.harmonic.fun/aristotle/case-studies/libtommath/), [harmonic.fun](https://www.harmonic.fun/))
