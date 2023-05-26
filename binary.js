class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null 
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null 
    }

    isEmpty(){
        return this.root == null
    }
    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node
        }else{
            this.insertNode(this.root , node)
        }
    }

    insertNode(root , node){
        if(node.data < root.data ){
            if(!root.left){
                root.left = node
            }else{
                this.insertNode(root.left , node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertNode(root.right , node)
            }
        }
    }
    search(root , element){
        if(!root){
            return false
        }
        else if (root.data < element) {
            this.search(root.left , element)
        }
        else if(root.data == element){
            return true
        }else if(root.data > element){
            this.search(root.right , element)
        }
    }
    min(root){
        if(!root.left){
            return root.data
        }else{
           return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.data
        }else{
           return this.max(root.right)
        }
    }
    delete(element){
        this.root = this.deleteNode(this.root , element)
    }
    deleteNode(root , element){
        if(!root){
            return root
        }else{
            if (element < root.data) {
                this.deleteNode()
            }
        }

    }
    preOrder(root){
        if (!root) return;
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)    
    }
    inOrder(root){
        if (!root) return;
        this.inOrder(root.left)
        console.log(root.data)
        this.inOrder(root.right)
    }
    postOrder(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.data);
    }
    isBTS(root){
        if (!root) {
            return true
        }
        if (root.left !== null && root.left.data > root.data) {
            return false
        }
        if (root.right !== null && root.right.data < root.data) {
            return false
        }
        if (!this.isBTS(root.left) || this.isBTS(root.right)) {
            return false
        }
        return true
    }
}