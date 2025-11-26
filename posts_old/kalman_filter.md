---
title: "Kalman Filter & LaTeX Test"
date: "2025-11-26"
tag: "Sensor"
summary: "Testing LaTeX rendering for Kalman Filter equations."
---

# Kalman Filter Basics

The Kalman filter is an optimal estimator.

## State Update Equation

The state update is given by:

$$
\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H_k \hat{x}_{k|k-1})
$$

Where $K_k$ is the Kalman Gain:

$$
K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}
$$

## Markdown Features
- **Bold text**
- *Italic text*
- [Link](https://google.com)
- Code block:
```python
def predict(x, P, F, Q):
    x = F @ x
    P = F @ P @ F.T + Q
    return x, P
```
