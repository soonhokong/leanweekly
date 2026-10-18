---
issue: 20
date: 2026-07-02
window_start: 2026-06-25
window_end: 2026-07-02
---

## AI and formalization

- **Mistral AI lists Leanstral 1.5, an updated Lean 4 proving model.** Mistral AI's documentation lists Leanstral 1.5, dated June 30, 2026, as an updated Lean 4 formal proof engineering model optimised for automated theorem proving and autoformalization. The Apache 2.0 model has 119B total parameters (6.5B active) and a 256k context, though the page marks it deprecated with a deprecation date of 9/29/2026. ([docs.mistral.ai](https://docs.mistral.ai/models/model-cards/leanstral-1-5-26-06))

## Verification in practice

- **ArkLib anchors a growing ecosystem of Lean libraries for verifying SNARKs.** ArkLib, a project supported by the Ethereum Foundation, mechanizes the probabilistic security proofs that succinct non-interactive arguments of knowledge (SNARKs) depend on. It gives zk engineers and cryptography researchers machine-checked specifications and executable references for proof systems where a single soundness bug can be catastrophic. ([lean-lang.org](https://lean-lang.org/))

## Lean core and ecosystem

- **Sebastian Graf renames mvcgen' to vcgen and adds frame support.** Sebastian Graf merged pull requests renaming the experimental Sym-based mvcgen' tactic to vcgen, speeding up its matching, and adding a frames clause. A new @[frameproc] attribute lets a program type register how it frames a resource, so cost budgets, separation-logic footprints, and trace invariants frame through the same mechanism. ([lean4#14195](https://github.com/leanprover/lean4/pull/14195), [lean4#14146](https://github.com/leanprover/lean4/pull/14146), [lean4#14167](https://github.com/leanprover/lean4/pull/14167), [lean4#14134](https://github.com/leanprover/lean4/pull/14134))
- **Lean 4 moves deferred docstring checks onto the linter framework.** A merged pull request by David Thrane Christiansen adapts Lean's deferred docstring check mechanism to use the linter mechanism, replacing custom CI setup with an interface akin to environment linters and governed by the option linter.doc.deferred. In a breaking change, custom Verso docstring elements now use a two-constructor type. ([lean4#14206](https://github.com/leanprover/lean4/pull/14206))

## Papers, events, press

- **Gwern Net proposes measuring how Lean code predictability scales for LLMs.** Gwern Net's research proposal would measure coding LLM perplexity over growing codebase context to estimate scaling laws of predictability by language. The essay predicts Lean suffers from a very high constant but would have the best scaling exponent, and so would eventually cross over more popular languages such as Python. ([gwern.net](https://gwern.net/lean-scaling))
