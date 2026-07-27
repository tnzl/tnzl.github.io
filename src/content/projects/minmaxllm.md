---
title: "MinMaxLLM"
description: "High-performance CPU inference engine for large language models — C++ core, Python bindings, AVX2 SIMD."
tags: ["C++", "LLM", "AVX2", "Inference"]
github: "https://github.com/tnzl/MinMaxLLM"
order: 1
---

MinMaxLLM is a CPU-optimized inference engine for running large language models on standard hardware. The core is C++; the API is Python-first via pybind11 with zero-copy NumPy sharing.

## Highlights

- AVX2-optimized matrix ops, attention, and normalization
- Memory-mapped safetensors loading and KV-cache management
- Operator-based architecture with GQA, SiLU MLP, RMSNorm, and RoPE
- Streaming chat interface with real-time token generation

Built to explore how far careful systems work can push decoder-only LLMs without a GPU dependency.
