lass Node {
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

    pop(){
        if(!this.head) return null;
        // node(new tail)  <---> removed_node(old tail) --->null
        var removed_node=this.tail
        if(this.length===1){
            this.tail=null;
            this.head=null;
        }
        else{
            this.tail=removed_node.prev;
            // null <-- removed_node
            removed_node.prev=null;
            // tail.next --> null
            this.tail.next=null
        }
        this.length--
        return removed_node
    }

    shift(){
        if(!this.head) return null;
        let old_head=this.head
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            this.head=old_head.next;
            old_head.next=null;
            this.head.prev=null;
        }
        this.length--
        return old_head
    }
}