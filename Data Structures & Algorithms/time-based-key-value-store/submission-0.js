class TimeMap {
    constructor() {
        this.store = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }

        this.store.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.store.has(key)) {
            return "";
        }

        const timeValuePairs = this.store.get(key);

        let left = 0;
        let right = timeValuePairs.length - 1;
        let result = "";

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            const storedTimestamp = timeValuePairs[middle][0];
            const storedValue = timeValuePairs[middle][1];

            if (storedTimestamp <= timestamp) {
                result = storedValue;
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return result;
    }
}
