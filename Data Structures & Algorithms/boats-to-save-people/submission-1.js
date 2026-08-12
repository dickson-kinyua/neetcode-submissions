class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        //counting sort implementation
        const n=people.length;
        const max=Math.max(...people);
        const count=new Array(max + 1).fill(0);
        for(const p of people){
            count[p]++;
        }
        console.log(count)
        //resulting sorted array of people
        let index=0;
        let i=1;
        while(index<n){
            while(count[i]===0){
                i++;
            }
            people[index]=i;
            index++
            count[i]--;
        }
        let res=0;
          let  l=0;
          let r=n-1;
          while(l<=r){
            const remaining=limit-people[r--];
            res++;
            if(l<=r && remaining >=people[l]){
                l++;
            }
          }
          return res;

    }
}
