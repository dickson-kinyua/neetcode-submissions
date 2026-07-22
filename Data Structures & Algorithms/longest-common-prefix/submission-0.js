class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const prefix=strs[0]
        for(let i=0; i<prefix.length; i++){
            for(let j=1; j<strs.length; j++){
                if(strs[j][i] !== prefix[i] || i>=strs[j].length){
                    return prefix.slice(0,i)
                }
            }
        }
        return prefix
    }
}
