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
}

let bts = new BST()
bts.insert(5,5).insert(3,3)