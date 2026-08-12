class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        const n=people.length;
        let result=0;
        people.sort((a,b)=>a-b)
        let l=0;
        let r=n-1;
        while(l<=r){
            const remaining=limit-people[r];
            r--;
            result++;
            if(l<=r && remaining>=people[l]){
                l++;
            }
        }
        return result;
    }
}
