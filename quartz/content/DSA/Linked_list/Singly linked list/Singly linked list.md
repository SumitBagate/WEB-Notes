
## Deletion from list

**LeetCode practice:** [Remove Linked List Elements - 203](https://leetcode.com/problems/remove-linked-list-elements/), [Remove Nth Node From End of List - 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/), [Delete Node in a Linked List - 237](https://leetcode.com/problems/delete-node-in-a-linked-list/)

## Approach summary



- ### Brute force

Walk through the list from the head and keep track of the previous node. When the target node is found, connect the previous node to the target's next node. Handle head and tail deletion as separate boundary cases.

**Time complexity:** $O(n)$

**Space complexity:** $O(1)$

### Optimal pointer approach

Maintain only the pointers needed for the current operation. For head deletion, move the head once. For tail or middle deletion, stop at the node before the target and update its `next` pointer. This is already optimal for a singly linked list because reaching a node generally requires traversal from the head.

**Time complexity:** $O(n)$, or $O(1)$ when the node and its predecessor are already known.

**Space complexity:** $O(1)$

# **1 . head deletion**

- Make `temp` point to the current `head`
- Move `head` to `head->next`
- Delete `temp`

```cpp
/*
class Node {
public:
    int data;
    Node* next;

    Node(int x) {
        data = x;
        next = NULL;
    }
};

*/
class Solution {
  public:
    Node *deleteHead(Node *head) {

       Node*temp = head;

       head = head-> next ;

      delete  temp ;

    return head;
    }
};
https://www.geeksforgeeks.org/problems/delete-head-of-linked-list/1
```

# **2. Tail deletion**

```cpp
/*
class Node {
public:
  int data;
  Node* next;

  Node(int x) {
      data = x;
      next = NULL;
  }
};
*/
class Solution {
public:
  Node* removeLastNode(Node* head) {
             if(head == NULL){
          return NULL;
      }
      if(head->next == NULL){
          delete head;
          return NULL;
      }

      Node*temp =  head;

      while(temp->next-> next !=  NULL){

          temp =  temp->next;
      }
      delete temp-> next;

      temp-> next =  NULL;

      return head;

  }
};

https://www.geeksforgeeks.org/problems/deletion-at-the-end-of-a-linked-list/1
```

# 3. **Element deletion**


