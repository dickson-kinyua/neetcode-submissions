class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map={}
        for(let i=0 ; i<nums.length ; i++){
            const complementValue=target-nums[i];
            if(complementValue in map){
                return [map[complementValue],i]
            }
            map[nums[i]]=i;
        }
    }
}
