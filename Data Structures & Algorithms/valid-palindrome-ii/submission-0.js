class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    validPalindrome(s) {
        let left=0;
        let right=s.length-1;
        while(left<right){
            if(s[left] === s[right]){
            left ++;
            right --;
        }else{
         return(
            this.isPalindrome(s,left+1,right) ||
            this.isPalindrome(s,left,right-1)
            )  
        }
        }  
        return true; 
    }

     isPalindrome(str,left,right){
        while(left<right){
            if(str[left] !== str[right])  {
            return false;
         }
         left++;
         right-- 
        }
         return true;
    }
}
