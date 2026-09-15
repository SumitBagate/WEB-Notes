 - ### Sum of Natural Numbers (n=3)

  ```cpp
   
   int sum(int n){
      
    // base  condition 
    
      if(n==1){
      return 1;
      }
      
      return n + sum(n - 1);
   }
   
  ```


 ## Working of Recursive stack
 

```cpp
int sum(int n) {
    if (n == 1)
        return 1;

    return n + sum(n - 1);
}


                STACK BUILDING
                ↓↓↓↓↓↓↓↓↓↓↓↓↓

Step 1: sum(5) is called

        ┌──────────────┐
TOP →   │ sum(5)       │  waiting for sum(4)
        └──────────────┘


Step 2: sum(5) calls sum(4)

        ┌──────────────┐
TOP →   │ sum(4)       │  waiting for sum(3)
        ├──────────────┤
        │ sum(5)       │  waiting for sum(4)
        └──────────────┘


Step 3: sum(4) calls sum(3)

        ┌──────────────┐
TOP →   │ sum(3)       │  waiting for sum(2)
        ├──────────────┤
        │ sum(4)       │  waiting for sum(3)
        ├──────────────┤
        │ sum(5)       │  waiting for sum(4)
        └──────────────┘


Step 4: sum(3) calls sum(2)

        ┌──────────────┐
TOP →   │ sum(2)       │  waiting for sum(1)
        ├──────────────┤
        │ sum(3)       │  waiting for sum(2)
        ├──────────────┤
        │ sum(4)       │  waiting for sum(3)
        ├──────────────┤
        │ sum(5)       │  waiting for sum(4)
        └──────────────┘


Step 5: sum(2) calls sum(1)

        ┌──────────────┐
TOP →   │ sum(1)       │  BASE CASE → return 1
        ├──────────────┤
        │ sum(2)       │  waiting
        ├──────────────┤
        │ sum(3)       │  waiting
        ├──────────────┤
        │ sum(4)       │  waiting
        ├──────────────┤
        │ sum(5)       │  waiting
        └──────────────┘


                NOW STACK UNWINDS
                ↑↑↑↑↑↑↑↑↑↑↑↑↑↑

sum(1) returns 1
        ↓

        ┌──────────────┐
TOP →   │ sum(2)       │
        ├──────────────┤
        │ sum(3)       │
        ├──────────────┤
        │ sum(4)       │
        ├──────────────┤
        │ sum(5)       │
        └──────────────┘

sum(2) = 2 + 1 = 3
        ↓

        ┌──────────────┐
TOP →   │ sum(3)       │
        ├──────────────┤
        │ sum(4)       │
        ├──────────────┤
        │ sum(5)       │
        └──────────────┘

sum(3) = 3 + 3 = 6
        ↓

        ┌──────────────┐
TOP →   │ sum(4)       │
        ├──────────────┤
        │ sum(5)       │
        └──────────────┘

sum(4) = 4 + 6 = 10
        ↓

        ┌──────────────┐
TOP →   │ sum(5)       │
        └──────────────┘

sum(5) = 5 + 10 = 15
        ↓

      RETURN 15
```


>Time Complexity: **O(n)** -There are **n calls**, and each call does constant work.
>Space Complexity: **O(n)** -Because of the **recursive call stack**, all calls remain in memory until the base condition is reached.