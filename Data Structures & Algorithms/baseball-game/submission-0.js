class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const n = operations.length;
        const records = [];
        for (let i = 0; i < n; i++) {
            if (!isNaN(Number(operations[i]))) {
                records.push(Number(operations[i]));
            } else if (operations[i] === "+") {
                records.push(records[records.length - 1] + records[records.length - 2]);
            } else if (operations[i] === "D") {
                records.push(records[records.length - 1] * 2);
            } else if (operations[i] === "C") {
                records.pop();
            }
        }
        let sum = 0;
        for (let i = 0; i < records.length; i++) {
            sum += records[i];
        }
        return sum;
    }
}
