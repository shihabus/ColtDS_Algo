class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let new_node = new Node(val)
        // no root
        if (!this.root) {
            this.root = new_node
            return this
        }
        let current = this.root
        while (true) {
            if (val === current.val) {
                return null
            };
            if (val < current.val) {
                if (!current.left) {
                    current.left = new_node
                    return this;
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = new_node
                    return this
                }
                current = current.right
            }
        }
    }

    find(val) {
        if (!this.root) return false
        let current = this.root
        let found = false
        while (current && !found) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

    BSF() {
        let data = [], // final result
            node = this.root,
            queue = [] // bucket
        queue.push(this.root)

        while (queue.length) {
            node = queue.shift()

            data.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }

    // [ 10, 6, 3, 8, 15, 20 ] 
    DFSPreOder(){
        let data=[],
        current=this.root
         function traverse(node){
            data.push(node.val)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
         }
         traverse(current)

        return data
    }   
}

//         10
//     6        15
// 3       8        20