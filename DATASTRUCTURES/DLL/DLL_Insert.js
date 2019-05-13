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

    pop() {
        if (!this.head) return null;
        // node(new tail)  <---> removed_node(old tail) --->null
        var removed_node = this.tail
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        }
        else {
            this.tail = removed_node.prev;
            // null <-- removed_node
            removed_node.prev = null;
            // tail.next --> null
            this.tail.next = null
        }
        this.length--
        return removed_node
    }

    shift() {
        if (!this.head) return null;
        let old_head = this.head
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = old_head.next;
            old_head.next = null;
            this.head.prev = null;
        }
        this.length--
        return old_head
    }

    unshift(val) {
        let new_head = new Node(val)
        if (!this.head) {
            this.head = new_head;
            this.tail = new_head;
        } else {
            new_head.next = this.head;
            this.head.prev = new_head;
            this.head = new_head;
        }
        this.length++
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        // let counter=0;
        // let current_node=this.head;
        // while(counter!=index){
        //     current_node=current_node.next;
        //     counter++
        // }

        var count, current_node;
        if (index <= this.length / 2) {
            count = 0
            current_node = this.head;
            while (count != index) {
                current_node = current_node.next
                count++
            }
        } else {
            count = this.length - 1
            current_node = this.tail
            while (count != index) {
                current_node = current_node.prev
                count--
            }
        }

        // let mid=Math.floor(this.length/2)
        // mid
        // let current_node=index<=mid?this.head:this.tail
        // if(index<=mid){
        //     for(let i=0;i<index;i++){
        //         current_node=current_node.next;
        //     }
        // }else{
        //     for(let i=this.length-1;i>index;i--){
        //         current_node=current_node.prev
        //     }
        // }

        return current_node;
    }

    set(index, val) {
        let node = this.get(index)
        if (node) {
            node.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.unshift(val);
        }
        else if (index === this.length) {
            this.push(val)
        }
        else {
            let new_node = new Node(val)
            let before_node = this.get(index - 1)
            let next_node = before_node.next

            before_node.next = new_node, new_node.prev = before_node
            new_node.next = next_node, next_node.prev = new_node
            this.length++
        }
        return true
    }
}