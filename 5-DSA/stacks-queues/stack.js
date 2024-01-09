class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.tail = null;
    }

    push(value) {
        let newNode = new Node(value, this.tail);
        this.tail = newNode;
        return this;
    }

    pop() {
        let popped = this.tail;
        if ( this.tail ) {
            this.tail = this.tail.next;
            return popped;
        }
        return this;
    }
}

