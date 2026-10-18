---
issue: 5
date: 2026-02-05
window_start: 2026-01-29
window_end: 2026-02-05
---

## Verification in practice

- **Predictable Machines explains why it chose Lean for Predictable Code.** In an article, Predictable Machines, Inc. explains why it chose Lean as the foundation for Predictable Code, saying Lean's combination of a programming language and a theorem prover makes it possible to formally verify that AI-generated code stays aligned with specifications as systems evolve. ([LinkedIn post](https://www.linkedin.com/posts/davidmazarro_the-first-time-i-fell-in-love-with-a-programming-share-7424423431200227330-m9RD), [predictablemachines.com](https://predictablemachines.com/))
- **Gavin Mendel-Gleason used GPT-5.2 and Lean to verify a citation-streaming program.** Gavin Mendel-Gleason reports that opencode, GPT-5.2 and lean-lsp-mcp produced a provably correct citation streaming program for a RAG answering system in two hours with no interventions. Gavin Mendel-Gleason argues that LLMs increase software generation faster than software understanding, and calls the approach vericoding (vibe-coding using programme verification). ([LinkedIn post](https://www.linkedin.com/posts/gavinmendelgleason_vibe-coding-using-programme-verification-share-7422605545607643137-cGqz/))

## Lean core and ecosystem

- **Leo de Moura's Lean change stops simp from simplifying instances by default.** The pull request, merged on 2026-02-05, ensures simp does not "simplify" instances by default, since doing so creates non-standard instances that cause problems in Mathlib. The old behavior can be retrieved with simp +instances, and the backward compatibility flag for dsimp also deactivates the change. ([lean4#12244](https://github.com/leanprover/lean4/pull/12244))
- **New leancall library lets Python code call Lean functions directly.** A post titled "Calling Lean Functions As Python Functions" introduces leancall, a Python library for Lean-Python interop built on LeanInteract, which gives a Lean REPL as a Python library. Examples include a Lean controller balancing a gym cartpole environment and a Lean ray tracer displayed with Python plotting tools. ([philipzucker.com](https://www.philipzucker.com/leancall/))
- **Leo de Moura fixes Lean's type class resolution cache.** A merged pull request to leanprover/lean4 makes the type class resolution cache properly cache results for type classes containing output parameters. Output parameter arguments, and universe levels that only appear in output parameter types, are erased from the cache key to avoid cache misses. ([lean4#12286](https://github.com/leanprover/lean4/pull/12286))

## Papers, events, press

- **Stan Fedotov compares two AI-assisted math papers, one checked in Lean.** In a LinkedIn post, Stan Fedotov argues the field is "moving towards automated verification in most domains," while noting Lean is "only useful when the standard library supports your field." In one paper, only a somewhat elementary part of the proof was verified in Lean, while the authors proved the deeper parts. ([LinkedIn post](https://www.linkedin.com/posts/stan-fedotov_ai-can-be-faulty-but-very-few-of-us-humans-share-7422619899182837760-_UF8))
- **Blog post formally models a Cyberchase episode's dragon game in Lean.** A post on shadaj.me, "Formally Verifying PBS Kids with Lean4," uses Lean to model the Cyberchase episode "Problem Solving in Shangri-La," a variant of Nim where players remove 1, 2, or 3 dragons. It proves the Cybersquad's poison-number strategy wins, introducing tactics such as rw, simp, split, and omega along the way. ([shadaj.me](https://www.shadaj.me/writing/cyberchase-lean))
