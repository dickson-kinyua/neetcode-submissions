class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let minWeight = Math.max(...weights);
        let totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
        for (let i = minWeight; i <= totalWeight; i++) {
            if (this.daysNeeded(weights, i) <= days) {
                return i;
            }
        }
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
