---
title: "INT8 / INT4 PTQ trade-offs"
description: "A quick cheat sheet for post-training quantization choices — demo note."
pubDate: 2026-06-01
draft: false
---

> Demo content — replace later.

## Defaults worth starting from

- Prefer **PTQ** when you need fast enablement across many models.
- Track **accuracy vs fp baseline** explicitly (e.g. keep degradation under a few percent).
- Treat **activation** and **weight** quantization as separate decisions.
- BF16 / mixed precision is often the bridge while INT kernels mature.

## Questions to ask per model

1. Where does error accumulate (attention? MLP? embeddings?)?
2. Is the bottleneck compute or memory on this target?
3. Do fused quantized ops exist, or are you lowering to generic matmuls?

Short notes like this are meant to be overwritten with your real numbers.
