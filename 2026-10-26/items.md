---
issue: 38
date: 2026-10-26
window_start: 2026-10-25
window_end: 2026-10-26
---

## Verification in practice

- **John Zhuoyang Ye and Jens Palsberg verify fault-tolerant quantum compilation in Lean.** The paper introduces QPPM, a language for Pauli-product measurement programs, and verifies lowering of Clifford+T circuits to QPPM and an optimizer that eliminates measurements, fuses and reorders rotations, and schedules logical rounds. On QASMBench, verified fusion and scheduling reduce logical measurement depth by a median of 17.9%. ([arXiv:2610.31694](https://arxiv.org/abs/2610.31694), [paperswithlean.com](https://paperswithlean.com/paper/2610.31694.html))
