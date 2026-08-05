class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n=numbers.length;
        const map=new Map();
        for(let i=0;i<n;i++){
            const complement=target-numbers[i];
            if(map.has(complement)){
                return [map.get(complement),i+1]
            }
            map.set(numbers[i],i+1)
        }
        return []

    }
}
