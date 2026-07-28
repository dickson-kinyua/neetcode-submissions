class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
    const bucket = Array.from(
        { length: nums.length + 1 },
        () => []
    );

    // Count frequencies
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    // Place numbers into buckets
    for (const num in count) {
        const freq = count[num];
        bucket[freq].push(Number(num));
    }

    // Collect top k frequent elements
    const result = [];

    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of bucket[i]) {
            result.push(num);
            if (result.length === k) return result;
        }
    }

    return result;
    }
}
