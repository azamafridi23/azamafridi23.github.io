---
title: "Stats - Part 9: Counting, Permutations, and Combinations"
date: "2026-04-20"
category: "Statistics"
description: "Understanding permutations vs combinations, factorials, and the basic counting principle used in statistics."
---

These topics belong to combinatorics, a branch of probability that deals with counting the number of possible outcomes.

They help answer questions like:
- How many ways can something happen?
- How many arrangements are possible?
- How many selections can be made?

---

## 1️⃣ Basic Counting Principle (Multiplication Rule)

### Definition
If a process consists of multiple independent steps, the total number of possible outcomes is the product of the number of choices at each step.

$$ \text{Total outcomes} = n_1 \times n_2 \times n_3 \times \dots $$

### Example
Suppose you want to create a password with:
- 3 letters
- 2 digits

**Choices:**
- Letters → 26 choices each
- Digits → 10 choices each

**Total passwords:**
$$ 26^3 \times 10^2 = 17576 \times 100 = 1,757,600 $$

> **Key Idea**
> 
> When choices occur in sequence, we multiply the possibilities.

---

## 2️⃣ Factorial

Factorial is heavily used in counting problems.

### Definition

$$ n! = n \times (n-1) \times (n-2) \times \dots \times 1 $$

**Example:**
$$ 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 $$

**Special case:**
$$ 0! = 1 $$

### Why Factorials Appear
Factorials count the number of ways to arrange objects.

**Example:** Arrange 4 books on a shelf.
- First position → 4 options
- Second → 3 options
- Third → 2 options
- Fourth → 1 option

**Total arrangements:** $4! = 24$

---

## 3️⃣ Permutations (Order Matters)

### Definition
A permutation is an arrangement of objects where **order matters**. Different orders count as different outcomes.

### Formula
Number of permutations of selecting $r$ objects from $n$:

$$ P(n,r) = \frac{n!}{(n-r)!} $$

### Example
How many ways can we arrange 3 students from 5 students in a line?

$$ P(5,3) = \frac{5!}{(5-3)!} = \frac{120}{2} = 60 $$

So there are 60 possible arrangements.

### Why Order Matters
ABC is different from ACB, BAC, BCA, CAB, and CBA. These are *different* permutations.

---

## 4️⃣ Combinations (Order Does NOT Matter)

### Definition
A combination is a selection of objects where **order does not matter**.

### Formula

$$ C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!} $$

### Example
Choose 3 students from 5 students to form a committee.

$$ C(5,3) = \frac{5!}{3! \times 2!} = \frac{120}{6 \times 2} = 10 $$

So there are 10 possible committees.

### Why Order Doesn't Matter
The committee {A, B, C} is the exact same as {B, A, C} or {C, B, A}. These represent the same group.

---

## 5️⃣ Relationship Between Permutations and Combinations

Permutations count arrangements. Combinations count selections.

**Relationship:**
$$ P(n,r) = C(n,r) \times r! $$

**Why?** Because each combination can be arranged in $r!$ different ways.

---

## 6️⃣ Quick Rule to Decide Which to Use

Ask one question: **Does order matter?**

| Situation | Method |
|-----------|--------|
| Order matters | Permutation |
| Order does not matter | Combination |

### Examples
- Arrange 5 runners in race positions → **Permutation**
- Choose 3 students for a team → **Combination**
- Create a password → **Permutation**
- Select lottery numbers → **Combination**

---

## 7️⃣ Common Counting Scenarios

### Circular Permutations
Arranging objects in a circle:
$$ (n-1)! $$

**Example:** Seat 5 people at a round table:
$$ (5-1)! = 4! = 24 $$

### Permutations with Identical Objects
If objects repeat:
$$ \frac{n!}{n_1! \times n_2! \times n_3! \times \dots} $$

**Example:** Arrange letters in the word `BALLOON`

**Letters:**
- B = 1
- A = 1
- L = 2
- O = 2
- N = 1

Total letters = $7$

$$ \text{Arrangements} = \frac{7!}{2! \times 2!} $$

---

## 8️⃣ Intuition Summary

Think of these ideas as answering different questions:

| Concept | Question |
|---------|----------|
| **Counting Principle** | How many total possibilities exist? |
| **Factorial** | How many ways can we arrange objects? |
| **Permutations** | How many ordered arrangements are possible? |
| **Combinations** | How many groups can we select? |

### 🎯 Final Intuition

- **Permutations** = arrangements 📋
- **Combinations** = selections 👥

**A helpful memory trick:**
- **P**ermutation → **P**osition matters
- **C**ombination → **C**hoice matters

---

## 9️⃣ Application Example: Probability using Combinations

**Question:** Calculate the probability of getting exactly 3 heads in 8 fair coin tosses.

To get exactly 3 heads in 8 fair coin tosses, use the binomial probability formula:

$$ P(X=3) = \binom{8}{3} \left(\frac{1}{2}\right)^8 $$

**Step 1: Compute the combination**
$$ \binom{8}{3} = \frac{8!}{3! \times 5!} = 56 $$

**Step 2: Calculate Probability**
$$ P = 56 \times \left(\frac{1}{2}\right)^8 = \frac{56}{256} = 0.21875 $$

**Final answer:** $0.21875$ (or $21.875\%$)

### 🧠 How to Reason About It

Think of the 8 coin tosses as a sequence like:
`H T H T T H T T` (H = heads, T = tails).

#### Step 1: Total possible outcomes
Each toss has 2 possibilities. So for 8 tosses there are:
$$ 2^8 = 256 \text{ equally likely sequences.} $$

#### Step 2: Count the "successful" outcomes
We want exactly 3 heads. So the question becomes: 
*In how many different ways can we place 3 heads among 8 positions?*

For example:
- `H H H T T T T T`
- `H T H T H T T T`
- `T T H H T T H T`

...each arrangement counts as a different outcome. 

This is a combinations problem because we are choosing 3 positions out of 8 for the heads:
$$ \binom{8}{3} = 56 $$

#### Step 3: Probability
Since all $256$ outcomes are equally likely, and $56$ of them have exactly 3 heads:
$$ P = \frac{56}{256} = 0.21875 $$

### 🎯 Intuition (Why This Works)
You're not tracking the exact order of tosses, just *which positions* are heads. Every specific sequence has a probability of $(\frac{1}{2})^8$. 

So the total probability is:
$$ (\text{number of valid sequences}) \times (\text{probability of each sequence}) $$

That's why:
$$ 56 \times \left(\frac{1}{2}\right)^8 $$

> **Quick mental picture:**
> 1. Pick 3 slots for heads → everything else automatically becomes tails.
> 2. Count how many ways to pick those slots → that's your numerator!
