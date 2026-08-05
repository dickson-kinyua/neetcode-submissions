class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const n=nums.length;
        if(n===0) return 0;
        let i=1;
        for(let j=1;j<n;j++){
            if(nums[j] !== nums[j-1]){
                nums[i]=nums[j];
                i++;
            }
        }
        return i;
    }
}
