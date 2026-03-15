---
title: "Linear Algebra - Part 1: Vectors, Span, and the Building Blocks of Space"
date: "2026-03-15"
category: "Linear Algebra"
description: "The distinction between points and vectors, standard basis vectors, linear combinations, and the concept of span and basis."
--- 

## 1. What is a Vector?

In Linear Algebra, a **vector represents a displacement (direction + magnitude)**.

**Example vector:** $$\vec{v} = \begin{bmatrix} 3 \\ 2 \end{bmatrix}$$This means: 
- Move 3 units in x-axis
- Move 2 units in y-axis
So a vector tells you **how to move**, not where something is. 
 
 > Think of it like an arrow ➡️

-----

## 2. What is a Point?

A point represents a **location** in space.

**Example in 2D:**

$$P = (3, 2)$$

This simply means:
- Move 3 units along the x-axis
- Move 2 units along the y-axis

and you arrive at that location.

> A point is just a **position**.
> Think of it like a pin on a map 📍
 
------

## 3. Why Linear Algebra Treats Them Similarly

In linear algebra we often treat a **point as a vector from the origin**.

**Example:**

Point $(3, 2)$ can be interpreted as the vector:

$$\vec{v} = \begin{bmatrix} 3 \\ 2 \end{bmatrix}$$

Meaning:
```
Origin -----> (3,2)
```

So the coordinates are identical, but the interpretation is different:

| Object | Meaning |
|--------|---------|
| Point | Location |
| Vector | Direction + magnitude |

----

## 4. Standard Basis Vectors

The standard basis vectors in 2D are:

$$\hat{i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad \hat{j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

These vectors define the coordinate system axes.

Any vector $v$ in 2D can be written as a combination of them:

$$v = a\hat{i} + b\hat{j} = \begin{bmatrix} a \\ b \end{bmatrix}$$

This means:
- $a$ units in the x-direction
- $b$ units in the y-direction

----

## 5. Linear Combination

A **linear combination** occurs when we scale vectors and add them together.

General form:

$$a v_1 + b v_2$$

where:
- $a, b$ are **scalars**
- $v_1, v_2$ are **vectors**

> Interpretation: All locations reachable using those vectors.

Example:

$$a \begin{bmatrix} 1 \\ 0 \end{bmatrix} + b \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} a \\ b \end{bmatrix}$$

----

## 6. Span

The **span** of a set of vectors is the set of all possible linear combinations of those vectors.

Example vectors:

$$v_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad v_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

Their span is $a v_1 + b v_2$.

Since any 2D vector can be written this way, these vectors **span the entire 2D plane**.

---

## 7. Basis

A **basis** is a set of vectors that:
- Span the vector space
- Are linearly independent

> A basis is the **minimal set** of vectors needed to describe every vector in a space.
> Different bases can represent the same vector using different coordinates.

### Standard Basis (2D)

$$\hat{i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad \hat{j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

These form the standard basis for 2D space.

### Another Valid Basis

$$v_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \quad v_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$$

These vectors are linearly independent and can span the entire 2D space — therefore they also form a valid basis.

----

## 8. Coordinates Depend on the Basis

Example vector: $(3, 2)$

**Using standard basis:**

$$(3,2) = 3\hat{i} + 2\hat{j}$$

**Using another basis** $v_1 = (1,1),\ v_2 = (1,-1)$:

$$(3,2) = 2(1,1) + 1(1,-1)$$

> **Key idea:** The vector itself stays the same, but its coordinates change depending on the basis.

---

## Key Intuition

| Concept                | Intuition                                                     |
| ---------------------- | ------------------------------------------------------------- |
| **Vector**             | An arrow in space                                             |
| **Linear Combination** | Scaling vectors and adding them together                      |
| **Span**               | All positions you can reach using those vectors               |
| **Basis**              | The smallest set of vectors that can generate the whole space |

