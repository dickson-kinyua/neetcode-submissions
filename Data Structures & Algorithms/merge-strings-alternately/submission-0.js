class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result="";
        let n1=word1.length;
        let n2=word2.length;
        let i =0;
        while(i<n1 || i<n2){
            if(i<n1) result+=word1[i];
            if(i<n2) result+=word2[i];
            i++;
        }
        return result;
    }
}
