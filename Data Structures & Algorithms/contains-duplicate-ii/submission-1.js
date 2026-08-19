class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const n=nums.length;
        const map=new Map();
        for(let i=0;i<n;i++){
            if(map.has(nums[i]) && i-map.get(nums[i])<=k){
                return true;
            }
            map.set(nums[i],i)
        }
        return false;

    }
}
