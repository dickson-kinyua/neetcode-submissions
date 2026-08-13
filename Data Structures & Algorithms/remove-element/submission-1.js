class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const n = nums.length;
        const temp = [];
        for (let i = 0; i < n; i++) {
            if (nums[i] !== val) {
                temp.push(nums[i]);
            }
        }
        for (let j = 0; j < temp.length; j++) {
            nums[j] = temp[j];
        }
        return temp.length;
    }
}
