class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const n=nums.length;
        let num1=-1;
        let num2=-1;
        let count1=0;
        let count2=0;
        for(const num of nums){
            if(num===num1){
                count1++
            }else if(num===num2){
                count2++;
            }else if(count1===0){
                count1 =1;
                num1=num
            }else if(count2===0){
                count2=1;
                num2=num;
            }else{
                count1 --;
                count2--
            }
        }
        count1=count2=0;
        for(const num of nums){
            if(num===num1) count1++;
            else if(num===num2) count2++;
        }
        const result=[];
        if(count1>Math.floor(n/3)) result.push(num1)
        if(count2>Math.floor(n/3)) result.push(num2)
        return result;
    }
}
