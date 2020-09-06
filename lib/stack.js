const LinkedList = require("../lib/linked-list");
class Stack {
    constructor() {
        this.store = new LinkedList()
    }

    push(value) {
        this.store.addFirst(value);
    }

    pop() {
        const value = this.store.getFirst();
        this.store.delete(value);
        return value;
    }

    isEmpty() {
        return this.store.isEmpty();
    }

    toString() {
        return this.store.toString();
    }
}

module.exports = Stack;