---
issue: 8
date: 2026-02-26
window_start: 2026-02-19
window_end: 2026-02-26
---

## Verification in practice

- **Rutgers group formalizes the upcoming IEEE-P3109 floating-point standard in Lean.** Santosh Nagarakatte's group built FLoPS, which formalizes the upcoming IEEE-P3109 standard for low-precision floating-point arithmetic in Lean. The work found errors in the draft standard, which were reported to the working group and fixed, and established properties of algorithms such as Fast2Sum in the context of P3109. ([mathstodon.xyz](https://mathstodon.xyz/@santoshgnag/116094965862661574))

## Lean core and ecosystem

- **Leo de Moura merges isDefEq transparency change into Lean core.** The pull request stops isDefEq from raising transparency to .default when checking implicit arguments, which was creating scalability problems in Mathlib. The PR calls it a very disruptive change, reversible with set_option backward.isDefEq.respectTransparency false. Separately, Lean published the second release candidate for v4.29.0. ([lean4#12179](https://github.com/leanprover/lean4/pull/12179), [lean4 v4.29.0-rc2](https://github.com/leanprover/lean4/releases/tag/v4.29.0-rc2))

## Papers, events, press

- **Emilio Jesús Gallego Arias built a Lean DSL debugger with GPT-Codex 5.3.** In the blog post "Vibe-coding a debugger for a DSL", Joachim Breitner describes a small language embedded in Lean with a visual debugger in Lean's Info View and VSCode debugger support via the DAP protocol, built in one day of coding with GPT-Codex 5.3. ([joachim-breitner.de](https://www.joachim-breitner.de/blog/819-Vibe-coding_a_debugger_for_a_DSL))
