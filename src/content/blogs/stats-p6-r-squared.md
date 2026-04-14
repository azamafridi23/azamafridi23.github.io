---
title: "Stats - Part 6: R-Squared (Coefficient of Determination)"
date: "2026-04-14"
category: "Statistics"
description: "Understanding R-squared, what it measures, and how to interpret the coefficient of determination in regression models."
---

📺 **Recommended to Watch**
If you want a great visual explanation of R-Squared, check out these short video:
- [What is R-squared? (Opens in new tab)](https://youtu.be/lng4ZgConCM)

---

## 1️⃣ What $R^2$ Actually Measures

$R^2$ (coefficient of determination) measures:
> How much of the variation in $y$ is explained by the regression model using $x$.

or equivalently:
> How much better our regression model predicts $y$ compared to just predicting the mean of $y$.

Both interpretations are mathematically the same.

---

## 2️⃣ Why We Compare Against the Mean

Imagine you must predict $y$ without knowing $x$.
Your best guess would simply be the average of $y$.

**Example dataset:**

| $x$ | $y$ |
|---|---|
| 1 | 4 |
| 2 | 5 |
| 3 | 7 |
| 4 | 6 |
| 5 | 8 |

Mean of $y$:
$$ \bar{y} = 6 $$

So without regression, we predict:
$$ \hat{y} = 6 $$

This creates prediction errors.

---

## 3️⃣ Measuring Total Error (Without Regression)

We measure error using squared residuals.

$$ \text{Residual} = y - \hat{y} $$

| $y$ | prediction ($\hat{y}$) | residual | squared |
|---|---|---|---|
| 4 | 6 | -2 | 4 |
| 5 | 6 | -1 | 1 |
| 7 | 6 | 1 | 1 |
| 6 | 6 | 0 | 0 |
| 8 | 6 | 2 | 4 |

Sum of squared errors:
$$ \text{SST} = 4 + 1 + 1 + 0 + 4 = 10 $$

This is called: **Total Sum of Squares (SST)**.
It represents total variability in $y$.

---

## 4️⃣ Now Fit a Regression Line

Suppose regression gives:
$$ \hat{y} = 0.9x + 3 $$

**Predictions:**

| $x$ | actual $y$ | predicted ($\hat{y}$) | residual | squared |
|---|---|---|---|---|
| 1 | 4 | 3.9 | 0.1 | 0.01 |
| 2 | 5 | 4.8 | 0.2 | 0.04 |
| 3 | 7 | 5.7 | 1.3 | 1.69 |
| 4 | 6 | 6.6 | -0.6 | 0.36 |
| 5 | 8 | 7.5 | 0.5 | 0.25 |

Sum of squared residuals:
$$ \text{SSE} = 2.35 $$

This is called the **Residual Sum of Squares (SSE)**.

---

## 5️⃣ The Three Important Quantities

In regression we divide the variability in $y$ into parts.

**Total variability in $y$**
$$ \text{SST} = \sum (y_i - \bar{y})^2 $$
This measures how much the $y$ values vary around their mean.
It represents the total variation present in the data.

**Unexplained variability (error)**
$$ \text{SSE} = \sum (y_i - \hat{y}_i)^2 $$
This is the variation left after using the regression model.
These are the residuals.

👉 $\text{SSE}$ = variation **NOT** explained by the model

**Explained variability**
$$ \text{SSR} = \sum (\hat{y}_i - \bar{y})^2 $$
This is the variation explained by the regression model.

### The Key Decomposition

The total variation splits into two parts:

$$ \text{SST} = \text{SSR} + \text{SSE} $$

**Meaning:**
> Total variation = Explained variation + Unexplained variation

---

## 6️⃣ Computing $R^2$

Formula:
$$ R^2 = 1 - \frac{\text{SSE}}{\text{SST}} $$

Substitute values:
$$ R^2 = 1 - \frac{2.35}{10} $$
$$ R^2 = 0.765 $$

---

## 7️⃣ Interpretation

$R^2 = 0.765$

**Meaning:**
76.5% of the variability in $y$ is explained by the regression model using $x$.

or equivalently:
The regression model reduces prediction error by 76.5% compared to predicting the mean.

---

## 8️⃣ Why Squaring the Correlation Works

In simple linear regression (one predictor):
$$ R^2 = r^2 $$

Where $r$ = correlation between $x$ and $y$.

**Example:**
$$ r = 0.816 $$
$$ R^2 = (0.816)^2 \approx 0.6659 $$

**Meaning:**
66.59% of the variability in $y$ is explained by $x$.

> **Important:** This equality only holds for simple linear regression.

---

## 9️⃣ Geometric Intuition

Think of total variation in $y$ as a pie.

Total variation in $y$ = explained variation + unexplained variation

Regression explains part of it.

**Example:**
- Total variation = 100%
- Explained by model = 66%
- Unexplained = 34%

So $R^2 = 0.66$.

---

## 🔟 Extreme Cases

**Perfect Model**
If predictions are perfect:
$$ \text{SSE} = 0 $$
$$ R^2 = 1 $$
Meaning 100% of variation is explained.

**No Relationship**
If regression is no better than predicting the mean:
$$ \text{SSE} = \text{SST} $$
$$ R^2 = 0 $$
Meaning the model explains nothing.

---

## 1️⃣1️⃣ Why $R^2$ Is Called Coefficient of Determination

Because it tells how much of the variation in $y$ is determined by $x$.

**Example:**
If $R^2 = 0.66$, then 66% of the changes in $y$ can be explained by $x$.

---

## ✅ Clean Definition You Can Save

$R^2$ (coefficient of determination) measures the proportion of the total variability in the dependent variable that is explained by the regression model.

$$ R^2 = 1 - \frac{\text{Residual Sum of Squares}}{\text{Total Sum of Squares}} $$

**Interpretation:**
- $R^2 = 0 \rightarrow$ model explains none of the variability
- $R^2 = 1 \rightarrow$ model explains all variability

In simple linear regression:
$$ R^2 = r^2 $$
where $r$ is the correlation coefficient.

### ✅ Short Intuition

$R^2$ tells us:
> How much better our regression model predicts $y$ compared to simply predicting the average of $y$.
