## Common problem types

**LeetCode practice:** [Search a 2D Matrix - 74](https://leetcode.com/problems/search-a-2d-matrix/), [Search a 2D Matrix II - 240](https://leetcode.com/problems/search-a-2d-matrix-ii/), [Find a Peak Element II - 1901](https://leetcode.com/problems/find-a-peak-element-ii/)

Typical two-dimensional binary search problems include searching a row-wise sorted matrix, finding a peak, and searching a matrix that can be treated as one sorted sequence.

## Brute-force approach

Visit every cell and compare it with the target or required condition. This approach is simple and useful for validating a faster solution.

**Time complexity:** $O(rows * columns)$

**Space complexity:** $O(1)$

## Optimal approaches

When every row is sorted, binary search each relevant row. When the matrix is globally sorted, map a one-dimensional binary-search index to row and column using division and remainder. For matrix peak problems, compare a column maximum with its neighbors and discard half of the columns.

**Time complexity:** $O(rows log columns)$ for row-wise search, or $O(log(rows * columns))$ for a globally sorted matrix.

**Space complexity:** $O(1)$
