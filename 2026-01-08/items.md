---
issue: 1
date: 2026-01-08
window_start: 2026-01-01
window_end: 2026-01-08
---

## Verification in practice

- **Logical Intelligence shares AI-generated verified λ-calculus to CPS compiler in Lean.** Logical Intelligence posted on X an AI-generated, formally verified compiler from λ-calculus to CPS, written in Lean4. The post explains formal verification as code that comes with a mathematical proof, checked by the computer, that it works correctly in all cases, not just the ones tested. ([@logic_int on X](https://x.com/logic_int/status/2004073560101593099))

## Lean core and ecosystem

- **Leo de Moura adds benchmarks showing SymM beating MetaM on intros/apply.** A merged Lean 4 pull request by Leo de Moura adds performance comparison tests between the new SymM monad and the standard MetaM for intros/apply operations. Results show a 10-20x speedup, rising from 10.8x at size 1000 to 22.0x at size 6000. ([lean4#11838](https://github.com/leanprover/lean4/pull/11838), [leanprover/lean4](https://github.com/leanprover/lean4/tree/master/src/Lean/Meta/Sym))

## Papers, events, press

- **Lean Community holds Lean Together 2026 virtually via Zoom, January 19 to 23.** Lean Together is an annual meeting for users, developers, and fans of the Lean programming language and theorem prover, covering formalized mathematics, software verification, infrastructure, and outreach. The meeting is open to everyone without cost, and talks will be recorded with speakers' permission and posted to the leanprover community YouTube channel. ([leanprover-community.github.io](https://leanprover-community.github.io/lt2026/))
- **Math, Inc. releases full conversation with Terry Tao on mathematics' future.** Math, Inc. posted a full conversation in which Fields medalist Terry Tao sits down with Math Inc's @jessemhan and @jdlichtman to discuss the future of mathematics. Terry Tao says this style of writing proofs shows the inputs and outputs of a proof more clearly and predicts that "the definition of a mathematician will broaden." ([@mathematics_inc on X](https://x.com/mathematics_inc/status/2006117894305005762))
