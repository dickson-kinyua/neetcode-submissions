class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n=heights.length;
        
        let maxWater=0;
        let start=0;
        let end=n-1;
        while(start<end){
            const width=end-start;
            const height=Math.min(heights[start],heights[end]);
            const area=width*height;
            maxWater=Math.max(maxWater,area)
            if(heights[start]<=heights[end]){
                start++
            }else{
                end--;
            }
        }
        return maxWater;
    }
}
