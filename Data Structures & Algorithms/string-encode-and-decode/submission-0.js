class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded="";
        for(const str of strs){
            encoded += str.length +"#"+str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let resultArray=[];
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j] !== "#"){
                j++;
            }
            const length=Number(str.slice(i,j))
            // move past "#"
            j++;
            resultArray.push(str.slice(j,j+length));
            //update i
            i=j+length;
        }
        return resultArray;
    }
}
