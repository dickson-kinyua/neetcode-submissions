class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) { 
       const checker = Math.floor(nums.length / 2);
    const map = {};

    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;

        if (map[num] > checker) {
            return num;
        }
    }

    }
}
