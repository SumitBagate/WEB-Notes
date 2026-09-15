



Here is a comprehensive breakdown of the time complexities for the most common operations and tasks you will encounter in data structures and algorithms.

---

## 🔍 1. Basic Data Structure Operations

These are the foundational actions (Search, Insert, Delete) for organizing and accessing data.

| Data Structure                | Access / Lookup | Search      | Insertion                  | Deletion                       |
| ----------------------------- | --------------- | ----------- | -------------------------- | ------------------------------ |
| Array                         | $O(1)$          | $O(n)$      | $O(n)$ _(due to shifting)_ | $O(n)$ _(due to shifting)_     |
| Singly Linked List            | $O(n)$          | $O(n)$      | $O(1)$ _(if at head/tail)_ | $O(1)$ _(if pointer is known)_ |
| Hash Table (Average)          | N/A             | $O(1)$      | $O(1)$                     | $O(1)$                         |
| Binary Search Tree (Balanced) | N/A             | $O(\log n)$ | $O(\log n)$                | $O(\log n)$                    |
| Stack / Queue                 | N/A             | N/A         | $O(1)$ _(Push/Enqueue)_    | $O(1)$ _(Pop/Dequeue)_         |

---

## 🔀 2. Sorting Algorithms

Sorting is one of the most frequent tasks in computing. Algorithms are chosen based on their performance and memory constraints.

|Algorithm|Best Case|Average Case|Worst Case|Space Complexity|
|---|---|---|---|---|
|Merge Sort|$O(n \log n)$|$O(n \log n)$|$O(n \log n)$|$O(n)$ _(Requires extra memory)_|
|Quick Sort|$O(n \log n)$|$O(n \log n)$|$O(n^2)$ _(Rare, bad pivot)_|$O(\log n)$ _(Stack space)_|
|Heap Sort|$O(n \log n)$|$O(n \log n)$|$O(n \log n)$|$O(1)$ _(In-place)_|
|Insertion Sort|$O(n)$ _(Nearly sorted)_|$O(n^2)$|$O(n^2)$|$O(1)$|
|Bubble Sort|$O(n)$ _(With flag)_|$O(n^2)$|$O(n^2)$|$O(1)$|

---

## 🌐 3. Graph & Tree Traversal Tasks

When you need to explore networks, maps, or hierarchical folder structures.

- Breadth-First Search (BFS): $O(V + E)$
    
    - _Used for:_ Finding the shortest path in an unweighted graph.
    
- Depth-First Search (DFS): $O(V + E)$
    
    - _Used for:_ Exploring all paths, checking for cycles, or topological sorting.
    
- Dijkstra’s Algorithm: $O((V + E) \log V)$ _(Using a Min-Heap)_
    
    - _Used for:_ Finding the shortest path in a weighted graph (like Google Maps).
    

_(Note: $V$ = Number of Vertices/Nodes, $E$ = Number of Edges/Connections)_

---

## ⚙️ 4. Common Miscellaneous Tasks

Everyday programming tasks like searching text, math computations, or manipulating collections.

- Linear Search: $O(n)$ — Scanning an unsorted list from start to finish.
- Binary Search: $O(\log n)$ — Finding an item in a sorted list by repeatedly cutting the search area in half.
- String Matching (Naive): $O(n \times m)$ — Finding a substring of length $m$ inside a main string of length $n$.
- String Matching (KMP Algorithm): $O(n + m)$ — Optimized substring searching.
- Matrix Multiplication (Naive): $O(n^3)$ — Multiplying two $n \times n$ grids of numbers.




## 📊 Loop Structures and Their Complexities

|Loop Code Structure|Big O Complexity|Common Name|How the Work Scales|Real-World Scenario|
|---|---|---|---|---|
|Single `while` / `for` loop  <br>`while i < n:`  <br>`i += 1`|$O(n)$|Linear Time|The loop runs exactly $n$ times. If the input size doubles, the execution time doubles.|Scanning an array to find the maximum value, or calculating a sum.|
|Loop inside a loop  <br>`for i in range(n):`  <br>  `for j in range(n):`|$O(n^2)$|Quadratic Time|The inner loop runs $n$ times for _every_ step of the outer loop, running $n \times n$ times total.|Comparing every element to every other element (e.g., finding all duplicates, Bubble Sort).|
|Dividing/Multiplying loop  <br>`while i < n:`  <br>`i = i * 2`|$O(\log n)$|Logarithmic Time|The loop variable grows exponentially, meaning the loop finishes in very few steps relative to a large $n$.|Binary Search, or traversing down a balanced binary decision tree.|
