## Problem

Given piles of bananas and a number of hours, find the minimum integer eating speed that allows all bananas to be eaten within the available hours.

**LeetCode:** [Koko Eating Bananas - LeetCode 875](https://leetcode.com/problems/koko-eating-bananas/)

## Brute-force approach

Try every speed from `1` to the largest pile. For each speed, calculate the total hours using ceiling division for every pile. Return the first speed whose total hours fit within the limit.

**Time complexity:** $O(n * maxPile)$

**Space complexity:** $O(1)$

## Optimal approach: binary search on speed

The required hours decrease as the eating speed increases, creating a monotonic predicate. Binary search the speed range.

1. Use `1` as the lower bound and the largest pile as the upper bound.
2. Compute hours at the midpoint with `ceil(pile / speed)`.
3. If the hours fit, search for a smaller speed.
4. Otherwise, search for a larger speed.

**Time complexity:** $O(n log maxPile)$

**Space complexity:** $O(1)$
