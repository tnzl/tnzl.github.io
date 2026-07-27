---
title: "Compiler pass notes: fusion and layout"
description: "Scratch notes on passes that repeatedly matter in ML compilers — demo note."
pubDate: 2026-02-11
draft: false
---

> Demo content — replace later.

## Fusion

- Fuse elementwise chains into matmuls / attention blocks when memory traffic dominates.
- Prefer fusions that remove materializations, not ones that only tidy the graph.
- Canonicalize early so patterns match reliably.

## Layout

- Kill redundant transpose/reshape pairs across lowering.
- Choose layouts once for a region of the graph; converting repeatedly is expensive.
- Measure before and after with a simple profiler — “looks cleaner” is not a win.

Keep extending this note with concrete pass names from your stack.
