---
title: "Linear Algebra - Part 10: Eigenvectors and Eigenvalues: Finding the Invariant Axes of Transformation"
date: "2026-03-15"
category: "Linear Algebra"
description: "Identifying 'special' vectors that stay on their own span during a transformation, calculating eigenvalues, and the power of diagonalization."
--- 

*In [Part 9](./linear_algebra-p9), we learned how changing our basis can shift our perspective and simplify mathematical operations. Now, we reach the culmination of our journey: finding the most natural basis for a transformation, built from its very own invariant axes.*

<hr>

## 1. What Are Eigenvectors?

When a matrix transforms space, most vectors rotate, stretch, and change direction. But some special vectors **only stretch or shrink** — their direction does not change.

These vectors are called **eigenvectors**.

**Definition:** If

$$Av = \lambda v$$

then:
- $v$ = eigenvector
- $\lambda$ = eigenvalue

---

## 2. Meaning of the Equation

$$Av = \lambda v$$
```
apply transformation A to vector v
result is just a scaled version of v
```

> The vector **stays on the same line**.

**Example:**
```
v → transformation → 3v
```
Direction same, length changed.

---

## 3. Geometric Intuition

Imagine a transformation that stretches space differently in different directions — some directions remain unchanged in orientation.

**Example transformation:**
```
square → stretched rectangle
```

Vectors along the stretching directions stay on the same line. Those are **eigenvectors**.

**Example:** Suppose a transformation stretches:
```
horizontal direction → ×2
vertical direction   → ×0.5
```

Then horizontal and vertical vectors are eigenvectors, with eigenvalues $2$ and $0.5$.

---

## 4. Eigenvalues

Eigenvalues tell **how much** the eigenvector is scaled.

| Eigenvalue | Meaning |
|------------|---------|
| $2$ | Vector doubled |
| $0.5$ | Vector shrinks |
| $-1$ | Direction flips |
| $0$ | Vector collapses to zero |

---

## 5. Example Matrix

$$A = \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}$$
```
x direction → stretched by 2
y direction → unchanged
```

**Eigenvectors:**

$$\begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

**Eigenvalues:** $2$ and $1$

---

## 6. Why Eigenvectors Exist

A matrix transformation usually rotates, stretches, and shears — but there are some directions that **remain aligned**. These are the natural axes of the transformation.

> Eigenvectors **reveal these axes**.

---

## 7. Finding Eigenvalues

Starting from $Av = \lambda v$, rearrange:

$$Av - \lambda v = 0$$

$$(A - \lambda I)v = 0$$

For non-zero solutions:

$$\det(A - \lambda I) = 0$$

> This equation gives the **eigenvalues**.

---

## 8. Connection to Change of Basis

Eigenvectors define a **special basis**. In this basis, the transformation becomes very simple:
```
stretch along each axis
```

Instead of complex transformations, we get **simple scaling**.

> This is called **diagonalization**.

---

## 9. Example of Diagonalization

Matrix $A$ can be written as:

$$A = PDP^{-1}$$

Where:
- $P$ = matrix of eigenvectors
- $D$ = diagonal matrix of eigenvalues

Meaning:
```
change basis → scale → change back
```

---

## 10. Geometric Meaning

| Concept          | Represents                                 |
| ---------------- | ------------------------------------------ |
| **Eigenvectors** | Invariant directions of the transformation |
| **Eigenvalues**  | How much those directions stretch          |

<hr>

*In this final post, we explored eigenvectors and eigenvalues—the inherent geometric properties of a transformation. By using these as our basis, we can decouple complex matrices into simple diagonal scaling operations.*