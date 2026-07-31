class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) return 0
        const resultSet=new Set(nums);
        let longest=1;
        for(const num of resultSet){
            let curr=num;
            let length=1;
            if(resultSet.has(curr-1)) continue;
            
            while(resultSet.has(curr+1)){
                curr++;
                length++;
            }
            longest=Math.max(length,longest)
        }
        return longest
    }
}
