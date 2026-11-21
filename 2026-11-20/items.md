---
issue: 60
date: 2026-11-20
window_start: 2026-11-19
window_end: 2026-11-20
---

## Headlines

- **Harry Wang formalizes the Four Color Theorem in Lean 4 without Mathlib.** The self-contained proof follows Georges Gonthier's hypermap framework and the published mathematics of Neil Robertson, Daniel P. Sanders, Paul Seymour, and Robin Thomas. It verifies all 633 unavoidable configurations (249 D-reducible, 384 C-reducible) and all 5 cartwheel discharging trees directly inside the Lean kernel without native_decide. ([palomar-registry.org](https://palomar-registry.org/entry?id=PALOMAR-2026-11-20-000011&version=1), [Harry-Tech-Guide/Lean-4-Four-Color-Theorem-Formalization](https://github.com/Harry-Tech-Guide/Lean-4-Four-Color-Theorem-Formalization))
- **L. Alpöge and T. Buckmaster's Navier–Stokes blow-up paper comes with Lean formalization.** The Lean v4.33.1 package, with Mathlib, has a library of about 2,270 files and 600,000 lines and permits only the axioms propext, Quot.sound and Classical.choice, but its patched version was not rebuilt. It contains no data: the paper's certificate is not in the repository, and the interval-arithmetic computation checking it lies outside the formalization. ([tristanbuckmaster/navier-stokes](https://github.com/tristanbuckmaster/navier-stokes))
- **Authors of a 3D Euler singularity paper formalize it in Lean.** Levent Alpöge, Tristan Buckmaster and Matei P. Coiculescu formalized the arXiv version of "Finite-Time Singularity Formation for the Three-Dimensional Euler Equations" in one-to-one correspondence with its proof: each numbered result's Lean proof assumes exactly what its TeX proof cites. VerifySpine.lean checks the correspondence, and the sources contain no sorry. ([mcoiculescu/EulerBlowupPublic](https://github.com/mcoiculescu/EulerBlowupPublic))
