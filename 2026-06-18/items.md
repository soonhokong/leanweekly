---
issue: 18
date: 2026-06-18
window_start: 2026-05-28
window_end: 2026-06-18
---

## Headlines

- **Lean 4.31.0 released with new do loops, Lake linting, mvcgen'.** Lean 4.31.0 lands 305 changes, including while let loops in do blocks, a built-in Lake linting framework, stricter transparency handling in definitional-equality checking, and the experimental mvcgen' tactic, which can outperform mvcgen by over 100x on some synthetic benchmarks. The bundled toolchain moves from LLVM 19 to LLVM 22. ([v4.31.0 release notes](https://lean-lang.org/doc/reference/latest/releases/v4.31.0/), [lean4 v4.31.0](https://github.com/leanprover/lean4/releases/tag/v4.31.0))

## Verification in practice

- **Peter O'Hearn seeks a postdoc for Separation Logic in Lean at Meta.** Peter O'Hearn is hiring a postdoc in the Meta London office who will work closely with Peter O'Hearn and others in the new AI Verification team, collaborating across Meta Superintelligence Labs and possibly building on lean/CSLib, Iris-Lean and loom/velvet. ([LinkedIn post](https://www.linkedin.com/posts/peter-o-hearn-81471647_postdoctoral-researcher-ai-verification-activity-7467927741754044416-OJjv))

## Lean core and ecosystem

- **Wojciech Różowski adds the cbv tactic to grind's interactive sym mode.** A merged Lean 4 pull request by Wojciech Różowski makes the cbv tactic available inside grind's interactive sym => mode. The tactic reduces the goal using call-by-value evaluation, supports at locations for hypotheses, and closes equation goals via refl when reduction finishes the proof. ([lean4#13971](https://github.com/leanprover/lean4/pull/13971))
- **Sofia Rodrigues's pull request linking OpenSSL merged into Lean 4.** Pull request leanprover/lean4#12030, "feat: link OpenSSL" by Sofia Rodrigues, was merged on 2026-06-05. The pull request was opened on 2026-01-16 and describes its change as linking OpenSSL. ([lean4#12030](https://github.com/leanprover/lean4/pull/12030))

## Papers, events, press

- **Kevin Hartnett publishes The Proof in the Code, a book about Lean.** Quanta Books published The Proof in the Code on June 9, 2026, in which Kevin Hartnett tells the story of the birth and rise of Lean, from a bug-checking program at Microsoft Research developed by Leo de Moura to its adoption by mathematicians and tech firms. ([amazon.com](https://www.amazon.com/Proof-Code-Truth-Machine-Transforming/dp/0374620059/ref=sr_1_1?crid=91B3BX98C4TU&dib=eyJ2IjoiMSJ9.7cIT9rIaPhRyI9MIKBuEvvbzE1CJcy8hyF_OJz9ZhZPNobBU5x-b46FZpIJ9UEfmHD3Ux8O6f31FtY2Q_XHpZXeIbbjTQmTDZ-bqvMoXiktDShA4nJCwgMuwb2-d0qhhJXxOwcElMYqsceFnmYhZteAdyjMgJXO27SZq0Wf1UWMQsePeg0cV8OWnrZI--f1QZL2Mq0QLkKXiqMrd-jw2hp4j23G5X_2p7S2H9UZlzos.bS09sbnOG1s-jWPiZEUPRZHrPqBRdnMKogtXZj4uIE0&dib_tag=se&keywords=the+proof+in+the+code&qid=1781798043&sprefix=The+Proof+in+the%2Caps%2C182&sr=8-1))
- **Benjamin Pierce seeks contributors to translate Software Foundations to Lean.** Software Foundations, a series of textbooks on formal proof and foundations of programming languages formalized in Rocq, is being translated to Lean for Fall courses at Penn and elsewhere. Benjamin Pierce says the team is ready to add a few people, especially educators, and will need alpha-testers later in the summer. ([leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/579630-Project-announcements/topic/Software.20Foundations.20in.20Lean.3A.20Call.20for.20Contributions))
