class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
         const n = nums.length;
  const res = [];
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const checker = Math.floor(n / 3);
  for (const [x, y] of map) {
    if (y > checker) {
      res.push(x);
    }
  }
  return res;
    }
}
