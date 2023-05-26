// class Heap {
//     constructor(array) {
//         this.heap = []
//         if (array) {
//             this.buildheap(array)
//         }
//     }

//     buildheap(array) {
//         this.heap = array
//         for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
//             this.shiftDown(i)
//         }

//     }
//     shiftDown(currentIdx) {
//         let endIdx = this.heap.length -1
//         let leftIdx = this.leftchild(currentIdx)
//         while (leftIdx <= endIdx ) {
//             let rightIdx = this.rightchild(currentIdx)
//             let idxToShift ; 
//             if(rightIdx <= endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//                 idxToShift = rightIdx
//             }else{
//                 idxToShift = leftIdx
//             }if (this.heap[currentIdx]>this.heap[idxToShift]) {
//                 this.swap(currentIdx , idxToShift)
//                 currentIdx = idxToShift
//                 leftIdx = this.leftchild(currentIdx)
//             }else{
//                 return ;
//             }
//         }
//     }
//     shiftUp(currentIdx) {
//         let parentIdx = this.parent(currentIdx);
//         while (currentIdx > 0 && this.heap[currentIdx]) {
//             this.swap(currentIdx , parentIdx);
//             currentIdx = parentIdx
//             parentIdx = this.parent(currentIdx);
//         }
//     }
//     insert(value) {
//         this.heap.push(value);
//         this.shiftUp(this.heap.length - 1);
//     }
//     remove() {
//         this.swap( 0, this.heap.length - 1)
//         const valueToRemove = this.pop
//         this.shiftDown(0)
//         return valueToRemove;
//     }
//     peek() {
//         return this.heap[0];
//     }
//     parent(i) {
//         return Math.floor((i - 1) / 2);
//     }
//     leftchild(i) {
//         return i * 2 + 1
//     }
//     rightchild(i) {
//         return i * 2 + 2
//     }
//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }
//     display() {
//         console.log(this.heap)
//     }
// }

// const array = [2, 1,  5 , 6 , 9 ,8 , 2];
// const heap = new Heap(array)

// heap.display()
// console.log(heap.peek());


class Heap {
    constructor(){
        this.heap = []
        if (array) {
            this.buildHeap(array)
        }
    }
    buildHeap(array){

    }
    insert (){

    }
    remove(){

    }
    swap(i , j){
        [this.heap[i] , this.heap[j]] =[this.heap] 
    }
    shiftUp(){

    }
    shiftDown(){

    }
    parent(){
        return Math.floor((i-1)/2)
    }
    leftChild(){

    }
    rightChild(){

    }
    display(){
        console.log(this.heap);
    }
    peek(){
        return this.heap[0]
    }

}