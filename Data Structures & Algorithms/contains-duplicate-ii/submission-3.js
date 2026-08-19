class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        //sliding window + hashSet
        const n=nums.length;
        let window=new Set();
        let l=0;
        for(let x=0;x<n;x++){
            if(x-l>k){
                window.delete(nums[l])
                l++;
            }
            if(window.has(nums[x])){
                return true;
            }
            window.add(nums[x])
        }
        return false
    }
}
