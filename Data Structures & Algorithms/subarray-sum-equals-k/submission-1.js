class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let result=0;
        let curSum=0;
        const prefixSums=new Map();
        prefixSums.set(0,1);
        for(const num of nums){
            curSum+=num;
            const diff=curSum-k;
            result+=prefixSums.get(diff) || 0;
            prefixSums.set(curSum,(prefixSums.get(curSum) || 0) +1)
        }
        return result
    }
}
