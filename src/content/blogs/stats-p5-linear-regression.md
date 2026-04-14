---
title: "Stats - Part 5: Linear Regression"
date: "2026-04-14"
category: "Statistics"
description: "An introduction to Linear Regression, how to model relationships between variables, and understanding residuals."
---

**Linear Regression**

Linear Regression is a statistical method used to model the relationship between a dependent variable and one or more independent variables.

The goal is to predict a continuous value by fitting a straight line through the data.

## Simple Linear Regression Equation

$$ y = \beta_0 + \beta_1 x + \epsilon $$

Where:
- $y \rightarrow$ dependent variable (what we predict)
- $x \rightarrow$ independent variable (input feature)
- $\beta_0 \rightarrow$ intercept (value of $y$ when $x = 0$)
- $\beta_1 \rightarrow$ slope (how much $y$ changes when $x$ increases by 1)
- $\epsilon \rightarrow$ error term

---

## 🎯 Intuition

Imagine you want to predict exam score based on hours studied.

| Hours Studied | Score |
|---|---|
| 1 | 50 |
| 2 | 55 |
| 3 | 65 |
| 4 | 70 |
| 5 | 80 |

Linear regression finds the best fitting line through these points.

```text
Score
  |
80|        *
70|      *
60|    *
50|  *
  |_________________________
     1  2  3  4  5  Hours
```

**Example fitted line:**

$$ \text{Score} = 40 + 8 \times \text{Hours} $$

So if someone studies 6 hours:

$$ \text{Score} = 40 + 8(6) = 88 $$

---

## 📉 Residuals

A residual is the difference between the actual value and the predicted value from the regression line.

$$ \text{Residual} = \text{Actual} - \text{Predicted} $$

### Example

Suppose regression predicts:
- **Predicted score** = 70

But actual score is:
- **Actual score** = 65

Residual:

$$ \text{Residual} = 65 - 70 = -5 $$

So the model overestimated by 5 points.

### Visual Intuition

Residuals are the vertical distances between data points and the regression line.

```text
      * (actual data point)
      |\
      | \  ← residual
      |  \
------|---\--------- (regression line)
```

If residuals are small $\rightarrow$ model fits well.
