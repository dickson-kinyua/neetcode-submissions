class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []; //stores indices of bars,not their heights
        let maxArea = 0; //largest rectangle area we've seen sor far

        for (let i = 0; i <= heights.length; i++) {
            let currentHeight = i === heights.length ? 0 : heights[i];
            while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()];
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                const area = height * width;
                maxArea = Math.max(maxArea, area);
            }
            stack.push(i);
        }

        return maxArea;
    }
}
