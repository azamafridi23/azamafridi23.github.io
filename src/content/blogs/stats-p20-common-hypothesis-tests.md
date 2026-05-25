---
title: "Stats - Part 20: The 3 Most Important Hypothesis Tests"
date: "2026-05-24"
category: "Statistics"
description: "A clear and comparative guide to the three most important hypothesis tests: the t-test, Chi-Square Test, and ANOVA."
---

Here are the **three most important hypothesis tests in statistics**, explained clearly and comparatively:

---

## 1️⃣ t-test (Means Comparison)

### 👉 What is it used for?
A **t-test** is used to compare **means** when:
- Sample size is small or moderate.
- Population variance is unknown.

### 🔥 Types of t-tests

**1. One-sample t-test**
> Compare sample mean vs known value

Example: Is average height = 170 cm?
$$H_0: \mu = 170$$

**2. Independent two-sample t-test**
> Compare means of two groups

Example: Do males and females have different average heights?
$$H_0: \mu_1 = \mu_2$$

**3. Paired t-test**
> Same group measured twice

Example: Before vs. after treatment

### 🔥 Test Statistic
$$t = \frac{\bar{X} - \mu}{\frac{s}{\sqrt{n}}}$$

### 🔹 Intuition
> *"How far is the sample mean from the expected mean in terms of noise?"*

---

## 2️⃣ Chi-Square Test (Categorical Data)

### 👉 What is it used for?
Used when data is **categorical** (not numerical means).
It answers questions like:
- Are two variables independent?
- Do observed frequencies match expected ones?

### 🔥 Types of Chi-Square Tests

**1. Test of Independence**
Example: Is gender related to voting preference?

**2. Goodness-of-Fit Test**
Example: Does a dice behave fairly?

### 🔥 Test Statistic
$$\chi^2 = \sum \frac{(O - E)^2}{E}$$
Where:
- $O$ = observed frequency
- $E$ = expected frequency

### 🔹 Intuition
> *"How different are observed counts from what we expect?"*

### 🔥 Example
Dice rolls:

| Outcome | Observed | Expected |
| :--- | :--- | :--- |
| 1 | 10 | 8.3 |
| 2 | 9 | 8.3 |
| ... | ... | ... |

If differences are large $\rightarrow$ dice may be unfair.

---

## 3️⃣ ANOVA (Analysis of Variance)

### 👉 What is it used for?
ANOVA compares **3 or more group means**.
Instead of doing many individual t-tests, ANOVA tests all groups together.

### 🔥 Example
Do different teaching methods affect exam scores?
Groups: Method A, Method B, Method C

### 🔥 Hypotheses
$$H_0: \mu_A = \mu_B = \mu_C$$
$$H_1: \text{at least one mean is different}$$

### 🔥 Test Idea
ANOVA compares:
- Variation **between** groups
- Variation **within** groups

### 🔥 Test Statistic (F-statistic)
$$F = \frac{\text{variance between groups}}{\text{variance within groups}}$$

### 🔹 Intuition
> *"Are group differences bigger than random variation inside groups?"*

---

## 🔥 Comparison Summary

| Test | Data type | Purpose | Example |
| :--- | :--- | :--- | :--- |
| **t-test** | numerical | compare 2 means | A vs B |
| **chi-square** | categorical | check association | gender vs vote |
| **ANOVA** | numerical | compare 3+ means | A vs B vs C |

---

## 🔥 Key Relationships

- ANOVA generalizes the t-test (for >2 groups).
- The t-test is a special case of ANOVA (when there are exactly 2 groups).
- Chi-square works on **counts**, not means.

---

## 🔹 When to use what?

- **Use a t-test when:** comparing 2 averages.
- **Use chi-square when:** working with categories (yes/no, male/female).
- **Use ANOVA when:** comparing 3 or more group means.

---

> 🧠 **Final Intuition**
> - **t-test** $\rightarrow$ difference between 2 means
> - **chi-square** $\rightarrow$ difference in observed vs expected counts
> - **ANOVA** $\rightarrow$ difference between multiple means

*(Fun fact: All three of these tests are unified under the "General Linear Model", which forms a powerful connection to Machine Learning concepts!)*
