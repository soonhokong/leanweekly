---
issue: 55
date: 2026-11-14
window_start: 2026-11-13
window_end: 2026-11-14
---

## Headlines

- **Mahdi JafariRaviz formalizes Robertson and Seymour's Graph Minors series in Lean 4.** The formalization covers all 838 numbered results across 22 papers, including the graph minor theorem (Wagner's conjecture), the excluded-minor structure theorem, and the O(n³) algorithm for the k disjoint paths problem. The three main theorems pass comparator and use only the standard axioms; the repository describes corrections to the papers, none affecting those theorems. ([leanprover.zulipchat.com](https://leanprover.zulipchat.com/#narrow/channel/579630-Project-announcements/topic/Graph.20Minors/with/640335582))
- **Claude and Codex agents produce complete Lean formalization of restricted isometry paper.** The paper, by Christian Kümmerle and Dustin G. Mixon, constructs explicit restricted isometries (measurement matrices for compressed sensing) beyond the square-root barrier believed to limit its proof technique. The agents, directed by the authors, proved every numbered result, including the needed case of Zahl's sphere-tangency theorem, but no running-time bound. ([ckuemmerle/ExplicitRIPTwoThirds](https://github.com/ckuemmerle/ExplicitRIPTwoThirds), [arXiv:2611.14475](https://arxiv.org/abs/2611.14475), [paperswithlean.com](https://paperswithlean.com/paper/2611.14475.html))

## AI and formalization

- **Lexifina formalizes the US tax code in Lean, finding 138 drafting mistakes.** Lexifina used AI to translate each section of the tax law into Lean, staying close to the statute's own words, and tested it against worked examples in IRS forms and instructions. Each drafting mistake has a Lean certificate proving the fault, and a comparison with three tax programs found bugs in Tax-Calculator and UsTaxes. ([lexifina.com](https://lexifina.com/blog/formalizing-the-us-tax-code))
