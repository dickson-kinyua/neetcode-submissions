class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    splitArray(nums, k) {
        let left = Math.max(...nums);

        let right = nums.reduce((total, number) => total + number, 0);

        while (left < right) {
            const middle = Math.floor((left + right) / 2);

            if (this.canSplit(nums, middle, k)) {
                // The limit works. Try a smaller one.
                right = middle;
            } else {
                // The limit is too small. Increase it.
                left = middle + 1;
            }
        }

        return left;
    }

    canSplit(nums, maxAllowedSum, k) {
        let groupsNeeded = 1;
        let currentGroupSum = 0;

        for (const number of nums) {
            if (currentGroupSum + number > maxAllowedSum) {
                groupsNeeded++;
                currentGroupSum = number;
            } else {
                currentGroupSum += number;
            }
        }

        return groupsNeeded <= k;
    }
}
