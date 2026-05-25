---
title: "Stats - Part 19: Hypothesis Testing & Decision Rules"
date: "2026-05-24"
category: "Statistics"
description: "A complete intuitive guide to hypothesis testing, p-values, significance, and the difference between one-tailed and two-tailed tests."
---

# 🔹 Hypothesis Testing (Complete Intuition + Structure)

Hypothesis testing is a statistical method used to:
> 👉 Make decisions or conclusions about a population based on sample data.

It is one of the core tools in statistics, machine learning, A/B testing, and scientific research.

---

## 1️⃣ WHAT is hypothesis testing?

It is a formal framework to answer questions like:
- Is this new drug effective?
- Is this website redesign better?
- Is this ML model actually improved?
- Is this difference real or just random noise?

---

## 2️⃣ Core Idea

We always start with two competing ideas:

### 🔴 Null Hypothesis ($H_0$)
> *"Nothing special is happening."*

Examples:
- Mean = 50
- No difference between website A and B
- A specific feature has no effect

### 🟢 Alternative Hypothesis ($H_1$)
> *"Something is happening."*

Examples:
- Mean $\neq$ 50
- Website A is better than B
- A specific feature has an effect

---

## 3️⃣ WHY do we need it?

Because data is inherently random. Even if nothing changes in the underlying population:
- Samples will still vary.
- Results will naturally fluctuate.

So we ask:
> *Is the observed result strong enough to reject randomness?*

---

## 4️⃣ WHEN is it used?

- **A/B testing** (tech companies)
- **Medical trials**
- **Quality control**
- **Machine learning evaluation**
- **Survey analysis**
- **Scientific experiments**

---

## 5️⃣ HOW does it work? (Step-by-step)

### Step 1: Define hypotheses
Example:
- $H_0: \mu = 50$
- $H_1: \mu \neq 50$

### Step 2: Collect sample data
Suppose:
- Sample mean = 53
- Sample size ($n$) = 25
- Sample std ($s$) = 10

### Step 3: Compute test statistic
Since the population std is unknown, we use a t-test:
$$t = \frac{\bar{X} - \mu}{\frac{s}{\sqrt{n}}}$$

### Step 4: Compute value
$$t = \frac{53 - 50}{\frac{10}{\sqrt{25}}} = \frac{3}{2} = 1.5$$

### Step 5: Compare with distribution
We now check:
> *How extreme is this value under $H_0$?*

This calculation gives us a **p-value**.

---

## 6️⃣ WHAT is a p-value?

A p-value is:
> The probability of getting results as extreme as the observed ones, assuming $H_0$ is true.

### Interpretation:
- **Small p-value** $\rightarrow$ result is unlikely under $H_0$ (we have evidence for $H_1$).
- **Large p-value** $\rightarrow$ result is consistent with $H_0$.

---

## 7️⃣ Decision Rule & Significance

We choose a significance threshold:
$$\alpha = 0.05$$

Then:
- If $p \le 0.05 \rightarrow$ **Reject $H_0$**
- If $p > 0.05 \rightarrow$ **Fail to reject $H_0$**

### WHAT is significance?
If we reject $H_0$, the result is called **"statistically significant"**.

Meaning:
> *It is unlikely to be due to random chance alone.*

---

## 8️⃣ Relationship with Confidence Intervals

Hypothesis testing and confidence intervals are deeply connected:
- If a hypothesized value is **outside** a 95% CI $\rightarrow$ reject at the 5% level.
- If a hypothesized value is **inside** the CI $\rightarrow$ do not reject.

---

## 9️⃣ Types of Tests

### (a) Z-test
- Known variance
- Large samples

### (b) T-test
- Unknown variance
- Small samples

### (c) Proportion test
- Binary outcomes (yes/no)

---

## 🔟 Errors in Hypothesis Testing

### Type I Error (False Positive)
- Reject $H_0$ when it is actually true.

### Type II Error (False Negative)
- Fail to reject $H_0$ when it is actually false.

---

## 1️⃣1️⃣ Hypothesis Testing in Machine Learning

1. **A/B testing**: Compare model versions or UI changes.
2. **Feature importance**: Test if a coefficient is significant.
3. **Model evaluation**: Compare accuracy improvements.
4. **Regression**: t-tests on coefficients.

**Example in Linear Regression:**
Suppose a coefficient is 2.5 with a standard error of 0.5.
$$t = \frac{2.5}{0.5} = 5$$

A large t-value like this provides strong evidence that the feature actually matters!

---

# 🔹 One-Tailed vs. Two-Tailed Tests

The decision rule changes because the rejection region changes, depending on whether the test is **one-tailed** or **two-tailed**.

## 1️⃣ What changes between the two tests?

We always start with $H_0$ and $H_1$. But the difference lies in the Alternative Hypothesis:

| Type | Alternative Hypothesis Meaning |
| :--- | :--- |
| **Two-tailed** | "different" ($\neq$) |
| **One-tailed** | "greater than" ($>$) or "less than" ($<$) |

---

## 2️⃣ Two-Tailed Test (Double Tail)

### Hypotheses:
- $H_0: \mu = \mu_0$
- $H_1: \mu \neq \mu_0$

👉 We are checking **both directions**: is it too large OR too small?

### 🔥 Decision Rule (Two-tailed)
We split the significance level:
$$\alpha = 0.05 \Rightarrow 0.025 \text{ in each tail}$$

So rejection regions are:
- Left tail (2.5%)
- Right tail (2.5%)

**Using a z-score (for 95%):** Reject $H_0$ if $|z| > 1.96$

**Intuition:** *"Is the result unusually far in either direction?"*

---

## 3️⃣ One-Tailed Test (Single Tail)

There are two types:

### (a) Right-Tailed Test
- $H_0: \mu \le \mu_0$
- $H_1: \mu > \mu_0$

We only care if the result is **too large**.
- **Decision rule (95%):** Reject $H_0$ if $z > 1.645$

### (b) Left-Tailed Test
- $H_0: \mu \ge \mu_0$
- $H_1: \mu < \mu_0$

We only care if the result is **too small**.
- **Decision rule (95%):** Reject $H_0$ if $z < -1.645$

---

## 4️⃣ Key Differences & Visual Intuition

| Feature | Two-tailed | One-tailed |
| :--- | :--- | :--- |
| **Direction tested** | Both sides | One side |
| **Alpha split** | Yes ($\alpha/2$ each tail) | No |
| **Critical value (95%)** | $\pm 1.96$ | $1.645$ |
| **Sensitivity** | Stricter | More powerful in one direction |

### Visual Intuition

**Two-tailed:** Reject if too far left OR right.
```
|----2.5%----|------95%------|----2.5%----|
   reject          accept         reject
```

**One-tailed (Right):** Only one rejection side.
```
|-----------95%-----------|----5% reject----|
```

---

## 5️⃣ Example Comparison

Suppose $z = 1.8$.

- **Two-tailed test (Critical = 1.96):** $1.8 < 1.96 \rightarrow$ ❌ Fail to reject
- **One-tailed test (Critical = 1.645):** $1.8 > 1.645 \rightarrow$ ✅ Reject

👉 **Same data, different conclusion.**

---

## 6️⃣ When to use which?

### Two-tailed (Default Choice)
Use when:
- You care about both directions.
- There is no prior direction expectation.
*(e.g., "Did model accuracy change?")*

### One-tailed
Use when:
- The direction is pre-defined.
*(e.g., "Did the new model improve accuracy?" - only improvement matters)*

---

> 🧠 **Final Takeaway**
> 
> Hypothesis testing is a statistical decision-making framework that uses probability to determine whether observed data provides strong enough evidence against a default assumption.
> - **Two-tailed tests** split $\alpha$ into two rejection regions (checking both directions).
> - **One-tailed tests** put all $\alpha$ in one tail (checking a single direction), making them more sensitive but strictly directional.
