class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let deque = [];

        for (let r = 0; r < nums.length; r++) {
            // 1. Remove indices outside the window
            while (deque.length && deque[0] < r - k + 1) {
                deque.shift();
            }

            // 2. Remove smaller values from the back
            while (deque.length && nums[deque[deque.length - 1]] <= nums[r]) {
                deque.pop();
            }

            // 3. Add current index
            deque.push(r);

            // 4. Once window reaches size k, record maximum
            if (r >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}
