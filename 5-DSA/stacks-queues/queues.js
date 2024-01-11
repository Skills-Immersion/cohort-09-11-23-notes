class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if ( this.first === null ) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this;
    }

    dequeue() {
        if (!this.first) {
            return
        }
        let dequeued = this.first;
        this.first = this.first.next;
        if ( this.last === this.first ) {
            this.last = null;
        }
        return dequeued; 
    }
}

module.exports = Queue;