---
title: "Stats - Part 16: Sampling Distribution of Sample Proportion"
date: "2026-05-07"
category: "Statistics"
description: "An intuitive guide to the sampling distribution of a sample proportion, covering expected value, standard error, and normal approximation."
---

When taking polls or conducting surveys, we often calculate a percentage or proportion. But how reliable is that percentage? This brings us to the **Sampling Distribution of the Sample Proportion**. 

Fundamentally, this topic is about answering one key question:
👉 *How does the sample proportion change from sample to sample?*

---

## 1️⃣ What is a Sample Proportion?

Suppose you survey $n$ people, and some number of them satisfy a specific condition (which we will call a "success"). 

Let:
- $X = \text{number of successes}$
- $n = \text{sample size}$

Then the **sample proportion** is calculated as:
$$\hat{p} = \frac{X}{n}$$
*(Pronounced as **"p-hat"**)*

### A Quick Example
Imagine you survey 100 people and find that 60 of them like football.
$$\hat{p} = \frac{60}{100} = 0.6$$

---

## 2️⃣ Why Does it Have a Distribution?

Imagine if you repeat that exact same 100-person survey many times. You likely won't get exactly 60% every single time. Instead, you might see results like:
- Sometimes 58%
- Sometimes 62%
- Sometimes 55%

Because the sample proportion varies randomly from sample to sample, it has its own probability distribution. 

👉 **Those varying values form the sampling distribution of $\hat{p}$.**

---

## 3️⃣ Mean of the Sampling Distribution

If the **true population proportion** is $p$, what is the average of all our sample proportions?

$$E(\hat{p}) = p$$

👉 **Key Idea:** The sample proportion is an **unbiased estimator**. This means that, on average, the sample proportion perfectly targets the true population proportion.

---

## 4️⃣ Variance and Standard Error

How much do these sample proportions vary around the true mean? 

**Variance:**
$$Var(\hat{p}) = \frac{p(1-p)}{n}$$

**Standard Deviation (Standard Error):**
The standard deviation of this sampling distribution is known as the **Standard Error (SE)**. It measures the typical fluctuation of the sample proportion.

$$SE(\hat{p}) = \sqrt{\frac{p(1-p)}{n}}$$

---

## 5️⃣ Important Intuition on Sample Size

Look closely at the formula for Standard Error. Notice that the sample size ($n$) is in the denominator. 

As the sample size $n$ increases:
- The standard error $SE \downarrow$ (decreases)

👉 **What this means:** Sample proportions become much more stable. **Large samples fluctuate less**, making your estimates far more reliable.

---

## 6️⃣ Approximate Normality (🔥 VERY Important)

Even though proportions are based on discrete counts (you can't have half a person), the distribution of $\hat{p}$ becomes a smooth, bell-shaped curve under the right conditions.

This is thanks to the Central Limit Theorem. If both of these conditions are met:
1. $np \geq 10$
2. $n(1-p) \geq 10$

Then the sampling distribution of $\hat{p}$ is **approximately normal**:

$$\hat{p} \approx N\left(p, \frac{p(1-p)}{n}\right)$$

---

## 7️⃣ A Full Example in Action

Let's say the **true proportion** of voters who support a candidate is $p = 0.7$.
You decide to take a sample size of $n = 100$.

**1. The Mean (Expected Value):**
$$E(\hat{p}) = 0.7$$

**2. The Standard Error:**
$$SE(\hat{p}) = \sqrt{\frac{0.7(1 - 0.7)}{100}} = \sqrt{\frac{0.7(0.3)}{100}} = \sqrt{0.0021} \approx 0.0458$$

**What does this mean?**
Across many different surveys of 100 people, the sample proportions will naturally center around **0.7**. Furthermore, a "typical" survey will fluctuate by roughly **0.046** (or 4.6%) away from that true mean.

---

## 8️⃣ Connection to the Binomial Distribution

Why does all this math work? Because counting successes ($X$) in a fixed number of trials ($n$) with a constant probability ($p$) perfectly describes a Binomial distribution.

Since:
$$X \sim \text{Binomial}(n, p)$$
And:
$$\hat{p} = \frac{X}{n}$$

The sample proportion is literally just a **scaled binomial random variable**. 

---

## 9️⃣ Common Applications

This exact statistical concept is the driving force behind many everyday measurements:
- 🗳️ **Election polling** (e.g., "Candidate A has 52% of the vote")
- 👍 **Approval ratings**
- 🩺 **Medical studies** (e.g., "Proportion of patients who recovered")
- 📊 **A/B testing** in tech and marketing
- 📝 **Survey statistics**

---

> 🔥 **Key Intuition Summary**
> - **Population proportion ($p$):** The true, unknown value.
> - **Sample proportion ($\hat{p}$):** Our estimate from a single sample.
> - The **sampling distribution** tells us how $\hat{p}$ behaves across repeated samples.

> 🧠 **Final Takeaway**
> 
> The sampling distribution of the sample proportion simply describes **how the observed proportion changes across repeated random samples.**
