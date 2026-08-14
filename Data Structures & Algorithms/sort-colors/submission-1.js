class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        //counting sort
        let n=nums.length;
        const count=new Array(3).fill(0);
        for(const num of nums){
           count[num]++; 
        }
        let i=0;
        let j=0;
        while(j<n){
            if(count[i]>0){
                nums[j++]=i;
                count[i]--;
            }else{
                i++;
            }
        }
        return nums;
    }
}
