
# 1. Brute Force
```cpp
vector<int> twoSum(vectoe<int>&nums, int target){
    
    for(int i = 0 ;i<n;i++){
    
      for(int j = i+1 ; j< nums.size();j++){
      
           if (nums[i] +nums[j] == target)
           {
             return {i , j};
           }
      }
    return {};
    
    }



}
```

>Time Complexity : - O(n <sup>2</sup>)
> Space Complexity :- O(1)


# 2. Sorting + Two Pointers 

```cpp


class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {

        vector<pair<int, int>> arr;

        // Store {number, original index}
        for (int i = 0; i < nums.size(); i++) {
            arr.push_back({nums[i], i});
        }

        // Sort by number
        sort(arr.begin(), arr.end());

        int left = 0;
        int right = arr.size() - 1;

        while (left < right) {

            int sum = arr[left].first + arr[right].first;

            if (sum == target) {
                return {arr[left].second, arr[right].second};
            }

            else if (sum < target) {
                left++;
            }

            else {
                right--;
            }
        }

        return {};
    }
};


```

> Time Complexity :-  O(n log n)
> Space Complexity :- 




# using  Unordered map(optimal)

```cpp
class Solution {

public:

    vector<int> twoSum(vector<int>& nums, int target) {
    
      int n = nums.size();
      unordered_map<int,int>MAP;
      for(int i = 0 ;i < n;i++){
          int diff = target - nums[i];
          if(MAP.find(diff) != MAP.end());
          return {MAP[diff],i};
         }
         MAP[nums[i]] = i;

    }
   return {};
};
  
```

> Time Complexity :- 0(n)
> Space Complexity :- 0(n)