---
title: "Linear Algebra - Part 5: Inverses, Column Space, and Null Space"
date: "2026-03-15"
category: "Linear Algebra"
description: "Undoing transformations with inverse matrices, the 'reach' of a matrix (column space), and the vectors that disappear into the origin (null space)."
--- 

## 1. What are Inverse Matrices?

### Meaning

An inverse matrix **reverses a transformation**.

If matrix $A$ transforms vectors:

$$v \rightarrow Av$$

Then the inverse matrix $A^{-1}$ does the opposite:

$$A^{-1}(Av) = v$$

> It **undoes** the transformation.

### Intuition
```
vector → rotate → new vector
```

Applying the inverse:
```
rotated vector → rotate back → original vector
```

### Mathematical Definition

$$AA^{-1} = I$$

where $I$ is the **identity matrix**:

$$I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

> The identity matrix means no transformation.

### When Does an Inverse Exist?

A matrix has an inverse **only if**:

$$\det(A) \neq 0$$

If $\det(A) = 0$, space collapses:
```
square → line
```

Once dimensions collapse, the transformation **cannot be undone**.

### Example

$$A = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}$$

Transformation:
```
stretch x by 2
stretch y by 3
```

Inverse:

$$A^{-1} = \begin{bmatrix} 1/2 & 0 \\ 0 & 1/3 \end{bmatrix}$$

Which shrinks space back.

---

## 2. Column Space

### Meaning

The **column space** of a matrix is the set of all possible outputs of the transformation.

If $y = Ax$, then the column space is all possible $y$ vectors.

### Intuition

Matrix columns show where basis vectors move.

$$A = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$$

Columns:

$$c_1 = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \quad c_2 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$

All outputs of the transformation are linear combinations of these columns:

$$Ax = x_1 c_1 + x_2 c_2$$

> The column space is the **span of the columns**.

### Geometric Interpretation

| Case | Columns | Column Space |
|------|---------|--------------|
| Case 1 | Two independent columns | 2D plane |
| Case 2 | Columns on the same line | Line |
| Case 3 | Zero matrix | Single point (origin) |

---

## 3. Null Space

### Meaning

The **null space** is the set of vectors that become zero after transformation:

$$Ax = 0$$

> All inputs that **collapse to zero**.

### Intuition

Imagine a transformation that squashes space into a line — some vectors get completely flattened:
```
vector → transformation → (0,0)
```

All such vectors form the null space.

### Example

$$A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}$$

Columns are multiples of each other, so the plane collapses into a line.

The vector:

$$x = \begin{bmatrix} 2 \\ -1 \end{bmatrix}$$

produces:

$$Ax = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

This vector lies in the null space.

---

## 4. Relationship Between Column Space and Null Space

These describe two different perspectives of a transformation:

| Concept | Description |
|---------|-------------|
| **Column space** | Where vectors go |
| **Null space** | Which vectors collapse to zero |

**Example transformation** — plane → line:
- Column space = the line
- Null space = the direction that got flattened

---

## 5. Visual Summary
```
Input space → Transformation → Output space
```

| Concept            | Role                                     | Description               |
| ------------------ | ---------------------------------------- | ------------------------- |
| **Column space**   | All possible outputs                     | Where vectors can land    |
| **Null space**     | Inputs that become zero                  | Which vectors disappear   |
| **Inverse matrix** | Transformation that reverses the process | Undoes the transformation |

----
