class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit=0;
        const n=prices.length
        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                let sellDay=prices[j]
                maxProfit=Math.max(maxProfit,sellDay-prices[i])
            }
        }
        return maxProfit
}
}
