class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS=matrix.length;
        let COLUMNS=matrix[0].length;
        let l=0;
        let r=ROWS*COLUMNS-1;
        while(l<=r){
            let mid=l+Math.floor((r-l)/2);
            let row=Math.floor(mid/COLUMNS)
            let col=mid%COLUMNS
            if(target>matrix[row][col]){
                l=mid+1
            }else if(target<matrix[row][col]){
                r=mid-1
            }else{
                return true
            }
        }
        return false
    }
}
