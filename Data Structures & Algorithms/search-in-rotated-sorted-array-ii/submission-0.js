class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let n=nums.length;
        for(let i=0;i<n;i++){
            if(nums[i]===target){
                return true;
            }
        }
        return false;
    }
}
