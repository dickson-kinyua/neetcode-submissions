class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const maxPile = Math.max(...piles);
        let l = 1;
        let r = maxPile;
        let res = r;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            let hours = 0;
            for (let i = 0; i < piles.length; i++) {
                hours += Math.ceil(piles[i] / mid);
            }
            if (hours <= h) {
                res = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return res;
    }
}
