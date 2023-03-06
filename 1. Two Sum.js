/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// brute force O(n^2)
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target)
                return [i, j]
        }
    }
};

// hash table O(n)
// hash table Map에서 특정 값을 찾는 것은 O(1)
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        let need = target - nums[i];
        if(map.has(need))
            return [map.get(need), i];
        map.set(nums[i], i)
    }
};