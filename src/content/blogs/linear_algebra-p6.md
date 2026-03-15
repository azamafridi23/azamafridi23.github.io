---
title: "Linear Algebra - Part 6: Nonsquare Matrices"
date: "2026-03-15"
category: "Linear Algebra"
description: "Transformations between different dimensions (2D to 3D or 3D to 2D), and how nonsquare matrices map information across vector spaces."
--- 

## 1. What is a Nonsquare Matrix?

A **nonsquare matrix** is a matrix whose number of rows and columns are different.

**Example:**

$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{bmatrix}$$

Size: $3 \times 2$, meaning:
- 3 rows
- 2 columns

---

## 2. What Does Matrix Size Mean?

A matrix of size $m \times n$ represents a transformation:

$$\mathbb{R}^n \rightarrow \mathbb{R}^m$$

- Input vectors have $n$ dimensions
- Output vectors have $m$ dimensions

---

## 3. Example: 3×2 Matrix

$$A = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix}, \quad x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$$

$$Ax = \begin{bmatrix} x_1 \\ x_2 \\ x_1 + x_2 \end{bmatrix}$$
```
2D vector → 3D vector
```

> The transformation takes a plane and **embeds it into 3D space**.

---

## 4. Understanding with Basis Vectors

Matrix columns show where basis vectors go.

$$e_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad e_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

$$A = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix}$$
```
e1 → (1,0,1)
e2 → (0,1,1)
```

All outputs are linear combinations of these columns.

> The transformation creates a **plane inside 3D space**.

---

## 5. Two Possible Types of Dimension Changes

**1. Increase dimension** — e.g. $3 \times 2$:
```
2D → 3D
```
Embeds space into a higher dimension.

**2. Reduce dimension** — e.g. $2 \times 3$:
```
3D → 2D
```
Projects space onto a lower dimension.

---

## 6. Example of Dimension Reduction

$$A = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}, \quad x = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$$

$$Ax = \begin{bmatrix} x \\ y \end{bmatrix}$$

This drops the $z$ dimension:
```
3D → 2D projection
```

---

## 7. Geometric Interpretation

Nonsquare matrices describe transformations that **change the dimensionality of space**:
```
line      → plane
plane     → 3D space
3D space  → plane
```

---

## 8. Relation to Column Space

For an $m \times n$ matrix:
- Columns live in $\mathbb{R}^m$
- Column space is inside $\mathbb{R}^m$

**Example:** $3 \times 2$ matrix:
```
columns → vectors in 3D
```

> The transformation produces vectors only in the **plane spanned by those columns**.

---

## 9. Relation to Null Space

If dimension reduces:
```
3D → 2D
```

Some directions collapse. Those directions form the **null space** — vectors that become zero.

---

## 10. Why Square Matrices Were Special

Square matrices $n \times n$ map:
```
nD → nD
```

So they can rotate, stretch, and shear **without changing dimension**.

> Nonsquare matrices **change the dimensionality** of space.


