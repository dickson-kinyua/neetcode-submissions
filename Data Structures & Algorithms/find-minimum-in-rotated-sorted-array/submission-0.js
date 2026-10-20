class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n=nums.length;
        let minValue=Infinity;
        for(let i=0;i<n;i++){
            minValue=Math.min(minValue,nums[i])
        }
        return minValue
    }
}
