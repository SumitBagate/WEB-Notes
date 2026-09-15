

->   The factorial of a number `n` (where `n >= 0`) is the product of all positive integers from 1 to `n`.
	To compute the factorial recursively, we calculate the factorial of `n` by using the factorial of `(n-1)`. 
	The base case for the recursive function is when `n = 0`, in which case we return 1.



```cpp

 #include<iostream>
 using namespace std;
 int n ;
 int  Fact(int n){
     
     if( n == 0){
     return 1;
     }
     return n*Fact(n-1);
 }
 
 int main(){
    cout <<"enter n";
    cin>>n ;
    
    cout<< Fact(n); 
 
 }

```

 
 ## Working 

![[Pasted image 20260912125546.png]]


> **Time: O(n)**
> **Space: O(n)**