
## Node  Generation


```cpp
#include<iostream>
using namespace std ;

class Node{

	int data ;
	Node*next;
	
   //constructor with data and  next pointer
	Node(int data1, Node*next1){
	 data = data1;
	 next = next1;
	};
	
	//constuctor with only data 
	Node(int data1){
	data = data1;
	next = nullptr;
	}
}
int main(){
   vector<int> arr{5,6,7,8,9};
   Node*y = new Node(arr[0]);
   cout << y; // this gives  us  the   address of the  pointer 
   cout << y -> data ;  // gives data  present at that location
}


```

## Types of linked  list


1. **Singly Linked Lists**:
    
   

  ![[Pasted image 20260814100245.png]]


2. **Doubly Linked Lists**
   ![[Pasted image 20260814100250.png]]

3. **Circular Linked Lists**:
   
   
   ![[Pasted image 20260814100254.png]]



  