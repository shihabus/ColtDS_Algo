class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val)
        // list is empty
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            // current tail ---> new Node
            this.tail.next = newNode
            // set tail to new node
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return null

        // last item
        let current = this.head;
        // second last item
        let newTail = this.head

        // until current is the last node
        while (current.next) {
            newTail = current
            current = current.next
        }
        // assign tail to newTail(second last item)
        this.tail = newTail
        // severe the next of new Tail
        newTail.next = null

        // decreament length
        this.length--

        // if list becomes empty, set head and tail to null
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    // remove from begnning
    shift() {
        if (!this.head) return null
        let current_head = this.head
        // make head --> head.next
        this.head = current_head.next
        // decreament length
        this.length--

        if (this.length === 0) {
            // head will be set to null as tail.next is null
            this.tail = null;
        }

        return current_head;
    }

    // add element to head
    unshift(val) {
        let newNode = new Node(val);
        // if empty
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    // SLL is zero-indexed
    get(index) {
        if (index < 0 || index >= this.length) return null
        // if (index === this.length - 1) {
        //     return this.tail
        // }
        let counter = 0,
            current_node = this.head
        while (counter < index) {
            current_node = current_node.next
            counter++
        }
        return current_node
    }

    set(index, value) {
        let node = this.get(index)
        if (node !== null) {
            node.val = value
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        // insert at head
        if (index === 0) {
            this.unshift(val)
            return true;
        }
        // insert at tail
        if (index === this.length) {
            this.push(val)
            return true;
        }

        let newNode = new Node(val)
        let current_node = this.get(index - 1)
        newNode.next = current_node.next
        current_node.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length - 1) {
            return this.pop()
        }

        let previous_node = this.get(index - 1)
        let removed = previous_node.next
        previous_node.next = removed.next
        this.length--
        return removed
    }

    print() {
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    reverse() {
        if (!this.head) return null
        let node = this.head;
        this.head = this.tail;
        let prev = null,
            next = null;
        for (let i = 0; i < this.length; i++) {
            // next = node-->
            next = node.next
            // node ---> prev
            node.next = prev
            
            prev=node;
            node=next;

        }
    }
}