---
issue: 33
date: 2026-10-21
window_start: 2026-10-20
window_end: 2026-10-21
---

## Headlines

- **Matija Bucić, Fankang He and Hyunwoo Lee prove Erdős-Szemerédi sunflower conjecture.** Posed in the 1970s, the conjecture bounds the size of any family of subsets containing no k-sunflower and was previously known only for k = 3, via cap-set results. According to paperswithlean.com, the proof was machine-verified in Lean 4, with the formalization to be released in the Palomar repository. ([arXiv:2610.26686](https://arxiv.org/abs/2610.26686), [paperswithlean.com](https://paperswithlean.com/paper/2610.26686.html))

## Lean core and ecosystem

- **Linux 7.3 works around AMD CPU bug behind Lean build segfaults.** The FRO noticed probabilistic segfaults while compiling big Lean projects on certain AMD CPUs running Linux 6.15 or later, and reported them to the Linux kernel. Users of AMD Zen 5 CPUs on kernels 6.15 through 7.2 should consider kernel 7.3 and/or the latest AMD microcode, or, failing that, boot with the option tlbi=ipi. ([leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/113486-General-announcements/topic/Linux.207.2E3.20contains.20a.20bugfix.20for.20Lean/with/633073219), [lore.kernel.org](https://lore.kernel.org/lkml/CAAuFnRTyva1_3tsF3vrMBL+TLS1YL4EgUPT2c3O9k7A9hWUMnA@mail.gmail.com/))
