---
title: "vSmolLM"
description: "PyTorch implementation of GPT-2 from scratch with training on WikiText-103."
tags: ["PyTorch", "GPT-2", "Training"]
github: "https://github.com/tnzl/vSmolLM"
order: 2
---

vSmolLM reimplements GPT-2 end to end in PyTorch and trains on WikiText-103.

## Highlights

- Full GPT-2 architecture (attention, embeddings, transformer blocks)
- Mixed-precision (FP16) training, gradient accumulation, LR warmup
- Weights & Biases experiment tracking
- Train / evaluate scripts with checkpointing

A compact project for understanding decoder-only transformers from architecture through a resume-friendly training loop.
