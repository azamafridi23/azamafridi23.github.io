---
title: "Stats - Part 3: Normal Distribution"
date: "2026-04-14"
category: "Statistics"
description: "An in-depth look at the Normal Distribution, its properties, the Empirical Rule, and how to use Z-tables to calculate probabilities."
---

📺 **Recommended to Watch**
If you want a great visual explanation of Normal Distribution, check out these short video:
- [Normal distribution problems: Empirical rule](https://youtu.be/OhRr26AfFBU)
- [Standard normal distribution and the empirical rule](https://youtu.be/2fzYE-Emar0)
- [More empirical rule and z-score practice](https://youtu.be/itQEwESWDKg)

---

**Normal Distribution (Gaussian Distribution)**

The Normal Distribution is one of the most important probability distributions in statistics. Many natural phenomena (heights, exam scores, measurement errors) follow this pattern.

It is a bell-shaped, symmetric distribution centered around the mean.

```text
            *
          *   *
        *       *
      *           *
----*-----*-----*-----*---->
    μ-2σ  μ-σ   μ   μ+σ  μ+2σ
```

Most values cluster around the mean, and fewer values occur as we move away from it.

## 1️⃣ Properties of the Normal Distribution

### 1. Symmetric
The distribution is symmetric around the mean.
> Left side = Right side

### 2. Mean = Median = Mode
All three measures of central tendency are equal. They lie exactly at the center of the distribution.

### 3. Bell Shape
Values near the mean occur more frequently than values far from it.

### 4. Defined by Two Parameters
A normal distribution is completely defined by:
- **$\mu$ (mean)** $\rightarrow$ center of distribution
- **$\sigma$ (standard deviation)** $\rightarrow$ spread of data

### 5. Total Probability = 1
The entire area under the curve equals 1 (or 100%).

---

## 2️⃣ When and Why We Use Normal Distribution

We use normal distribution when:
- ✔ Data is continuous
- ✔ Data is symmetrical around the mean
- ✔ Many values are close to the mean
- ✔ Fewer values appear at extremes

**Examples:**

| Example | Why Normal |
|---|---|
| Human height | Most people near average |
| IQ scores | Centered around mean |
| Measurement errors | Random noise |
| Exam scores | Often roughly symmetric |

---

## 3️⃣ Standard Normal Distribution

The Standard Normal Distribution is a special normal distribution where:
- **Mean ($\mu$) = 0**
- **Standard deviation ($\sigma$) = 1**

Instead of working with different means and std deviations, we standardize values using the Z-score:

$$ Z = \frac{X - \mu}{\sigma} $$

This converts any normal distribution into the standard normal distribution.

---

## 4️⃣ Empirical Rule (68–95–99.7 Rule)

For normal distributions, data falls within standard deviations like this:

| Range | Percentage of Data |
|---|---|
| $\mu \pm 1\sigma$ | 68% |
| $\mu \pm 2\sigma$ | 95% |
| $\mu \pm 3\sigma$ | 99.7% |

**Visualization:**

```text
        34%     34%
     |------|------|
      μ-1σ  μ    μ+1σ

   13.5%           13.5%
 |------|         |------|
 μ-2σ  μ-1σ     μ+1σ   μ+2σ

 2.35%               2.35%
|----|               |----|
μ-3σ μ-2σ         μ+2σ μ+3σ
```

---

## 5️⃣ Z-Table

The Z-table shows the probability (area under the curve) for a given Z-score in the standard normal distribution.

It tells us: $P(Z \le \text{value})$

**Example:**

| Z-score | Probability |
|---|---|
| 0 | 0.5 |
| 1 | 0.8413 |
| 2 | 0.9772 |

**Meaning:**
$P(Z \le 1) = 0.8413$

So 84.13% of values lie below $Z = 1$.

---

## 6️⃣ Connection Between Empirical Rule and Z-Table

The empirical rule corresponds to specific Z-scores.

| Z | Area |
|---|---|
| $\pm 1$ | 68% |
| $\pm 2$ | 95% |
| $\pm 3$ | 99.7% |

These percentages actually come from the Z-table probabilities.

**Example:**

From Z-table:
- $P(Z \le 1) = 0.8413$
- $P(Z \le -1) = 0.1587$

So between them:

$$ 0.8413 - 0.1587 \approx 0.6826 \approx 68\% $$

Thus:
👉 Empirical rule is a simplified approximation of Z-table probabilities.

---

## 7️⃣ Example Problem Using Empirical Rule

**Problem**
Exam scores follow a normal distribution.
- Mean = 70
- Standard deviation = 10

What percentage of students scored between 60 and 80?

**Step 1**
Convert to standard deviation range.
- $60 = \mu - 1\sigma$
- $80 = \mu + 1\sigma$

**Step 2**
From empirical rule: $\mu \pm 1\sigma = 68\%$

✅ **Answer**
68% of students scored between 60 and 80.
No Z-table needed because $\pm 1\sigma$ is part of the empirical rule.

---

## 8️⃣ Example Problem Using Z-Table

**Problem**
Exam scores follow:
- Mean = 70
- Standard deviation = 10

What percentage of students scored below 85?

**Step 1: Compute Z-score**
$$ Z = \frac{X - \mu}{\sigma} $$

$$ Z = \frac{85 - 70}{10} $$

$$ Z = 1.5 $$

**Step 2: Is it part of the empirical rule?**
This value $1.5\sigma$ is not part of the empirical rule.
Empirical rule only covers: $\pm 1\sigma, \pm 2\sigma, \pm 3\sigma$
So we must use the Z-table.

**Step 3: Look up Z-table**
For $Z = 1.5$, Z-table gives:
$P(Z \le 1.5) = 0.9332$

✅ **Answer**
93.32% of students scored below 85.

---

## 9️⃣ Why Normal Distribution Is Extremely Important

Normal distribution is used in:
- 📊 statistics
- 📊 machine learning
- 📊 hypothesis testing
- 📊 quality control
- 📊 probability theory

It also appears because of the Central Limit Theorem, which states that averages of many random variables tend to follow a normal distribution.

✅ **Short summary**

Normal distribution is a bell-shaped probability distribution defined by mean and standard deviation. The empirical rule (68–95–99.7) approximates probabilities around the mean, while the Z-table provides exact probabilities using standardized Z-scores.
