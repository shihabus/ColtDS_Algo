class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0; 
    }

    // for const time removal and addition
    // the elements are added and removed from head

    push(val) {
        let new_node = new Node(val);
        if (!this.first) {
            this.first = new_node;
            this.last = new_node;
        } else {
            let current_first = this.first;
            this.first = new_node;
            new_node.next = current_first;
        }
        this.size++;
        return this.size;
    }

    pop() {
        if (!this.first) return null;
        let current_first = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = current_first.next;
        }
        this.size--;
        return current_first;
    }
}