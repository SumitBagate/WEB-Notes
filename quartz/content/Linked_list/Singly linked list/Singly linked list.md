


## # Deletion from list 

  
# **1 . head  deletion** 

- Make `temp` point to the current `head`
- Move `head` to `head->next`
- Delete `temp`
- 
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

