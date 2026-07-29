class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const rows=matrix.length;
        const columns=matrix[0].length;
        this.sumMatrix=Array.from({length:rows+1},()=>
            Array(columns+1).fill(0));
        for(let r=0;r<rows;r++){
            let prefixSum=0;
            for(let c=0;c<columns;c++){
                prefixSum += matrix[r][c]
                const above=this.sumMatrix[r][c+1];
                this.sumMatrix[r+1][c+1]=prefixSum + above;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++;
        col1++;
        row2++;
        col2++;
        const bottomRight=this.sumMatrix[row2][col2];
        const above=this.sumMatrix[row1-1][col2];
        const left=this.sumMatrix[row2][col1-1];
        const topLeft=this.sumMatrix[row1-1][col1-1];
        return bottomRight-above-left+topLeft;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
