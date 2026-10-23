class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const newArr = [...nums1, ...nums2].sort((a, b) => a - b);
        const n = newArr.length;
        if (n % 2 === 0) {
            const mid1 = Math.floor((n - 1) / 2);
            const mid2 = mid1 + 1;
            return (newArr[mid1] + newArr[mid2]) / 2;
        } else {
            return newArr[(n - 1) / 2];
        }
    }
}
