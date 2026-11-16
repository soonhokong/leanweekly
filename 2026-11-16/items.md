---
issue: 57
date: 2026-11-16
window_start: 2026-11-15
window_end: 2026-11-16
---

## Verification in practice

- **Aaron Elijah Mars verifies 15 Ethereum tokens' deployed bytecode in Lean 4.** The proofs, 7,024 theorems in total, cover every input, caller and order of calls for tokens worth about $54 billion on Ethereum, including DAI, UNI, SHIB and PEPE. They show balances always add up to the total supply (or supply grows only as the rules say) and who can mint, freeze, blacklist or pause. ([aaronjmars/proven-tokens](https://github.com/aaronjmars/proven-tokens))
- **NyxFoundation publishes LeanAsm, a Lean 4 foundation for verified RV64 assembly.** LeanAsm covers typed RV64IM (RISC-V) and scalar x86-64 assembly, executable machine semantics, encoding, and source emission; it is intended to be shared by ssz-asm, cl-asm, and p2p-asm. Its architecture follows the verified macro-assembly approach demonstrated by Verified-zkEVM's evm-asm while remaining independent of EVM, zkVM execution, and riscv-zkvm. ([NyxFoundation/LeanAsm](https://github.com/NyxFoundation/LeanAsm))
