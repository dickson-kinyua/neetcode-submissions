class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
      const n=s.length;
      let temp=""
      for(const c of s){
        if(/[a-zA-Z0-9]/.test(c)){
          temp+=c.toLowerCase();
        }
      }
      return temp===temp.split("").reverse().join("")
    }
}
