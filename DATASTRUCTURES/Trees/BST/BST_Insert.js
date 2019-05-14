class Node{
    constructor(val) {
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }

    insert(val){
        let new_node=new Node(val)
        // no root
        if(!this.root){
            this.root=new_node
            return this
        }
        let current=this.root
        while(true){
            if(val===current.val){ 
                return null
            };
            if(val<current.val){
                if(!current.left){
                    current.left=new_node
                    return this;
                }
                current=current.left
            }else{
                if(!current.right){
                    current.right=new_node
                    return this
                }
                current=current.right
            }
        }
    }
}