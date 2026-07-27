export const site = {
  name: 'Tanzeel Ur Rahman',
  headline: 'Senior ML Compiler & Inference Engineer',
  bio: 'Senior ML Compiler & Inference Engineer with 4+ years building an MLIR-based ML compiler and optimizing transformer models for low-latency inference across CPU/GPU/NPU. Deep expertise across the LLM deployment lifecycle — quantization, model building, and compiler-level inference optimization — taking state-of-the-art LLMs (Qwen, Llama, Phi) from PyTorch/ONNX graphs to production hardware.',
  subline: 'AMD (AI Products Group) · BITS Pilani',
  email: 'iamtanzeel1998@gmail.com',
  github: 'https://github.com/tnzl',
  linkedin: 'https://www.linkedin.com/in/tnzl',
  url: 'https://tnzl.github.io',
} as const;

export const nav = [
  { href: '/articles/', label: 'Articles' },
  { href: '/projects/', label: 'Projects' },
  { href: '/notes/', label: 'Notes' },
  { href: '/photography/', label: 'Photography' },
] as const;

export const photos = [
  {
    src: '/photography/portrait.jpg',
    alt: 'Tanzeel Ur Rahman',
    caption: 'Tanzeel Ur Rahman',
  },
] as const;
