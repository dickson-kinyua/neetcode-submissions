class MyStack {
    constructor() {
        this.q = null;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const newQueue = new Queue();
        newQueue.enqueue(x);
        newQueue.enqueue(this.q);
        this.q = newQueue;
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.q === null) return -1;

        const top = this.q.dequeue();
        this.q = this.q.dequeue();
        return top;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.q === null) return -1;
        return this.q.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q === null;
    }
}