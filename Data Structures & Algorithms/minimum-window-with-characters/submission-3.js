class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";
        const need = new Map();
        const window = new Map();

        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        let have = 0;
        const needLength = need.size;

        let left = 0;
        let result = "";
        let resultLength = Infinity;
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            window.set(char, (window.get(char) || 0) + 1);
            if (need.has(char) && window.get(char) === need.get(char)) {
                have++;
            }
            while (have === needLength) {
                if (right - left + 1 < resultLength) {
                    resultLength = right - left + 1;
                    result = s.slice(left, right + 1);
                }
                const leftChar = s[left];
                window.set(leftChar, window.get(leftChar) - 1);

                if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                    have=have - 1;
                }

                left=left + 1;
            }
        }
        return result
    }
}
