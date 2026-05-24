---
title: "Stats - Part 10: Random Variables"
date: "2026-05-03"
category: "Statistics"
description: "An intuitive explanation of discrete versus continuous random variables, probability mass functions (PMF), probability density functions (PDF), and why continuous variables have zero probability at specific points."
---

📊 **Random Variables**

A random variable is a numerical description of the outcome of a statistical experiment. There are two main types: discrete and continuous. Let's break down the differences and understand the core intuition behind them.

## 1️⃣ Discrete Random Variable

A discrete random variable takes countable values (usually integers).

**Key idea:**
You can list all possible values, even if the list is long.

**Examples:**
- Number of heads in 3 coin tosses $\rightarrow \{0, 1, 2, 3\}$
- Number of goals scored $\rightarrow \{0, 1, 2, 3, \dots\}$
- Number of students in a class

**Properties:**
- Values are separate (gaps exist between them).
- Uses a Probability Mass Function (PMF).

**Example:**
$$P(X=2) = 0.3$$
(There is a $30\%$ chance that the variable equals exactly $2$).

---

## 2️⃣ Continuous Random Variable

A continuous random variable takes uncountably infinite values over an interval.

**Key idea:**
It can take *any* value within a range (including decimals).

**Examples:**
- Height of a person (e.g., $170.2$ cm, $170.23$ cm, $\dots$)
- Time taken to finish a task
- Temperature

**Properties:**
- Values are continuous (no gaps).
- Uses a Probability Density Function (PDF).

**Probability at a single point is:**
$$P(X=x) = 0$$

Instead, we compute probability over intervals:
$$P(a \leq X \leq b)$$

---

## 3️⃣ Quick Comparison

| Feature | Discrete | Continuous |
|---|---|---|
| **Values** | Countable | Uncountable (range) |
| **Example** | # of heads | Height, time |
| **Function** | PMF (Probability Mass Function) | PDF (Probability Density Function) |
| **Single value** | Can have probability | Always 0 |

---

## 4️⃣ Intuition (Very Important!)

🧠 **Discrete** $\rightarrow$ "counting" (how many?)
🧠 **Continuous** $\rightarrow$ "measuring" (how much?)

**Core idea:**
For a continuous random variable, there are *infinitely* many possible values in any interval. 
So if you try to assign a non-zero probability to even one single value, the total probability would "blow up" beyond $1$.

**Let's visualize it:**
Imagine choosing a random real number between 0 and 1.
What is:
$$P(X=0.5)?$$

There are infinitely many numbers like $0.1, 0.23, 0.999$, etc. So picking *exactly* $0.5$ is like hitting one exact point in a continuous line — it has no width.

👉 A point has zero length, so it gets zero probability.

---

## 5️⃣ Mathematical Reason

For continuous variables, probability is defined using an integral (area under the curve):

$$ P(a \leq X \leq b) = \int_{a}^{b} f(x)dx $$

Now if you try a single point ($a = b$):

$$ P(X=a) = \int_{a}^{a} f(x)dx = 0 $$

Because the interval has no width, the area is zero.

---

## 6️⃣ Why not assign small probabilities to points?

Suppose each point had even a tiny probability $\epsilon > 0$.
Since there are infinitely many points, the total probability becomes:

$$ \infty \times \epsilon = \infty $$

❌ This breaks the fundamental rule of probability: the total probability must equal $1$.

---

## 7️⃣ So what do we do instead?

We assign probability to **intervals**:

$$P(0.4 \leq X \leq 0.6)$$

Because intervals have length (width), they can carry a meaningful probability.

> 🔥 **Key Takeaway:**
> A single point = zero width $\Rightarrow$ zero probability.
> Only ranges (intervals) have meaningful probability for continuous variables.

**Analogy:**
Think of throwing a dart at a line. 
- Hitting *exactly* one precise coordinate $\rightarrow$ probability $\approx 0$.
- Hitting a *segment* of the line $\rightarrow$ meaningful probability.
