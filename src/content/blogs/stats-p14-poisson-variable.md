---
title: "Stats - Part 14: Poisson Distribution"
date: "2026-05-03"
category: "Statistics"
description: "A deep dive into the Poisson Random Variable: modelling the number of events happening in a fixed interval of time or space."
---

📊 **The Poisson Random Variable**

The Poisson Random Variable is one of the most important concepts in statistics for modeling real-world phenomena.

It models:
👉 **The number of events happening in a fixed interval of time or space**, assuming those events occur randomly and independently at a constant average rate.

## 1️⃣ When Do We Use Poisson?

Use the Poisson distribution when:
1. You are counting events in a fixed interval (time, distance, volume).
2. Events happen **independently** of each other.
3. You don't have a fixed number of trials (unlike the Binomial distribution); you only know the **average rate ($\lambda$)**.

### 🌟 Examples in Real Life
- Number of emails received per hour.
- Number of calls arriving at a call center per minute.
- Number of accidents at an intersection per day.
- Number of typos on a single printed page.

---

## 2️⃣ Random Variable Definition

Let:
$X$ = the number of events in an interval.

We write this mathematically as:
$$X \sim \text{Poisson}(\lambda)$$

Where:
**$\lambda$ (lambda)** = the average number of events in that interval.

---

## 3️⃣ The Probability Formula (PMF)

To find the probability of exactly $k$ events occurring:

$$ P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!} $$

**The Intuition Behind the Formula:**
- $\lambda^k \rightarrow$ The "base" probability mass of getting $k$ events.
- $e^{-\lambda} \rightarrow$ A scaling factor that normalizes the probabilities so they all add up to 1.
- $k! \rightarrow$ Corrects for overcounting the different arrangements of those events.

---

## 4️⃣ A Practical Example

Let's say a website gets an average of **3 visits per minute**.
$$ \lambda = 3 $$

What is the probability that the site gets **exactly 2 visits** in a given minute?

Let's plug the values into our formula:
$$ P(X=2) = \frac{e^{-3} \cdot 3^2}{2!} $$
$$ P(X=2) = \frac{e^{-3} \cdot 9}{2} \approx 0.224 $$

There is approximately a **$22.4\%$** chance of getting exactly 2 visits.

---

## 5️⃣ Mean and Variance

The Poisson distribution has a very unique and mathematically elegant property:

**Mean (Expected Value):**
$$ E(X) = \lambda $$

**Variance:**
$$ Var(X) = \lambda $$

👉 **Mean = Variance.** This is a defining characteristic of the Poisson distribution.

> 🔥 **Key Intuition:**
> You are not counting successes out of a fixed number of trials. You are counting events appearing out of thin air in time/space. The *only* parameter you need is the average rate $\lambda$.

---

## 6️⃣ Poisson vs. Binomial (VERY IMPORTANT)

| Feature | Binomial | Poisson |
|---|---|---|
| **What it counts** | Successes in a set number of trials | Events in a continuous interval |
| **Parameter(s)** | $n$ (trials), $p$ (probability) | $\lambda$ (average rate) |
| **Structure** | Fixed number of trials | Infinite possible events (no upper limit) |
| **Use case** | Coin flips, multiple-choice tests | Customer arrivals, web traffic |

---

## 7️⃣ A Deep Connection (Important Insight)

The Poisson distribution is actually the mathematical limit of the Binomial distribution. 

If you take a Binomial scenario where:
- The number of trials approaches infinity ($n \rightarrow \infty$)
- The probability of success becomes extremely small ($p \rightarrow 0$)
- While keeping the average number of successes constant ($np = \lambda$)

Then:
**$\text{Binomial}(n, p) \rightarrow \text{Poisson}(\lambda)$**

👉 This is why the Poisson distribution is commonly used to model **"rare events"**.

---

## 🧠 Quick Intuition Summary for Discrete Variables
- **Binomial** $\rightarrow$ Fixed number of attempts (How many successes?)
- **Geometric** $\rightarrow$ Waiting time (How many attempts until the *first* success?)
- **Poisson** $\rightarrow$ Number of random events in time/space (Given an average rate).
