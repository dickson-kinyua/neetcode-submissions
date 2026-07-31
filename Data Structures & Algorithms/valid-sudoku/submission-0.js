class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows=Array.from({length:9},()=>new Set());
        const cols=Array.from({length:9},()=>new Set());
        const boxes=Array.from({length:9},()=>new Set());

        for(let r=0;r<9;r++){
            for(let c=0;c<9;c++){
                const value=board[r][c];
                const box=Math.floor(r/3)*3 + Math.floor(c/3)
                if(value===".") continue;
                if(
                    rows[r].has(value) || 
                    cols[c].has(value) ||
                    boxes[box].has(value)
                    ){
                        return false
                    }
                    rows[r].add(value);
                    cols[c].add(value);
                    boxes[box].add(value) 
            }
        }
        return true

    }
}
