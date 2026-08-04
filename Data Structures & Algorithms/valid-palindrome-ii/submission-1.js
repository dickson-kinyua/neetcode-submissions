class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
          if(this.isPalindrome(s)){
                return true;
            }
            for(let i=0;i<s.length;i++){
                const newStr=s.slice(0,i)+s.slice(i+1)
                if(this.isPalindrome(newStr)){
                    return true;
                }
            }
            return false;   
    }

    isPalindrome(s){
        let left=0;
        let right=s.length-1;
        while(left<right){
            if(s[left] !== s[right]){
                return false;
            }
            left++;
            right--
        }
        return true
    }
}
