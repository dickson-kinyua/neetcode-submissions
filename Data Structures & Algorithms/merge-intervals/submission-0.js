class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const result=[];
        intervals.sort((a,b)=>a[0]-b[0]);
        result.push(intervals[0])
        for(const interval of intervals){
            const start=interval[0];
            const end=interval[1];
            const lastEnd=result[result.length-1][1]
            if(start<=lastEnd){
                result[result.length-1][1]=Math.max(lastEnd,end)
            }else{
                result.push([start,end])
            }
        }
        return result
    }
}
