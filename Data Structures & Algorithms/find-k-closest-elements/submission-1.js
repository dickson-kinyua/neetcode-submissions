class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        const nums = [];

        for (let num of arr) {
            nums.push({
                num: num,
                distance: Math.abs(num - x),
            });
        }

        nums.sort((a, b) => {
            if (a.distance !== b.distance) {
                return a.distance - b.distance;
            }

            return a.num - b.num;
        });

        const result = nums.slice(0, k).map((item) => item.num);

        result.sort((a, b) => a - b);

        return result;
    }
}
