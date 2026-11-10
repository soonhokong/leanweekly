---
issue: 51
date: 2026-11-10
window_start: 2026-11-09
window_end: 2026-11-10
---

## Headlines

- **Google DeepMind uses AI agents to verify Signal's messaging security in Lean.** The researchers used AlphaProof Code, a multi-agent framework for formal software specification and verification, on Signal's post-quantum PQXDH handshake and Triple Ratchet. The agents generated 6.5 million lines of Lean code proving the libsignal implementation correct against a human-reviewed specification; the proof assumes perfect cryptography. ([news.lavx.hu](https://news.lavx.hu/article/google-deepmind-uses-ai-agents-to-verify-signal-s-secure-messaging-techniques))
- **Google researchers use AI agents to design Lean-verified quantum programs.** Google DeepMind and Google Quantum AI researchers had teams of AI agents write quantum programs in a Lean library and prove both correctness and resource cost; a separate checker confirmed each solution met the original specification. The preprint reports a 290-fold reduction over prior baselines for a quantum arithmetic routine (an arcsine calculation). ([mlq.ai](https://mlq.ai/news/google-researchers-use-ai-agents-and-lean-proofs-to-cut-the-resources-quantum-algorithms-need-by-up-to-290-times/))

## AI and formalization

- **Project Numina formalizes a braided fusion category preprint in Lean 4.** The preprint, by Justin Asher, Jonah Berean-Dutcher, Clay Cordova, Julio Parra-Martinez and Richard Tuddenham, proves that every non-degenerate pivotal braided fusion category with property F is pseudo-unitary and weakly integral, assuming neither sphericality nor pseudo-unitarity. The formalization also includes the extension to degenerate categories under a positivity hypothesis. ([project-numina/mtc](https://github.com/project-numina/mtc), [arXiv:2611.12836](https://arxiv.org/abs/2611.12836))
