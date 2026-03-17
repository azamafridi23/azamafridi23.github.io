---
title: "Linear Algebra - Part 7: The Dot Product and Duality: Alignment and Projections"
date: "2026-03-15"
category: "Linear Algebra"
description: "Measuring vector alignment, the projection interpretation, and the 'duality' idea where vectors can represent linear functions."
--- 

*In [Part 6](./linear_algebra-p6), we explored how matrices can project vectors between different dimensions. Now we turn to a specialized tool that measures how vectors align with one another, which is the foundation for calculating projections and angles.*

<hr>

## 1. What is the Dot Product?

For two vectors:

$$a = \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}, \quad b = \begin{bmatrix} b_1 \\ b_2 \end{bmatrix}$$

The dot product is:

$$a \cdot b = a_1 b_1 + a_2 b_2$$

For $n$ dimensions:

$$a \cdot b = \sum a_i b_i$$

---

## 2. Geometric Meaning

$$a \cdot b = |a||b|\cos(\theta)$$

where $\theta$ is the angle between vectors.

> The dot product measures **how aligned two vectors are**.

| Case | Result |
|------|--------|
| Same direction `→ →` | Large positive value |
| Perpendicular `→ ↑` | Zero |
| Opposite direction `→ ←` | Negative value |

---

## 3. Projection Interpretation

> The dot product tells **how much one vector lies in the direction of another**.

$a \cdot b$ tells how much $a$ points in the direction of $b$.

This is related to the **projection** of vectors.

---

## 4. Dot Product as a Linear Transformation

Consider vector:

$$a = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$$

Define transformation:

$$T(x) = a \cdot x$$

This maps $\mathbb{R}^2 \rightarrow \mathbb{R}$.

For $x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$:

$$T(x) = 2x_1 + x_2$$

> The dot product **turns a vector into a number**.

---

## 5. Matrix Interpretation

The dot product can be written as:

$$a \cdot x = \begin{bmatrix} 2 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$$

This is a $1 \times 2$ matrix multiplied by a vector.

> **Dot product = linear transformation** from $\mathbb{R}^2 \rightarrow \mathbb{R}$

---

## 6. Duality Idea

> **Duality** means vectors can represent linear functions.

Vector:

$$a = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$$

represents the function:

$$f(x) = a \cdot x$$

The vector encodes a linear function — this is called the **dual vector**.

---

## 7. Geometric Interpretation of Duality

Evaluating $a \cdot x$ for many vectors $x$, vectors that produce the same result lie on a line.

**Example:** $a \cdot x = 1$

All vectors satisfying this form a line **perpendicular to** $a$.

> Vector $a$ defines a family of **parallel lines**.

---

## 8. Orthogonality

If:

$$a \cdot b = 0$$

then the vectors are **orthogonal** (perpendicular).
```
→
↑
```

> Orthogonality is important in many algorithms.

---

## 9. Connection to Linear Algebra Topics

The dot product connects many ideas:
- Projections
- Orthogonality
- Linear transformations
- Matrix multiplication

> Matrix multiplication uses **dot products of rows and columns**.

<hr>

*In this post, we saw that the dot product is much more than a formula—it’s a geometric measure of alignment and projection. We also touched on the elegant idea of "duality," where a vector can be viewed as a linear transformation.*

**Next up:** *The dot product gives us a scalar measuring alignment. Is there a counterpart that gives us a vector measuring perpendicularity? In [Part 8: The Cross Product](./linear_algebra-p8), we will explore the tool used to find orthogonal directions and compute areas in 3D.*
