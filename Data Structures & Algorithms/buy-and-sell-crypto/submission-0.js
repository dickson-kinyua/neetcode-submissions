class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice=prices[0];
        let maxProfit=0;

        for(let i=1 ; i<prices.length; i++){
            // Update minimum price seen so far
        minPrice = Math.min(minPrice, prices[i]);
        // Calculate profit if we sell on day i
        const profit = prices[i] - minPrice;
        
        // Update maximum profit
        maxProfit = Math.max(maxProfit, profit);
        }
    
    return maxProfit;
}
}
