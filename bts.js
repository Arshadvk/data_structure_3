class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root == null;
    }

    insert(value) {
        const node = new Node(value)
        if (!this.root) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(root, element) {
        if (!root) {
            return false
        } else {
            if (root.value == element) {
                return true
            }
            else if (element < root.value) {
                return this.search(root.left, element)
            } else {
                return this.search(root.right, element)
            }
        }
    }

    preOrder(root) {
        if (!root) return;
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)

    }

    inOrder(root) {
        if (!root) return;
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right)
    }
    postOrder(root) {
        if (!root) return;
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
    isBTS(root) {
        if (root == null) {
            return true;
        }
        if (root.left !== null && root.left.value > root.value) {
            return false
        } if (root.right != null && root.right.value < root.value) {
            return false
        } if (!this.isBTS(root.left) || this.isBTS(root.right)) {
            return false
        }
        return true;
    }
    min(root) {
        if (!root.left) {
            console.log("caaaaaaame");
            return root.value
        } else {
            this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right);
        }
    }
    delete(element) {
        this.root = this.deletenode(this.root, element)
    }
    deletenode(root, element) {
        if (root == null) {
            return root;
        } else {
            if (element < root.value) {
                root.left = this.deletenode(root.left, element)
            } else if (element > root.value) {
                root.right = this.deletenode(root.right, element)
            } else {
                if (!root.left && !root.right) {
                    return null
                } else if (!root.left) {
                    return root.right
                } else if (!root.right) {
                    return root.left
                }
                root.value = this.min(root.right)
                console.log("minimum", this.min(root.right));
                root.right = this.deletenode(root.right, root.value)
            }
            return root
        }
    }
}


const Bst = new BinarySearchTree();
Bst.insert(90);
Bst.insert(89);
Bst.insert(97);
Bst.insert(96);
Bst.insert(98);
Bst.insert(9);
Bst.insert(7);
Bst.insert(8);
Bst.insert(13);
Bst.insert(15);
Bst.insert(120);

Bst.delete(120)

console.log("tree is empty:-" + Bst.isEmpty());

console.log("post order")
console.log(Bst.root);
console.log(Bst.search(Bst.root, 13))
console.log("Inorder traversal:");
Bst.inOrder(Bst.root)
console.log("Preorder traversal:");
Bst.preOrder(Bst.root)
console.log("Postorder traversal:");
Bst.postOrder(Bst.root)
