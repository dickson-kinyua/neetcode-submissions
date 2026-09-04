class StockSpanner {
    constructor() {
        this.res = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.res.push(price);
        let i = this.res.length - 2;
        while (i >= 0 && this.res[i] <= price) {
            i--;
        }
        return this.res.length - i - 1;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
