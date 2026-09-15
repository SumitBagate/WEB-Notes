## Problem

Place a given number of additional stations so that the maximum distance between adjacent stations is minimized.

**LeetCode:** [Minimize Max Distance to Gas Station - LeetCode 774](https://leetcode.com/problems/minimize-max-distance-to-gas-station/)

## Brute-force approach

Repeatedly place the next station in the current longest gap. After each placement, update that gap and continue until all stations are used. A max-heap can select the longest current gap efficiently.

**Time complexity:** $O(k log n)$, where `k` is the number of added stations.

**Space complexity:** $O(n)$

## Optimal approach: binary search on the answer

For a candidate maximum distance `d`, calculate how many stations are needed to divide every existing gap into pieces of length at most `d`. If the required count is within the available stations, try a smaller distance; otherwise try a larger one.

Because the answer is real-valued, binary search for a fixed number of iterations or until the interval is smaller than the required precision.

**Time complexity:** $O(n log(range / precision))$

**Space complexity:** $O(1)$
