class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let countStack = [];
        let stringStack = [];

        let k = 0;
        let currentString = "";

        for (const char of s) {
            if (char >= "0" && char <= "9") {
                k = k * 10 + parseInt(char);
            } else if (char === "[") {
                countStack.push(k);
                stringStack.push(currentString);
                k = 0;
                currentString = "";
            } else if (char === "]") {
                const repeatCount = countStack.pop();
                const previousString = stringStack.pop();
                currentString = previousString + currentString.repeat(repeatCount);
            } else {
                currentString += char;
            }
        }
        return currentString;
    }
}
