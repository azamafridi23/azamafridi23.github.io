---
title: "Linear Algebra - Part 3: Matrix Multiplication"
date: "2026-03-15"
category: "Linear Algebra"
description: "Applying multiple transformations sequentially, why matrix multiplication represents composition, and the geometric reason why order matters."
--- 

*In [Part 2](./linear_algebra-p2), we discovered that matrices act as functions that transform space, with their columns revealing exactly where the basis vectors land. But what if we want to rotate space and then immediately stretch it? Let's explore how we combine these actions.*

<hr>

## 1. Applying Multiple Transformations

Sometimes we apply two transformations sequentially.

### Example

1. Rotate a vector by $90^\circ$
2. Then apply a shear transformation

Mathematically:

$$T_2(T_1(v))$$

This means:
- First apply $T_1$
- Then apply $T_2$

---

## 2. Composition of Transformations

Applying one transformation after another is called **composition**:

$$T_2(T_1(v))$$

---

## 3. Composition and Matrix Multiplication

Two transformations can be combined into a single transformation.

If:
- $T_1$ is represented by matrix $A$
- $T_2$ is represented by matrix $B$

Then the combined transformation is:

$$T(v) = B(Av)$$

Which can be written as:

$$T(v) = (BA)v$$

Define:

$$C = BA$$

Then:

$$T(v) = Cv$$

> **Matrix multiplication combines multiple transformations into one single transformation.**

---

## 4. Why Matrix Multiplication Exists

Matrix multiplication exists because it allows us to:
- Combine multiple linear transformations
- Represent them as one transformation

Instead of applying two steps:

$$T_2(T_1(v))$$

We compute a single matrix $C = BA$ and apply $Cv$.

---

## 5. Why Order Matters

Matrix multiplication is **not commutative**:

$$AB \neq BA$$

### Geometric Reason

The order of transformations changes the result.

| Case | Order |
|------|-------|
| Case 1 | Rotate → Shear |
| Case 2 | Shear → Rotate |

These produce different final vectors, therefore $AB \neq BA$.

---

## Important Points

### 1. A Matrix is Defined by Basis Vectors
A matrix is defined by where it sends the basis vectors.

### 2. Columns Represent Transformed Basis
Each column of the matrix shows where a basis vector moves.

### 3. Matrix Multiplication Tracks Transformations
Matrix multiplication calculates where the basis vectors end up after applying multiple transformations.

### 4. Matrix Multiplication = Composition
> The most important idea: **Matrix multiplication represents the composition of linear transformations.**

---

## Key Intuition

When multiplying matrices:
1. The **first transformation** moves the space
2. The **second transformation** moves the already transformed space

Matrix multiplication calculates the **combined effect**.

<hr>

*In this post, we saw that matrix multiplication is not just a rote calculation—it represents the geometric composition of multiple transformations. We also learned why the order of these transformations fundamentally changes the final outcome.*

**Next up:** *Now that we can transform and combine spaces, we need a way to measure how much these transformations stretch or squash our geometry. In [Part 4: The Determinant](./linear_algebra-p4), we will learn how to measure the scaling factor of any transformation.*
