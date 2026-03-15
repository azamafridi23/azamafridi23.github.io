---
title: "Linear Algebra - Part 9: Change of Basis: Viewing the Same World Through Different Lenses"
date: "2026-03-15"
category: "Linear Algebra"
description: "Expressing the same vector in different coordinate systems, the change of basis matrix, and how to transform matrices across different bases."
--- 

## 1. What is a Basis?

A **basis** is a set of vectors that define a coordinate system.

Standard basis vectors in 2D:

$$e_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad e_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

Any vector can be written as:

$$v = \begin{bmatrix} x \\ y \end{bmatrix} = xe_1 + ye_2$$

> The coordinates $(x, y)$ mean: **how much $e_1$ and $e_2$ we need**.

---

## 2. Key Idea of Change of Basis

A vector does not change, but the **numbers used to describe it** change.

**Example:** Measuring a location using north-east coordinates vs. rotated axes — the point stays the same, but the coordinates differ.

> Change of basis means: **expressing the same vector using different basis vectors**.

---

## 3. Example

Suppose our new basis is:

$$b_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \quad b_2 = \begin{bmatrix} -1 \\ 1 \end{bmatrix}$$

These are not aligned with the x and y axes. A vector might now be written as:

$$v = 2b_1 + 1b_2$$

Those numbers are **coordinates in the new basis**.

---

## 4. Change of Basis Matrix

We build a matrix whose columns are the new basis vectors:

$$P = \begin{bmatrix} | & | \\ b_1 & b_2 \\ | & | \end{bmatrix}$$

**Example:**

$$P = \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}$$

This matrix converts **new-basis coordinates → standard coordinates**.

**Conversion:** If $[v]_B$ is the vector in the new basis, then:

$$v = P[v]_B$$
```
basis coordinates → actual vector
```

---

## 5. Reverse Conversion

To go the other way:

$$[v]_B = P^{-1}v$$
```
standard coordinates → new basis coordinates
```

> The **inverse matrix** changes the coordinate system.

---

## 6. Geometric Intuition

Instead of moving the vector, we **move the coordinate grid**.

| Viewpoint | Description |
|-----------|-------------|
| Standard basis | Grid aligned with x and y axes |
| New basis | Grid tilted or stretched |

> The vector stays **fixed in space**, but its coordinates relative to the grid change.

---

## 7. Change of Basis for Transformations

Suppose we have a transformation matrix $A$ described in the standard basis, but we want to express it in another basis.

**Formula:**

$$A' = P^{-1}AP$$

Where:
- $P$ = matrix of new basis vectors
- $A'$ = transformation expressed in the new basis

**Steps:**
1. Convert vector into standard coordinates
2. Apply transformation
3. Convert back into new basis

---

## 8. Why This Matters

Different bases can make transformations much easier to understand.

> A complicated transformation might become **simple scaling** in another basis.

This idea leads to:
```
eigenvectors
diagonalization
```

---

## 9. Example (Simple Rotation)

A rotation matrix in the standard basis can look complicated.

But in a basis **aligned with its eigenvectors**, it becomes simple scaling.

> This is why **change of basis is powerful**.


----

