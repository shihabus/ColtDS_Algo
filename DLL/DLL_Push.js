class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let new_node = new Node(val)
        // empty
        if (!this.head) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            // tail--->new_node
            this.tail.next = new_node;
            // tail<---new_node
            new_node.prev = this.tail
            // tail=new_node
            this.tail = new_node
        }
        this.length++
        return this
    }
}