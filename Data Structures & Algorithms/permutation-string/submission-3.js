class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const m = s1.length;
        const n = s2.length;
        const ss = s1.split("").sort().join("");
        console.log(ss);
        for (let i = 0; i < n; i++) {
            const toCheck = s2
                .slice(i, i + m)
                .split("")
                .sort()
                .join("");
            console.log(toCheck);
            if (ss === toCheck) {
                return true;
            }
        }
        return false;
    }
}
