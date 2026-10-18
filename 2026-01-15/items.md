---
issue: 2
date: 2026-01-15
window_start: 2026-01-08
window_end: 2026-01-15
---

## Headlines

- **Axiom's AxiomProver solves all 12 Putnam problems with Lean proofs.** AxiomProver, an autonomous AI theorem prover built by Axiom, solved 12 out of 12 problems from the Putnam Competition, 8 of them within the strict exam time limit, producing formal proofs in Lean. One combinatorial step in Problem A5 required 2,054 lines of formal proof. ([LinkedIn post](https://www.linkedin.com/posts/dhyey-mavani_12-problems-from-the-hardest-math-exam-converted-activity-7416256349250048000-zzpn))

## AI and formalization

- **Hacker News discusses Erdos problem #728 solved largely autonomously by AI.** A Hacker News thread on the claim that Erdos problem #728 "was solved more or less autonomously by AI" drew 619 points and 363 comments. A Harmonic employee said Aristotle, the company's system, can translate an informal English proof into Lean, and commenters debated how to check that a theorem statement is formalized correctly. ([news.ycombinator.com](https://news.ycombinator.com/item?id=46560445))

## Lean core and ecosystem

- **Sebastian Ullrich proposes bundling Lean's Init library into one .olean file.** A pull request by Sebastian Ullrich bundles all `Init` module files into a single file with cross-sharing, reducing cumulative size from 325MB to 264MB and `openat` calls for `import Init` on Linux from about 2000 to about 80. The pull request is still open. ([lean4#11965](https://github.com/leanprover/lean4/pull/11965))
- **Leo de Moura removes super-linear kernel overhead in lambda simplification.** A merged Lean pull request by Leo de Moura improves the proof term produced by `mkFunext`, which `Sym.simp` uses when simplifying lambda expressions. For a 200-lambda benchmark, kernel checking time fell from 148.681 ms to 6.903 ms, and the approach will later come to `Meta.simp`. ([lean4#11932](https://github.com/leanprover/lean4/pull/11932))

## Papers, events, press

- **Martin Ciupa summarizes Tom Kalil's interview with Terence Tao on AI in math.** In a LinkedIn post, Martin Ciupa recaps the conversation, in which Terence Tao calls automating formalization (turning ordinary math into proof-assistant-checked form) the near-term change, stresses formal verification over trusting AI blindly, and highlights Lean-style autocomplete that fills a line or two at a time. ([LinkedIn post](https://www.linkedin.com/posts/martin-ciupa-76418b17_is-math-the-next-ai-frontier-a-conversation-activity-7416497501903511552-aEXF))
- **Lean Together 2026 schedule mixes casual and formal presentations.** The Lean Together 2026 schedule includes a mix of casual and more formal presentations, with talks running around four hours each day and staggered start times for different time zones. Recordings of all talks are on the Lean community YouTube channel. ([leanprover-community.github.io](https://leanprover-community.github.io/lt2026/schedule.html))
