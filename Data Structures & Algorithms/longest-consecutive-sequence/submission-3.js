class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) return 0;
        let longest=1;
        let curr=1;

        nums.sort((a,b)=>a-b);

        for(let i=1;i<nums.length;i++){
            if(nums[i]===nums[i-1]){
                continue;
            }else if(nums[i]===nums[i-1]+1){
                curr++
            }else{
                longest=Math.max(longest,curr)
                curr=1
            }
        }
        return Math.max(longest,curr)

    }
}
