class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const m = s1.length;
        const n = s2.length;
        if (m > n) return false;
        let count1 = new Array(26).fill(0);
        let count2 = new Array(26).fill(0);
        for (const char of s1) {
            count1[char.charCodeAt(0) - 97]++;
        }
        let left = 0;
        for (let right = 0; right < n; right++) {
            count2[s2.charCodeAt(right) - 97]++;
            if (right - left + 1 > m) {
                count2[s2.charCodeAt(left) - 97]--;
                left++;
            }
            if (count1.join() === count2.join()) {
                return true;
            }
        }

        return false;
    }
}
