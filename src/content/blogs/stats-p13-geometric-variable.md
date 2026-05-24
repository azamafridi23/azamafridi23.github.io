---
title: "Stats - Part 13: Geometric Distribution"
date: "2026-05-03"
category: "Statistics"
description: "A clear guide to the Geometric Distribution, exploring how long you have to wait for the first success, and how it differs from the Binomial distribution."
---

📊 **The Geometric Variable**

In the previous post, we looked at the Binomial distribution, which counts how many successes occur in a fixed number of trials. Now, we shift our focus to a different question: **"How long do I have to wait until my *first* success?"**

This is exactly what the **Geometric Random Variable** models.

## 1️⃣ What is a Geometric Random Variable?

The setup for a Geometric variable is very similar to a Binomial one:
- Each trial has two outcomes: **Success** (with probability $p$) and **Failure** (with probability $1-p$).
- All trials are **independent**.

Let $X$ = the trial number where the *first* success occurs.

Because you could succeed on the 1st trial, the 2nd, the 3rd, or theoretically keep failing forever, the possible values for $X$ are:
$$ X \in \{1, 2, 3, \dots\} $$

---

## 2️⃣ The Probability Formula

What is the probability that your first success happens on exactly the $k$-th trial?

$$ P(X=k) = (1-p)^{k-1} p $$

**The Intuition:**
To get your first success exactly on trial $k$, two things must happen in order:
1. The first $k-1$ trials must **all be failures** $\rightarrow (1-p)^{k-1}$
2. The $k$-th trial must be a **success** $\rightarrow p$

👉 You simply multiply them together because the trials are independent!

---

## 3️⃣ A Simple Example

Imagine flipping a fair coin ($p = 0.5$). 
What is the probability that the first "Heads" comes up on exactly the 3rd toss?

This means you need the sequence: **Tails, Tails, Heads**.

Using the formula:
$$ P(X=3) = (0.5)^2 \times 0.5 $$
$$ P(X=3) = 0.25 \times 0.5 = 0.125 $$
(A **$12.5\%$** chance).

---

## 4️⃣ The "Memoryless" Property (Very Important)

The Geometric distribution has a unique and fascinating mathematical property called being **memoryless**:

$$ P(X > s+t \mid X > s) = P(X > t) $$

👉 **What this means in plain English:** 
The past failures don't matter. The process "resets" after every failure. If you've flipped a coin 10 times and gotten all tails, the probability of getting a heads on the 11th flip is exactly the same as getting a heads on the 1st flip. The coin has no memory!

---

## 5️⃣ Expected Value

On average, how many trials should you expect to wait before getting a success?

$$ E(X) = \frac{1}{p} $$

👉 **Intuition:** If the probability of success $p$ is very low, you will have to wait longer. For example, if you roll a standard die, the probability of getting a 6 is $p = \frac{1}{6}$. The expected number of rolls to get your first 6 is $\frac{1}{1/6} = 6$ rolls.

---

## 6️⃣ Geometric vs. Binomial (Side-by-Side)

It is crucial to understand the difference between these two discrete variables. 

| Feature | Binomial | Geometric |
|---|---|---|
| **What it counts** | Number of successes | Trials until the *first* success |
| **Trials** | Fixed $n$ | Not fixed (continues until success) |
| **Values ($X$)** | $0 \rightarrow n$ | $1 \rightarrow \infty$ |
| **Core Question** | "How *many* successes?" | "When does the *first* success occur?" |
| **Expected Value** | $E(X) = np$ | $E(X) = \frac{1}{p}$ |

### 🔍 Contrast Examples (IMPORTANT)

**Scenario A (Binomial)**
- *Setup:* You play 6 matches, probability of scoring in each = 0.5.
- *Question:* What is the probability you score in exactly 2 matches?
- *Why:* Fixed trials (6), counting successes. $X \sim \text{Binomial}(6, 0.5)$.

**Scenario B (Geometric)**
- *Setup:* You keep playing matches until you score your first goal.
- *Question:* What is the probability you score your first goal in the 3rd match?
- *Why:* Trials not fixed, waiting for first success. $X \sim \text{Geometric}(0.5)$.

### 🔍 Another Clear Contrast

**Emails (Binomial):** Out of 10 emails sent, how many get replies? 
*(Fixed number $\rightarrow$ count replies)*

**Emails (Geometric):** How many emails do you send *before* you get your first reply? 
*(Wait for first success)*

> 🔥 **Final Intuition Checklist**
> - **Binomial** $\rightarrow$ "How many successes in fixed trials?"
> - **Geometric** $\rightarrow$ "How long until the first success?"
