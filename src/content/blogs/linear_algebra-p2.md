---
title: "Linear Algebra - Part 2: Matrices as Linear Transformations"
date: "2026-03-15"
category: "Linear Algebra"
description: "Thinking of matrices as functions rather than grids, the rules of linear transformations, and how tracking basis vectors reveals what a matrix actually does."
--- 

## 1. What is a Matrix? (Matrices as Transformations of Spaces)

> **Key Idea:** In linear algebra, a matrix represents a **transformation of space**. Instead of thinking of matrices as numbers in a grid, think of them as **functions that transform vectors**.

### Transformation

A transformation is a function that:
- Takes a vector as input
- Produces another vector as output

$$T(\vec{v}) = \vec{w}$$

---

## 2.  Linear Transformation

A linear transformation satisfies two rules:

**Rule 1 — Additivity**

$$T(v + w) = T(v) + T(w)$$

**Rule 2 — Scaling**

$$T(cv) = cT(v)$$

### Geometric Meaning

A linear transformation:
- Preserves straight lines
- Preserves the origin
- Preserves vector addition
- Preserves scalar multiplication

Examples of linear transformations:
- Scaling
- Rotation
- Shearing
- Reflection

---

## 3. Matrix Representation of Linear Transformations

Every linear transformation can be represented using a matrix.

> **Important Note:** In most linear algebra courses, when a matrix represents a linear transformation, we interpret it by its columns.

### Example Matrix

$$A = \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}$$

Applying this transformation:

$$A \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2x \\ y \end{bmatrix}$$

This transformation:
- Stretches the x-axis by 2
- Leaves the y-axis unchanged

---

## 4. Transformation of Basis Vectors

> **Key Idea:** To understand what a matrix does, look at how it transforms the basis vectors.

### Standard Basis

$$\hat{i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad \hat{j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

### Example Matrix

$$A = \begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix}$$

**Transform $\hat{i}$:**

$$A \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \end{bmatrix}$$

**Transform $\hat{j}$:**

$$A \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$

> **Key Insight:** The columns of a matrix show where the basis vectors move after transformation.

$$A = \begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix} \quad \Rightarrow \quad \hat{i} \to \begin{bmatrix} 2 \\ 0 \end{bmatrix}, \quad \hat{j} \to \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$

---

## 5. Matrix–Vector Multiplication

Let:

$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}, \quad v = \begin{bmatrix} x \\ y \end{bmatrix}$$

Then:

$$Av = \begin{bmatrix} ax + by \\ cx + dy \end{bmatrix}$$

### Geometric Interpretation

Matrix-vector multiplication can also be written as:

$$Av = x \begin{bmatrix} a \\ c \end{bmatrix} + y \begin{bmatrix} b \\ d \end{bmatrix}$$

This means the result is a **linear combination of the matrix columns**. So:
- The matrix columns represent the **transformed basis vectors**
- The vector coordinates determine **how much of each column to combine**

---




## Core Intuition

> Matrix multiplication is essentially:
> 1. Take the basis vectors
> 2. See where the matrix moves them
> 3. Rebuild the vector using those new directions

