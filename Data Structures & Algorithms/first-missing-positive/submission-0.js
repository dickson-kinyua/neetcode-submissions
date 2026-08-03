class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const set = new Set(nums);

        for (let i = 1; i <= nums.length + 1; i++) {
            if (!set.has(i)) {
                return i;
            }
        }
    }
}