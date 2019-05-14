// Add to end 
// Remove from the beginning

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let new_node = new Node(val)
        if (!this.first) {
            this.first = new_node;
            this.last = new_node;
        } else {
            let current_last = this.last;
            current_last.next = new_node;
            this.last = new_node;
        }
        this.size++
        return this.size
    }

    dequeue() {
        if (!this.first) return null
        let current_first = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = current_first.next
            current_first.next = null
        }
        this.size--
        return current_first
    }
}

