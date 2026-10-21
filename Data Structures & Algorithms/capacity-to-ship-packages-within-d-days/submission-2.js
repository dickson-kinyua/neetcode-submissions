class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
    
     */
    countHours(weights,mid){
        let days=1;
        let totalWeight=0
        for(let i=0;i<weights.length;i++){
            totalWeight+=weights[i];
            while(totalWeight>mid){
                days++;
                totalWeight=weights[i]
            }
        }
        return days
    }


    shipWithinDays(weights, days) {
        let minWeight=Math.max(...weights)
        let maxWeight=weights.reduce((acc,w)=>acc+w,0)
        while(minWeight<=maxWeight){
            const mid=Math.floor((minWeight+maxWeight)/2);
            let neededDays=this.countHours(weights,mid)
           
            if(neededDays<=days){
                maxWeight=mid-1
            }else{
                minWeight=mid+1
           
            }
        }
        return minWeight;
    }
}
