class FreqStack {
    constructor() {
        this.count=new Map();
        this.stacks=new Map()
        this.maxCount=0;

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const valcount=(this.count.get(val)||0)+1;
        this.count.set(val,valcount)
        if(valcount>this.maxCount){
            this.maxCount=valcount;
        }
        if(!this.stacks.get(valcount)){
            this.stacks.set(valcount,[])
        }
        this.stacks.get(valcount).push(val);

    }

    /**
     * @return {number}
     */
    pop() {
        const res=this.stacks.get(this.maxCount).pop();
        this.count.set(res,this.count.get(res)-1);
        if(this.stacks.get(this.maxCount).length===0){
            this.maxCount--;
        }
        return res
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
