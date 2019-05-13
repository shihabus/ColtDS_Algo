class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SLL{
    constructor(){
        this.length=0;
        this.head=null;
        this.tail=null;
    }

    push(val){
        let newNode= new Node(val)
        // list is empty
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        else{
            // current tail ---> new Node
            this.tail.next=newNode
            // set tail to new node
            this.tail=newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return null

        // last item
        let current=this.head;
        // second last item
        let newTail=this.head

        // until current is the last node
        while(current.next){
            newTail=current
            current=current.next
        }
        // assign tail to newTail(second last item)
        this.tail=newTail
        // severe the next of new Tail
        newTail.next=null

        // decreament length
        this.length--
        
        // if list becomes empty, set head and tail to null
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        return current
    }
}