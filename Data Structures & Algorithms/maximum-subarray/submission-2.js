class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        //kadanes algo
        let maxSub=nums[0];
        let curSum=0;
        for(const num of nums){
            if(curSum<0) curSum=0;
            curSum+=num
            maxSub=Math.max(maxSub,curSum)
        }
        return maxSub;
    }
}
