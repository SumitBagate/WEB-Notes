## Common problem types

**LeetCode practice:** [Find First and Last Position - 34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/), [Search Insert Position - 35](https://leetcode.com/problems/search-insert-position/), [Search in Rotated Sorted Array - 33](https://leetcode.com/problems/search-in-rotated-sorted-array/), [Find Minimum in Rotated Sorted Array - 153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

This section covers binary search variations on sorted one-dimensional arrays, including first and last occurrence, lower and upper bounds, search insertion position, rotated arrays, peaks, and single elements.

## Brute-force approach

Scan the array from left to right and stop when the required condition is found. This is useful as a correctness baseline and handles unsorted input when the specific problem allows it.

**Time complexity:** $O(n)$

**Space complexity:** $O(1)$

## Optimal approach: binary search

Use the sorted order to discard half of the remaining range after every comparison. For boundary problems, continue searching after finding a match so the answer moves toward the required left or right boundary.

**Time complexity:** $O(log n)$

**Space complexity:** $O(1)$
