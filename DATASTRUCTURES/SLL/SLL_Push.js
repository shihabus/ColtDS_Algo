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
}

var list=new SLL()
list.push(1)
list.push(2)
