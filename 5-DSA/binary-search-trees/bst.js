const Queue = require("../stacks-queues/queues")

class BST {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if ( !this.key ) {
            this.key = key;
            this.value = value;
        } else if ( key < this.key ) { // do i need to go left
            //check if we can go left
            if ( !this.left ) { // if not
                //set the new node down
                this.left = new BST(key, value, this)
            } else {
                this.left.insert(key, value)
            }
        } else { // right options
            //check if we can go right
            if ( !this.right ) { // if not
                //set the new node down
                this.right = new BST(key, value, this)
            } else {
                this.right.insert(key, value)
            }
        }
        return this;
    }

    find(key) {
        if ( key === this.key ) {
            return [this.key, this.value];
        } else if ( key < this.key && this.left ) {
            return this.left.find(key)
        } else if ( key > this.key && this.right ) {
            return this.right.find(key)
        } else {
            return null;
        }
    }

    remove(keyToRemove) {
        if ( this.key === keyToRemove ) { // is this the node i want to remove
            //check if has two children
            if ( this.left && this.right ) {
                // find the min on the right side or find the largest on the left side
                let nodeToPromote = this.right._findMin();
                //replace the node we want to remove with the nodeToPromote
                this.key = nodeToPromote.key;
                this.value = nodeToPromote.value;
                //remove the extra node
                nodeToPromote.remove(nodeToPromote.key);
            } else if ( this.left ) {
                this._replaceWith(this.left)
            } else if ( this.right ) {
                this._replaceWith(this.right)
            } else {
                this._replaceWith(null)
            }
        }  else if (keyToRemove < this.key && this.left) {
            return this.left.remove(keyToRemove);
        } else if (keyToRemove > this.key && this.right) {
            return this.right.remove(keyToRemove);
        } else {
            return null;
        }
    }

    _replaceWith(replacementNode) {
        //logic for removing nodes
        if ( this.parent ) { //ask if it has a parent
            //the parent needs to look at what side the node we want to remove is at
            if ( this.parent.left === this ) {
                //tell that parent to replace the node
                this.parent.left = replacementNode;
            } else if ( this.parent.right === this ) {
                this.parent.right = replacementNode;
            }
            //replace the replacement nodes parent refrence
            if ( replacementNode ) {
                replacementNode.parent = this.parent;
            }
        } else { //if its a root node 
            if (replacementNode) {
                this.key = replacementNode.key;
                this.value = replacementNode.value;
                this.left = replacementNode.left;
                this.right = replacementNode.right;
            } else { // reset tree
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }

    }
   

    //find min helper
    _findMin() {
        if (!this.left) { // if i cant go left aka left is null
            return this; //return me that node
        }
        return this.left._findMin(); // keep traversing right recursively
    }

    //find max helper
    _findMax() {
        if (!this.right) { // if i cant go right aka right is null
            return this; //return me that node
        }
        return this.right._findMax(); // keep traversing left recursively
    }

    //pre order we push the root node first
    dfsPreOrder(values = []) {
        //process
        values.push(this.value);
        //step left recursively
        if (this.left) {
            this.left.dfsPreOrder(values);
        }
        //step right recursively
        if (this.right) {
            this.right.dfsPreOrder(values);
        }
        return values
    }

    //post order we push the root node at the end
    dfsPostOrder(values = []) {
        //step left recursively
        if (this.left) {
            this.left.dfsPostOrder(values);
        }
        //step right recursively
        if (this.right) {
            this.right.dfsPostOrder(values);
        }
        //process
        values.push(this.value);
        return values
    }

    //traversal that gives us our tree sorted
    dfsInOrder(values = []) {
        //step left recursively
        if (this.left) {
            this.left.dfsInOrder(values);
        }
        //process
        values.push(this.value);
        //step right recursively
        if (this.right) {
            this.right.dfsInOrder(values);
        }
        return values
    }

    breadthFirstSearch(values = []) {
        const queue = new Queue;
        queue.enqueue(this);//put the root node into the Q
        let nodeToBeChecked = this;

        while ( nodeToBeChecked ) {
            // process
            values.push(nodeToBeChecked.value)
            // check the left child and put in Q
            if ( nodeToBeChecked.left ) {
                queue.enqueue(nodeToBeChecked.left)
            }
            // check the right child and put in Q
            if ( nodeToBeChecked.right ) {
                queue.enqueue(nodeToBeChecked.right)
            }
            // move on to the next node
            nodeToBeChecked = queue.dequeue();
        }
        return values;
    }
}

let bts = new BST()
bts.insert(5,5).insert(3,3).insert(7,7).insert(4,4)
bts.remove(3)
