

# Decimal to  Binary conversion

example:- number :- 13 
     13 / 2 = 6 remainder 1
	6 / 2 = 3 remainder 0
	3 / 2 = 1 remainder 1
	1 / 2 = 0 remainder 1
   
      read the remainders from bottom to top: 1101
      
      13 = 1101

# **Binary to Decimal Conversion:**

  Example : -  1101

 - Start from the rightmost bit (least significant bit).
 - Each bit is multiplied by 2 raised to the power of its position index.

	1 * 2^0 = 1
	0 * 2^1 = 0
	1 * 2^2 = 4
	1 * 2^3 = 8
	
	Sum = 1 + 0 + 4 + 8 = **13**.

 