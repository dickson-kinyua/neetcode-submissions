class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) return nums;

        let pivot = nums[nums.length - 1];
        let left = [];
        let right = [];

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] < pivot) {
                left.push(nums[i]);
            } else {
                right.push(nums[i]);
            }
        }

        return [
            ...this.sortArray(left),
            pivot,
            ...this.sortArray(right)
        ];
    }
}