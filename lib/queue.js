class Queue {
    constructor(capacity = 20) {
        this.capacity = capacity;
        this.store = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        if ((this.tail === this.head) && !this.isEmpty()) {
            throw new Error("The queue's buffer is full!");
        }
        this.store[this.tail] = element;
        this.tail = (this.tail + 1) % this.capacity;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const value = this.store[this.head];
        this.store[this.head] = null;
        this.head = (this.head + 1) % this.capacity;
        return value;
    }

    front() {
        return this.store[this.head];
    }

    size() {
        if ((this.head === this.tail) && !this.isEmpty()) {
            return this.capacity;
        } else if (this.head === this.tail) {
            return 0;
        } else if (this.tail > this.head) {
            return this.tail - this.head;
        } else if (this.tail < this.head) {
            return this.capacity - (this.tail - this.head);
        }
    }

    isEmpty() {
        if (this.store[this.head] === null || this.store[this.head] === undefined) {
            return true;
        } else {
            return false;
        }
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