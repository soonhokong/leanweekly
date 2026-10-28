---
issue: 40
date: 2026-10-28
window_start: 2026-10-27
window_end: 2026-10-28
---

## Headlines

- **Anthropic's Claude generates Lean proof of subexponential deterministic factoring.** Isaac Rudich and Louis-Martin Rousseau registered the proof that one deterministic Turing machine computes the smallest prime factor of every natural number N in time N^{o(1)}; the best previously published deterministic bounds known to the authors have exponent 1/5. The authors audited the statement and did not read the proof, which Lean checks. ([palomar-registry.org](https://palomar-registry.org/entry?id=PALOMAR-2026-10-28-000015&version=1), [IsaacRudich/SubexponentialDeterministicFactoring](https://github.com/IsaacRudich/SubexponentialDeterministicFactoring))
- **Scott Armstrong and Zohar Komargodski formalize the positive-measure KAM theorem in Lean.** The headline theorem is proved: for a nearly-integrable Hamiltonian with a small enough perturbation, most of phase space is filled by invariant tori carrying quasi-periodic motion. Agents prove the frozen statements (approved line by line, never edited); 11 of 22 are proved so far, with 73,724 of an estimated 117,000 lines of Lean. ([scottnarmstrong/KAM-dev](https://github.com/scottnarmstrong/KAM-dev))

## Verification in practice

- **Open-source desktop OS ZENOS releases first preview with Lean-proved security decisions.** ZENOS's services ask zenos-decide, built from the same Lean definitions as the proofs, whether a file opens, content may reach a printer or AI, and a send is allowed, treating missing or unreadable answers as refusals. The theorems rest only on Lean's standard axioms, but the unaudited preview is not for real sensitive data. ([zenos-org/zenos](https://github.com/zenos-org/zenos/blob/main/docs/FORMAL_VERIFICATION.md), [leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/579630-Project-announcements/topic/ZENOS.3A.20OS.20security.20decisions.20proved.20in.20Lean.204/with/635560572), [zenos-org/zenos](https://github.com/zenos-org/zenos/tree/main/formal), [zenos v0.1.0-preview](https://github.com/zenos-org/zenos/releases/tag/v0.1.0-preview))
