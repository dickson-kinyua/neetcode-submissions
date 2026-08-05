class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n=numbers.length;
        for(let i=1;i<n;i++){
            for(let j=i+1;j<=n;j++){
                if(numbers[i-1]+numbers[j-1] === target){
                    return [i,j]
                }

            }
           
        }
        return []
    }
}
