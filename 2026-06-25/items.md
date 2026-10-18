---
issue: 19
date: 2026-06-25
window_start: 2026-06-18
window_end: 2026-06-25
---

## Headlines

- **Lean 4.33 gives Float a pure Lean model, making float proofs possible.** Julia Markus Himmel added Float.Model, a pure Lean implementation of 64-bit floating-point numbers, and made Float a wrapper around it, so float operations are no longer opaque to the kernel while compiled code still uses native operations. Users can now prove 0.1 + 0.2 != 0.3 with rfl. ([juliahimmel.de](https://juliahimmel.de/blog/float-qanda/), [lean4#14079](https://github.com/leanprover/lean4/pull/14079), [lean4#14091](https://github.com/leanprover/lean4/pull/14091), [lean4#14110](https://github.com/leanprover/lean4/pull/14110))

## Lean core and ecosystem

- **Sebastian Graf ports mvcgen' to Std.Internal.Do and extends it to embedded languages.** Sebastian Graf merged a port of the experimental mvcgen' tactic to the new Std.Internal.Do meta theory, where loop invariants no longer restate the exceptional postcondition. A follow-up extracts a WP type class from WPMonad, enabling verification of deeply embedded languages, tested on an IMP language whose WP instance has no accompanying WPMonad. ([lean4#14080](https://github.com/leanprover/lean4/pull/14080), [lean4#14015](https://github.com/leanprover/lean4/pull/14015))
- **Lean enables respectTransparency.types by default, a breaking change.** Paul Reichert's merged pull request makes Lean compare metavariable types at implicit transparency instead of default, building on Kim Morrison's split of transparency into implicit and instances levels (merged on 2026-06-19). Some lemmas may stop applying in simp or grind; set_option backward.isDefEq.respectTransparency.types false restores the old behavior. ([lean4#13895](https://github.com/leanprover/lean4/pull/13895), [lean4#13637](https://github.com/leanprover/lean4/pull/13637))
- **Sebastian Ullrich speeds up Lean's test suite with shared header snapshots.** A merged pull request lets about 389 elab tests that use `import Lean` reuse one pre-built snapshot, cutting CPU time by 26.0% (2222 s to 1645 s), with CI test wall-clock speedups of about 10-40% depending on platform. Related pull requests speed up `.olean` and snapshot serialization, one cutting snapshot save time by about 28%. ([lean4#14077](https://github.com/leanprover/lean4/pull/14077), [lean4#14109](https://github.com/leanprover/lean4/pull/14109), [lean4#14122](https://github.com/leanprover/lean4/pull/14122))
- **Henrik Böving adds cost metrics for grind's e-matching graph.** A merged Lean pull request by Henrik Böving adds optional diagnostics, enabled via grind.ematch.diagnostics, that flag instances with many direct follow-up children and instances that participated in a large, transitive closure of follow-up instances. The metric is based on the cost heuristic of smt-scope, and thresholds are configurable. ([lean4#14118](https://github.com/leanprover/lean4/pull/14118))
- **Henrik Böving makes Lean's get_task_state_core thread safe.** A merged pull request by Henrik Böving changes the m_imp field of lean_task to an atomic. get_task_state_core read m_imp to check whether a task had finished before taking the mutex, so that memory access was undefined behavior (UB). ([lean4#14108](https://github.com/leanprover/lean4/pull/14108))
- **Lake now deduplicates artifact transfers to and from its cache.** A pull request by Mac Malone, merged into leanprover/lean4, has Lake deduplicate artifacts by their hash when uploading or downloading to the cache (for example in lake cache put or lake cache get). The change fixes possible errors when curl was asked to transfer to the same file or URL multiple times. ([lean4#14060](https://github.com/leanprover/lean4/pull/14060))
- **David Thrane Christiansen adds extensible Markdown rendering for Verso docstrings.** A merged Lean pull request lets custom elements in Verso docstrings define their own Markdown rendering, which is used for LSP hovers and for legacy clients that don't directly support Verso. Example uses include including one docstring in another and showing all currently-available instances of a class. ([lean4#14115](https://github.com/leanprover/lean4/pull/14115))

## Papers, events, press

- **Leo de Moura gives AWS talk on Lean's use across AWS.** In a June 2026 talk, Leo de Moura (Senior Principal Applied Scientist, AWS, and Chief Architect, Lean FRO) described AWS projects built with Lean, including Cedar, a verified authorization policy language, SampCert, verified differential privacy, and Waimea, a tensor compiler for Trainium. The slides are written in Verso. ([leodemoura.github.io](https://leodemoura.github.io/static/aws-june-2026/))
