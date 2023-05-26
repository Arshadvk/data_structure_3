// // class TrieNode { 
// //     constructor() { 
// //       this.children = new Map(); 
// //     } 
// //   } 

// //   class Trie { 
// //       constructor(str) { 
// //         this.root = new TrieNode(); 
// //         this.endSymbol = '*'; 
// //         this.populateSuffixTrie(str); 
// //       } 

// //       populateSuffixTrie(str) { 
// //         for (let i = 0; i < str.length; i++) { 
// //           this.insertSubstring(i, str); 
// //         } 
// //       } 

// //       insertSubstring(index, str) { 
// //         let node = this.root; 
// //         for (let i = index; i < str.length; i++) { 
// //           const letter = str.charAt(i); 
// //           if (!node.children.has(letter)) { 
// //             node.children.set(letter, new TrieNode()); 
// //           } 
// //           node = node.children.get(letter); 
// //         } 
// //         node.children.set(this.endSymbol, null); 
// //       } 

// //       contains(str) { 
// //         let node = this.root; 
// //         for (let i = 0; i < str.length; i++) { 
// //           const letter = str.charAt(i); 
// //           if (!node.children.has(letter)) { 
// //             return false; 
// //           } 
// //           node = node.children.get(letter); 
// //         } 
// //         return node.children.has(this.endSymbol); 
// //       } 
// //     } 

// //     const trie = new Trie("arun"); 
// //     console.log(trie.contains("n"));


// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null 
//     }
// }

// class BinarySearchTreee{
//     constructor(){
//         this.root = null ;
//     }
//     isEmpty(){
//         return this.root = null
//     }
//     insert(value){
//         const node = new Node(value)
//         if (!this.root) {
//             this.root = node
//         }
//         else{
//             this.insertNode(this.root , node)
//         }
//     }
//     insertNode(root , node){
//         if(node.value < root.value){
//             if (!root.left) {
//                 root.left = node
//             }else{
//                 this.insertNode(root.left , node) ; 
//             }
//         }else{
//             if (!root.right) {
//                 root.right = node
//             }else{
//                 this.insertNode(root.right , node)
//             }
//         }
//     }
//     search(root , element){
//         if(!root){
//             return false
//         }else{
//             if(!root){
//                 return true
//             }else if(element < root.value){
//                 return this.search(root.left , element)
//             }else{
//                 return this.search(root.right , element)
//             }
//         }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         this.inOrder(root.left);
//         console.log(root.value)
//         this.inOrder(root.right)
//     }
//     postOrder(root){
//         this.postOrder(root.left)
//         this.postOrder(root.right)
//         console.log(root.value);
//     }
//     isBts(root){
//         if(root == null){
//             return true
//         }if(root.left !==null && root.left.value > root.value ){
//             return false
//         }if(root.right !==null && root.right.value < root.value){
//             return false
//         }if(!this.isBts(root.left)||this.isBts(root.right)){
//             return false
//         }return true
//     }
//     min(root){
//         if(root.left){
//             return root.value
//         }else{
//             this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
//     delete(element){
//         this.root = this.deletenode(this.root , element)
//     }
//     deletenode(root , element) {
//         if(!root){
//             return root
//         }else{
//             if(element < root.data ){
//                 this.deletenode(root.left , element)
//             }else if(element > root.data) {
//                 this.deletenode(root.right , element)
//             }else { 
//                 if(!root.left && !root.right){
//                     return null
//                 }else if (!root.left) {
//                     return root.right
//                 } else if (!root.right) {
//                     return root.left
//                 }
//                 root.data = this.min(root.right)
//                 root.right = this.deletenode(root.right , root.value)
//             }
//             return root
//         }
//     }
// }

// const Bst = new BinarySearchTreee()
// Bst.insert(90);
// Bst.insert(89);
// Bst.insert(97);
// Bst.insert(96);
// Bst.insert(98);
// Bst.insert(9);
// Bst.insert(7);
// Bst.insert(8);
// Bst.insert(13);
// Bst.insert(15);
// Bst.insert(120);


// console.log("tree is empty:-" + Bst.isEmpty());

// console.log("post order")
// console.log(Bst.root);
// console.log(Bst.search(Bst.root, 13))
// console.log("Inorder traversal:");
// Bst.inOrder(Bst.root)
// console.log("Preorder traversal:");
// Bst.preOrder(Bst.root)
// console.log("Postorder traversal:");
// Bst.postOrder(Bst.root)


// class Heap {
//     constructor(array) {
//         this.heap = []
//         if (array) {
//             this.bulidheap(array)
//         }
//     }

//     bulidheap(array) {
//         this.heap = array
//         for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
//             this.shiftDown(i)
//         }

//     }
//     shiftUp(currentIdx) {
//         let parentIdx = this.parent(currentIdx)
//         while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
//             this.swap(currentIdx , parentIdx)
//             currentIdx = parentIdx
//             parentIdx = this.parent(currentIdx)
//         }
//     }
//     shiftDown(currentIdx) {
//         let endIdx = this.heap.length - 1
//         let leftIdx = this.leftChild(currentIdx)
//         if (leftIdx <= endIdx) {
//             let rightIdx = this.rightChild(currentIdx)
//             let idxToShift;
//             if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
//                 idxToShift = rightIdx 
//             }else{
//                 idxToShift = leftIdx
//             }
//             if(this.heap[idxToShift] < this.heap[currentIdx]){
//                 this.swap(currentIdx , idxToShift)
//                 currentIdx = idxToShift
//                 leftIdx = this.leftChild(currentIdx)
//             }else{
//                 return
//             }
//         }
//     }
//     remove(){
//         this.swap(0 , this.heap.length -1)
//         const valueToRemove = this.heap.pop()
//         this.shiftDown(0)
//         return valueToRemove
//     }
//     insert(value) {
//         this.heap.push(value)
//         this.shiftUp(this.heap.length - 1)
//     }
//     parent(i) {
//         return Math.floor((i - 1) / 2)
//     }
//     leftChild(i) {
//         return i * 2 + 1
//     }
//     rightChild(i) {
//         return i * 2 + 2
//     }
//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
//     }
//     display() {
//         console.log(this.heap)
//     }
// }
// const array = [6,2,8]

// const heap = new Heap(array)

// heap.insert(1)
// heap.insert(5)
// heap.insert(15)
// heap.display()

// class Node {
//     constructor(data){
//         this.data = data
//         this.left = null 
//         this.right = null 
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null 
//     }
//     isEmpty(){
//         return this.root == null
//     }
//     insert (data){
//         const node = new Node(data)
//         if (!this.root) {
//             this.root = node
//         }else{
//             this.insertNode(this.root , node )
//         }
//     }
//     insertNode(root , node){
//         if (node.data <root.data ) {
//             if (!root.left) {
//                 root.left = node
//             }else{
//                 this.insertNode(root.left , node)
//             }
//         }else{
//             if (!root.right) {
//                 root.right = node
//             }else{
//                 this.insertNode(root.right , node)
//             }
//         }

//     }
//     isBst(root){
//         if (root == null) {
//             return true
//         }if(root.left !== null  && root.left.data > root.data ){
//             return false
//         }
//         if (root.right !== null && root.right.data < root.data) {
//             return false
//         }if (this.isBst(root.left )|| this.isBst(root.right)) {
//             return false
//         }
//         return true
//     }
//     inOrder(root){
//         if (!root) return
//         this.inOrder(root.left)
//         console.log(root.data)
//         this.inOrder(root.right)
//     }
//     preOrder(root){
//         if (!root) return
//         console.log(root.data)
//         this.inOrder(root.left)
//         this.inOrder(root.right)

//     }
//     postOrder(root){
//         if (!root) return
//         this.inOrder(root.left)
//         this.inOrder(root.right) 
//         console.log(root.data)

//     }

// }
// const bts = new BinarySearchTree()
// bts.insert(50)
// bts.insert(40)
// bts.insert(60)
// bts.insert(20)
// bts.insert(70)
// bts.insert(45)
// bts.insert(55)
// console.log(bts.isBst(bts.root))
// console.log(bts.root)
// console.log(bts.isBst())
// bts.inOrder(bts.root)
// console.log("postOrder");
// bts.postOrder(bts.root)
// console.log("preOrder");
// bts.preOrder(bts.root)


class Heap {
    constructor(array) {
        this.heap = []
        if (array) {
            this.buildHeap(array)
        }
    }
    buildHeap(array) {
        this.heap = array
        for(let i = this.parent(this.heap.length -1) ; i>=0 ; i--){
            this.shiftDown(i)
        }

    }
    shiftUp(currentIdx) {
        let parentIdx = this.parent(currentIdx)
        while (currentIdx > 0 && this.heap[parentIdx] < this.heap[currentIdx]) {
            this.swap( currentIdx , parentIdx )
            currentIdx = parentIdx 
            parentIdx = this.parent(currentIdx)
        }

    }
    shiftDown(currentIdx) {
        let endIdx = this.heap.length -1 
        let leftIdx = this.leftChild(currentIdx)
        while(leftIdx <= endIdx) {
            let rightIdx = this.rightChild(currentIdx)
            let idxToShift ; 
        if (rightIdx <= endIdx && this.heap[rightIdx > leftIdx]) {
            idxToShift = rightIdx
        }else{
            idxToShift = leftIdx
        }
        if (this.heap[idxToShift] > this.heap[currentIdx]) {
            this.swap( currentIdx , idxToShift)
            currentIdx = idxToShift
            leftIdx = leftIdx(currentIdx)
        }
        else{
            return
        }
        }
    }
    insert(element){
        this.heap.push(element)
        this.shiftUp(this.heap.length -1)
    }
    remove(){
        this.swap( 0 , this.heap.length -1)
        let valueToRemove = this.heap.pop()
        this.shiftDown(0)
        return valueToRemove ; 
    }
    parent(i) {
        return Math.floor((i - 1) / 2)
    }
    leftChild(i) {
        return i * 2 + 1
    }
    rightChild(i) {
        return i * 2 + 2
    } swap(i , j) {

        [this.heap[i], this.heap[j]] = [this.heap[i], this.heap[j]] 
    }
    di

}