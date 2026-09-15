
 - atoi() - It is the  function used to  convert   the string  to its integral format 
 

```cpp
class Solution {

private:

    const int INT_MIN_VAL = -2147483648;
    const int INT_MAX_VAL = 2147483647;

    int helper(string &s, int i, long long num, int sign) {

        if (i >= s.size() || !isdigit(s[i]))
            return (int)(sign * num);

        num = num * 10 + (s[i] - '0');

        long long value = sign * num;

        if (value < INT_MIN_VAL)
            return INT_MIN_VAL;

        if (value > INT_MAX_VAL)
            return INT_MAX_VAL;

        return helper(s, i + 1, num, sign);
    }

public:

    int myAtoi(string s) {

        int i = 0;

        while (i < s.size() && s[i] == ' ')
            i++;

        int sign = 1;

        if (i < s.size() && (s[i] == '+' || s[i] == '-')) {

            if (s[i] == '-')
                sign = -1;

            i++;
        }

        return helper(s, i, 0, sign);
    }
};
```



# learnings
  -  asked for  32  bit  which is    between  -2<sup>31</sup>  to 2<sup>31 </sup>-1
  -  which is  similar to <mark style="background:#40a9ff">-2,147,483,648  to  2,147,483,647</mark>



  - using  namespace  std 