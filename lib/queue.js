class Queue {
    constructor() {
        // this.store = ...
        throw new Error("This method has not been implemented!");
    }

    enqueue(element) {
        throw new Error("This method has not been implemented!");
    }

    dequeue() {
        throw new Error("This method has not been implemented!");
    }

    front() {
        throw new Error("This method has not been implemented!");
    }

    size() {
        throw new Error("This method has not been implemented!");
    }

    isEmpty() {
        throw new Error("This method has not been implemented!");
    }

    toString() {
        let arr;
        if (this.head > this.tail) {
            arr = this.store.slice(this.head, this.capacity).concat(this.store.slice(0, this.tail));
        } else {
            arr = this.store
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;