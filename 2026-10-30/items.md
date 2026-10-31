---
issue: 42
date: 2026-10-30
window_start: 2026-10-29
window_end: 2026-10-30
---

## Headlines

- **Basis Research Institute proves compiled libtommath correct in Lean, finds bugs.** The proofs show that all 100 functions of the RV64I image of libtommath v1.3.0 (76 libtommath functions and the 24 newlib/libgcc routines they call) meet specifications as total-correctness triples on the Sail RISC-V model. Bugs found in that version include mp_invmod returning −2 for -3 and 7 instead of an inverse. ([BasisResearch/verified-libtommath](https://github.com/BasisResearch/verified-libtommath))
- **Junpeng Ren disproves the pure semisimplicity conjecture, with a Lean formalization.** The conjecture asserts that every right pure semisimple ring (one whose right modules are all direct sums of finitely generated modules) is of finite representation type. Junpeng Ren's triangular ring is right pure semisimple but not of finite representation type, and all sixteen labelled statements of the manuscript have compiled and audited Lean counterparts. ([arXiv:2610.39883](https://arxiv.org/abs/2610.39883), [oasisss6666/pure-semisimplicity-lean](https://github.com/oasisss6666/pure-semisimplicity-lean))

## Verification in practice

- **Denis Firsov verifies worst-case constant-time order maintenance in Lean 4.** No order-maintenance algorithm (keeping a sequence under insertions and deletions and telling which of two elements comes first) had been verified in a proof assistant. This verification, about 78,000 lines, proves that a program for a step-counting machine embedded in Lean matches a reference specification within a fixed number of steps per operation. ([arXiv:2610.38616](https://arxiv.org/abs/2610.38616), [dfirsov/order_maintenance](https://github.com/dfirsov/order_maintenance), [paperswithlean.com](https://paperswithlean.com/paper/2610.38616.html))
