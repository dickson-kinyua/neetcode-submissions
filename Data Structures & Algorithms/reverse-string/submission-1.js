class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
      const temp=[];
      const n=s.length;
      for(let i=n-1;i>=0;i--){
        temp.push(s[i])
      }
      for(let j=0;j<n;j++){
        s[j]=temp[j]
      }
    }
}
