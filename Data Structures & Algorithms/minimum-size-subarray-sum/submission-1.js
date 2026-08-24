class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        const n = nums.length;
        let left = 0;
        let res = Infinity;
        let total = 0;
        for (let right = 0; right < n; right++) {
            total += nums[right];
            while (total >= target) {
                res = Math.min(res, right - left + 1);
                total -= nums[left];
                left++;
            }
        }
        return res == Infinity ? 0 : res;
    }
}
