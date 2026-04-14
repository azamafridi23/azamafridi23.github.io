---
title: "Stats - Part 1: Z-scores"
date: "2026-04-14"
category: "Statistics"
description: "Understanding Z-scores, standard score formulas, how to calculate them, and their importance in machine learning."
---

📺 **Recommended to Watch**
If you want a great visual explanation of Z-scores, check out this short video:
[Watch on YouTube](https://youtu.be/Wp2nVIzBsE8)

---

📊 **Z-Score (Standard Score)**

A Z-score tells us how far a data point is from the mean, measured in number of standard deviations.

👉 It helps us understand whether a value is normal, high, or low compared to the dataset.

## 1️⃣ Formula

$$ Z = \frac{X - \mu}{\sigma} $$

Where:
- $X$ = data value
- $\mu$ (mu) = mean of the dataset
- $\sigma$ (sigma) = standard deviation

## 2️⃣ Simple Example

Suppose exam scores have:
- Mean ($\mu$) = 70
- Standard deviation ($\sigma$) = 10

Student score:
- $X$ = 85

Calculation:

$$ Z = \frac{85 - 70}{10} $$

$$ Z = \frac{15}{10} = 1.5 $$

✅ **Interpretation:**
The score 85 is $1.5$ standard deviations above the mean.

## 3️⃣ Interpreting Z-Scores

| Z-score | Meaning |
|---|---|
| $Z = 0$ | value equals the mean |
| $Z > 0$ | value is above the mean |
| $Z < 0$ | value is below the mean |

**Examples:**
- $Z = 2 \rightarrow$ 2 standard deviations above mean
- $Z = -1 \rightarrow$ 1 standard deviation below mean

## 4️⃣ Example with Dataset

Dataset: `10, 12, 14, 16, 18`

Mean: $\mu = 14$

Standard deviation: $\sigma \approx 2.83$

For $X = 18$:

$$ Z = \frac{18 - 14}{2.83} \approx 1.41 $$

So 18 is $1.41$ standard deviations above the mean.

## 5️⃣ Z-Score and Outliers

In many cases:
- $|Z| > 3 \rightarrow$ considered an outlier

**Example:**
- $Z = 3.5 \rightarrow$ very unusual value

## 6️⃣ Why Z-Scores Are Important

Z-scores are used to:
- 📊 Standardize data in machine learning
- 📊 Compare values from different distributions
- 📊 Detect outliers
- 📊 Work with normal distribution probabilities

## 7️⃣ Example in Machine Learning

Suppose features:

| Height (cm) | Weight (kg) |
|---|---|
| 180 | 75 |
| 160 | 55 |
| 170 | 65 |

To normalize features, we compute Z-score normalization:

$$ X_{scaled} = \frac{X - \mu}{\sigma} $$

This helps models like linear regression, logistic regression, and neural networks perform better.

✅ **Short exam definition:**
A Z-score measures how many standard deviations a data point is away from the mean.

$$ Z = \frac{X - \mu}{\sigma} $$
