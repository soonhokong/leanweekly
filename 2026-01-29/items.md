---
issue: 4
date: 2026-01-29
window_start: 2026-01-22
window_end: 2026-01-29
---

## Lean core and ecosystem

- **Lean publishes leansqlite, SQLite bindings for Lean.** The leanprover/leansqlite library bundles SQLite and adds interpolated strings that expand to prepared statements, plus iterators over query result rows. A Zulip user, pandaman, shared LeanToDo, an experiment in building a web application with Lean that uses leansqlite for its database and Verso for HTML templating. ([leanprover/leansqlite](https://github.com/leanprover/leansqlite), [leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/113488-general/topic/LeanToDo.3A.20creating.20a.20web.20app.20using.20Lean/with/570823744))
- **Sebastian Ullrich's merged PR separates meta and non-meta code in Lean binaries.** The change lets the module system, in cooperation with the linker, keep tactics used only in proofs out of the final native binary. A simple example using `meta import Lean` shrinks from 130MB to 1.7MB. As a breaking change, `importModules (loadExts := true)` must now be preceded by `enableInitializersExecution`. ([lean4#12016](https://github.com/leanprover/lean4/pull/12016))
- **Leo de Moura merges three Lean core changes to instance handling.** Lean now identifies instance parameters by type using isClass? instead of binder syntax, dsimp no longer simplifies instances by default, and isDefEq no longer raises transparency to .default for implicit arguments, a change the PR calls very disruptive. Old behavior is available through backward.* options, and the PRs cite problems in Mathlib. ([lean4#12172](https://github.com/leanprover/lean4/pull/12172), [lean4#12195](https://github.com/leanprover/lean4/pull/12195), [lean4#12179](https://github.com/leanprover/lean4/pull/12179))
- **Willem Vanhulle builds a terminal user interface for Lean 4 users.** Willem Vanhulle is putting together a TUI (a terminal-only user interface) for Lean4 users, built with Ratatui. The TUI has several display modes with different display styles for on-going mathematical proof development, and documentation is available. ([LinkedIn post](https://www.linkedin.com/posts/willem-vanhulle-2657aa180_math-proof-tui-activity-7421958100535996416-QSdl/))
