class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let i=0;
        while(i*i<=x){
            i++
        }
        return i-1
    }
}
