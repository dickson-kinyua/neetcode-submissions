class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = weights.reduce((acc, weight) => acc + weight, 0);
        while (left<=right){
            let capacity=Math.floor((left+right)/2);
            let daysNeeded = this.daysNeeded(weights, capacity);
            if(daysNeeded<=days){
                right=capacity-1;
            }else{
                left=capacity+1;
            }
        }
        return left;
    }
    daysNeeded(weights, capacity) {
        let days = 1;
        let currentLoad = 0;
        for (let weight of weights) {
            if (currentLoad + weight > capacity) {
                days++;
                currentLoad = 0;
            }
            currentLoad += weight;
        }
        return days;
    }
}
