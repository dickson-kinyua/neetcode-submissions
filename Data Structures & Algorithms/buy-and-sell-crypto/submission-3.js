class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        let maxProf = 0;
        let minPrice=prices[0];
        for (let i = 1; i < n; i++) {
            minPrice=Math.min(minPrice,prices[i]);
            const profit=prices[i]-minPrice;
            maxProf=Math.max(maxProf,profit)
        }
        return maxProf;
    }
}
