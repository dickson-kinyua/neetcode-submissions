class StockSpanner {
    constructor() {
        this.prices = [];
    }

    next(price) {
        this.prices.push(price);

        let span = 1;

        for (let i = this.prices.length - 2; i >= 0; i--) {
            if (this.prices[i] <= price) {
                span++;
            } else {
                break;
            }
        }

        return span;
    }
}
