| **Pattern**        | **Typical use**                    |
| ------------------ | ---------------------------------- |
| Left + Right       | Sorted array, palindrome, pair sum |
| Slow + Fast        | Remove duplicates, linked list     |
| Sliding Window     | Subarrays/substrings               |
| Partition pointers | 0/1/2 sorting, partition problems  |

### Problems:-

**LeetCode practice:** [Longest Substring Without Repeating Characters - 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

     1.[[Longest Substring Without Repeating Characters]]


## Brute-force baseline

Try every valid pair, window, or partition of the input and test whether it satisfies the problem condition. 
This is useful for validating optimized pointer solutions on small inputs.

**Typical time complexity:** $O(n^2)$

**Space complexity:** $O(1)$, excluding auxiliary data used by a specific problem.

## Optimal pointer approach

Use pointers that move only forward. A left/right pair handles sorted arrays and pair problems, slow/fast pointers handle linked lists, and a sliding window handles contiguous subarrays or substrings. The key invariant is that every pointer movement permanently discards work that cannot produce a better answer.

**Typical time complexity:** $O(n)$

**Space complexity:** $O(1)$ to $O(k)$, depending on whether a frequency map is required.
