---
title: "GQA vs MHA glossary"
description: "Tiny glossary for attention variants — demo note."
pubDate: 2026-04-20
draft: false
---

> Demo content — replace later.

## Glossary

**MHA (Multi-Head Attention)**  
Classic transformer attention: independent Q/K/V projections per head.

**GQA (Grouped-Query Attention)**  
Query heads partitioned into groups that share K/V — middle ground between MHA and MQA.

**MQA (Multi-Query Attention)**  
Single K/V shared across query heads — smallest cache, biggest layout/kernel implications.

**KV cache**  
Stored keys/values for prior tokens during autoregressive decode. Layout and dtype dominate decode latency on many targets.
