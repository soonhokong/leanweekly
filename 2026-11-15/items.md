---
issue: 56
date: 2026-11-15
window_start: 2026-11-14
window_end: 2026-11-15
---

## Headlines

- **Mark Lewko formalizes sharp Kakeya bounds in every dimension, with AI assistance.** The Palomar registry entry proves two upper estimates, on the Kakeya maximal operator (largest averages over tubes around unit segments in each direction) and weighted tube overlaps, and says they imply the Kakeya maximal function conjecture. Only those two estimates are Lean theorems, and the repository discloses the lack of independent human mathematical review. ([palomar-registry.org](https://palomar-registry.org/entry?id=PALOMAR-2026-11-15-000001&version=1), [mrklwk/kakeya-sharp](https://github.com/mrklwk/kakeya-sharp))
- **Logan R. Chalmers lowers four-dimensional Borsuk bound to six, formalized in Lean.** Logan R. Chalmers proves that every set of diameter one in four dimensions can be split into at most six parts of smaller diameter, improving the previous upper bound of seven; five are sometimes necessary. The proof uses cones, balls or a rational polytope depending on circumradius, and the theorem is formalized in Lean. ([arXiv:2611.17375](https://arxiv.org/abs/2611.17375))

## AI and formalization

- **Juan Pablo Traverso Gianini directs AI to formalize Peter Keevash's triangle-decomposition theorem.** Written by Harmonic's Aristotle and Claude Opus 5.5, the Lean proof of Theorem 2.1 of "Counting designs" assumes typicality on every set of at most 16 vertices, stronger than the paper's pairs-only hypothesis, so the paper's version is not covered. The proof replaces the Completion stage's random greedy algorithms with a deterministic potential argument. ([jtraverso/keevash-triangle-decompositions](https://github.com/jtraverso/keevash-triangle-decompositions), [palomar-registry.org](https://palomar-registry.org/entry?id=PALOMAR-2026-11-14-000022&version=1))

## Verification in practice

- **Nethermind's Foxglove formalizes a separation logic for probabilistic programs in Lean.** Built on iris-lean, Foxglove adapts the Bluebell logic of Bao, D'Osualdo and Farzan to functional programs and is intended to support verifying cryptographic primitives formalized in ArkLib. Every rule of the logic is proved against a semantic model with no axioms beyond Lean's own, and the Ethereum Foundation funded the work. ([NethermindEth/Foxglove](https://github.com/NethermindEth/Foxglove), [reservoir.lean-lang.org](https://reservoir.lean-lang.org/@NethermindEth/foxglove))
- **Scidonia Limited ports libexpat's XML 1.0 parsing semantics to Lean 4.** The port, lexpat, is aimed at untrusted input and has a resumable streaming core, machine-checked properties of its UTF-8 decoder, and a bounded differential fixture against libexpat. A C header and shared library for x86_64-linux provide a subset of libexpat's XML_* calls; namespace processing, DTDs and external entities are not implemented. ([scidonia/lexpat](https://github.com/scidonia/lexpat), [reservoir.lean-lang.org](https://reservoir.lean-lang.org/@scidonia/lexpat))
- **emberian's qsag combines post-quantum threshold signing in Rust with Lean proofs.** The research-preview stack implements NIST FIPS 205 SLH-DSA-SHAKE and FIPS 204 ML-DSA-44, and Lean certificate checks pass for its 19 x86-64 and 9 AArch64 certified assembly kernels. Its main-library axiom audit checks 59,257 declarations, including 28,744 kernel theorem declarations, across 57 modules, with no rejected axioms. ([emberian/qsag](https://github.com/emberian/qsag))
