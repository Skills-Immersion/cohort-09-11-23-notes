// Problem: Given an linked list containing sorted numbers, insert a new
// number in the correct position

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(items) {
        this.head = null;

        items.forEach(item => this.push(item));
    }

    push(item) {
        if (this.head === null) {
            this.head = new Node(item, null);
            return;
        }

        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = new Node(item, null);
    }

    show() {
        let node = this.head;
        while (node !== null) {
            process.stdout.write(`${node.value}, `);
            node = node.next;
        }
        process.stdout.write("\n");
    }

    insertSorted(value) {
        const newNode = new Node(value, null);
    
        if (this.head === null || value < this.head.value) {
    
          newNode.next = this.head;
          this.head = newNode;
          return;
        }
    
        let current = this.head;
        let prev = null;
    
        while (current !== null && value >= current.value) {
          prev = current;
          current = current.next;
        }
    
        prev.next = newNode;
        newNode.next = current;
      }


}

let l = new LinkedList([1, 3, 5, 6, 7, 9]);
l.insertSorted2(0);
l.show(); // 1, 3, 5, 6, 7, 8, 9
