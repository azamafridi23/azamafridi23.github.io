---
title: "Stats - Part 8: Types of Statistical Studies"
date: "2026-04-16"
category: "Statistics"
description: "Understanding sample studies, observational studies, and experiments, and how the study type determines if we can claim correlation vs. causation."
---

When diving into statistics, it is crucial to understand that **the type of study determines the conclusions we are allowed to make.** 

In particular, the design of a study directly dictates whether we can claim mere *correlation* or actual *causation*. Let's break down the three fundamental types of statistical studies and look at what each allows us to conclude. 📊

---

## 1️⃣ Sample Study (Sample Survey)

A **sample study** collects information from a small subset of a broader population with the goal of estimating characteristics of that entire population.

**Key Idea:**
Instead of polling everyone (which is usually impossible or too expensive), we study a carefully selected, representative sample.

**Example:**
Suppose a researcher wants to estimate the average number of hours university students sleep per night.
- **Population:** All university students.
- **Sample:** 500 randomly selected students.

The researcher surveys those 500 students and uses their answers to estimate the overall population mean.

> **Purpose:** Sample studies are typically used to estimate population means, population proportions, general opinions, or behaviors.
> 
> **Crucial Requirement:** The sample *must* be random and unbiased. Otherwise, any conclusions drawn about the wider population will be fundamentally flawed.

---

## 2️⃣ Observational Study

In an **observational study**, the researcher strictly observes individuals and measures variables without attempting to manipulate or influence anything.

The researcher simply records what is naturally occurring in the world.

**Example:**
A researcher wants to study the relationship between exercise hours and blood pressure. They ask people about their exercise habits and then measure their blood pressure. Crucially, they *do not tell people how much to exercise*.

**Key Feature:**
Absolutely no intervention or treatment is imposed on the subjects.

### What We Can Conclude
Observational studies are excellent for showing an **association** (or **correlation**) between variables. 

⚠️ **However, they can never prove causation.** This is because other uncontrolled factors might be influencing the results.

For example, people who exercise more might also:
- Eat healthier diets.
- Experience lower stress levels.
- Have better access to healthcare.

These hidden, unmeasured factors are called **confounding variables**. Because we didn't control for them, we can't definitively say the exercise *caused* the lower blood pressure.

---

## 3️⃣ Experiment

An **experiment** is a study where the researcher actively imposes a specific treatment on subjects and meticulously observes the effects.

Because the researcher is in control of the variables, **an experiment is the only study design that allows researchers to determine causal relationships.**

### Key Elements of Experiments
1. **Treatment:** The specific condition or intervention applied to subjects.
2. **Control Group:** A baseline group that receives no treatment (or receives a fake placebo).
3. **Random Assignment:** Subjects are randomly assigned to either the treatment or control groups to ensure fairness.

**Example:**
A researcher wants to explicitly test whether a new medication lowers blood pressure.
1. Participants are gathered and **randomly assigned** to groups.
2. **Treatment group:** Receives the new drug.
3. **Control group:** Receives a placebo.

If the treatment group shows significantly lower blood pressure compared to the control group, the random assignment safely isolates the drug as the only difference. Therefore, we may conclude the drug *caused* the change.

---

## 4️⃣ Correlation vs. Causation

This specific distinction is arguably the single most important concept in statistics.

### Correlation
Correlation simply means two variables are mathematically associated or related. When one variable changes, the other tends to change in a predictable way.

> **Example:** Ice cream sales and drowning incidents both skyrocket during the summer. They are highly correlated. But obviously, eating ice cream doesn't *cause* people to drown. The hidden confounding factor is the temperature—hotter weather causes both more swimming (leading to drowning) and more ice cream eating.

### Causation
Causation means that one variable *directly causes a change* in another.
> **Example:** Taking a specific blood pressure medication actively lowers blood pressure.

This causal relationship is typically established exclusively through strictly controlled experiments.

---

## 5️⃣ The Danger of Observational Studies

Why exactly can't observational studies prove causation? The answer always comes back to **confounding variables**. 

A confounding variable is an outside influence that changes the effect of a dependent and independent variable.

> **Example:** Researchers observe that people who drink three cups of coffee a day live longer on average.
> 
> Can we conclude coffee *causes* longer life? No! 
> People who drink coffee every day might also share:
> - Higher average incomes (affording the coffee)
> - Better healthcare access
> - Different daily routines
> 
> Because these factors aren't isolated, causation remains unproven.

---

## 6️⃣ Summary Comparison Table

Here is a quick cheat sheet for study types:

| Study Type | Researcher Manipulates Variables? | Can Show Correlation? | Can Show Causation? |
|---|---|---|---|
| **Sample Study** | No | Sometimes | No |
| **Observational Study** | No | Yes | No |
| **Experiment** | Yes | Yes | Yes |

---

## 7️⃣ The Golden Rule to Remember

If you take only one rule away from this topic, make it this one:

👉 **Observational studies detect correlation.**
👉 **Experiments establish causation.**

### 🎯 Final Intuition

Think of the fundamental difference like this:
- **Observational study:** Watch what naturally happens 👀
- **Experiment:** Change something and record the effect 🔬

Only when we actively control, randomize, and manipulate variables can we reliably definitively determine cause and effect. Good experiments rely on three core principles—**control**, **randomization**, and **replication**—which are the foundations that make experimental results undeniably trustworthy.
