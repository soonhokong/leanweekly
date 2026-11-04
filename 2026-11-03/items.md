---
issue: 46
date: 2026-11-03
window_start: 2026-11-02
window_end: 2026-11-03
---

## Headlines

- **LARK verifies GPU kernels against PyTorch references using LLM agents and Lean.** LARK formalizes a GPU machine model and per-operation semantics in Lean 4 once per target language (PTX, CUDA, HIP), and agents prove segment-by-segment equivalence under exact arithmetic. Of 10 production kernels from LLM serving frameworks, it verifies 9 and finds a previously unknown data race in the tenth, an llm.c softmax kernel. ([arXiv:2611.02028](https://arxiv.org/abs/2611.02028), [paperswithlean.com](https://paperswithlean.com/paper/2611.02028.html))
- **Baoyu Zhang and Shengmin Zhang prove Díaz–Park conjecture, formalized in Lean.** The conjecture concerns sharpness of saturated fusion systems; the proof avoids the classification of finite simple groups and answers a question from M. Aschbacher, R. Kessar and B. Oliver's list of important open problems. The formalization, built with AI assistance from Codex, spans Lean (61,849 lines in 957 modules) and Rocq (99,857 lines). ([arXiv:2611.02043](https://arxiv.org/abs/2611.02043), [BaoyuZhang747/sharpness-Lean-Rocq](https://github.com/BaoyuZhang747/sharpness-Lean-Rocq), [paperswithlean.com](https://paperswithlean.com/paper/2611.02043.html))

## Verification in practice

- **Sreehari Sankar and coauthors present LeanGuard, Lean-verified guardrails for AI agents.** LeanGuard checks every tool call an agent proposes against a Lean 4 policy, using a decision procedure proved equivalent to a LeanLTL temporal semantics. On Tau-Bench, unguarded Qwen agents executed at least 33 policy-forbidden calls while LeanGuard executed none, and it cut direct prompt-injection success on DTap from 57.9% to 5.9%. ([arXiv:2611.02332](https://arxiv.org/abs/2611.02332), [DebarghaG/LeanGuard](https://github.com/DebarghaG/LeanGuard))
- **Jan Onderka, Armin Biere and Henrik Böving verify a Lean SMT-LIB parser.** The paper introduces blazing-smtlib, a Rust parsing library for SMT-LIB (a standard input format for SMT solvers), and its Lean port BSmtLib, whose optimised lexer and parser provably match a formalised SMT-LIB syntax. On 9,201 benchmark files, blazing-smtlib is more than 6 times faster than previous libraries (geometric mean); BSmtLib is faster or comparable. ([arXiv:2611.00185](https://arxiv.org/abs/2611.00185), [onderjan/blazing-smtlib](https://github.com/onderjan/blazing-smtlib), [paperswithlean.com](https://paperswithlean.com/paper/2611.00185.html))

## Papers, events, press

- **Researchers bring effect handlers to JAX, backed by Lean 4 proofs.** Oghenevwogaga Ebresafe, Daniel Zheng, Gordon Plotkin, and Ningning Xie compile effect handlers to restricted, first-order accelerator languages via a translation that statically eliminates the handlers and preserves typing and semantics, with proofs fully mechanized in Lean 4. The design is implemented as a library for JAX, a Python domain-specific language for accelerator programming. ([arXiv:2611.03918](https://arxiv.org/abs/2611.03918))
