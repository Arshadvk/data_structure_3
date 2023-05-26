class Node {
    constructor(data){
        this.data = data
        this.left = null 
        this.right = null 

    }
}
class Binary {
    constructor (){
        this.root = null
    }
    insert (data){
        const node = new Node(data)
        if(!this.root){
            this.root = node
        }
        else{
            this.insertNode( this.root ,node)

        }
    }
    insertNode(root , node){
        
        if (node.data < root.data) {
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left , node )
            }
        }else{
            if (root.right == null) {
                root.right = node 
            }else{
                this.insertNode(root.right , node )
            }
        }
    }

    inOrder(root){
        if (root == null) return
        this.inOrder(root.left)
        console.log(root.data)
        this.inOrder(root.right)
    }
}

const bst = new Binary()

bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(6)
bst.insert(17)
bst.insert(7)
bst.inOrder(bst.root)
