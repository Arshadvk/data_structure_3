class MinHeap {
    constructor(array) {
      this.heap = [];
      if (array) {
        this.buildHeap(array);
      }
    }
  
    buildHeap(array) {
      this.heap = array;
      for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
        this.shiftDown(i);      
      }
    }
   
    shiftDown(currentIdx) {
      let endIdx = this.heap.length - 1;
      let leftIdx = this.leftChild(currentIdx);
      while(leftIdx<=endIdx){
        let rightIdx = this.rightChild(currentIdx)
        let idxToShift;
        if(rightIdx<= endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
            idxToShift = rightIdx

        }else{
            idxToShift = leftIdx
        }
        if(this.heap[currentIdx]>this.heap[idxToShift] ){
            [this.heap[currentIdx],this.heap[idxToShift]]=[this.heap[idxToShift],this.heap[currentIdx]]
            // this.swap(currentIdx,idxToShift)
            currentIdx =  idxToShift
            leftIdx = this.leftChild(currentIdx)
        }else{
            return;
        }
      }
     
    }
  
    shiftUp(currentIdx) {
      let parentIdx = this.parent(currentIdx);
      while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
        this.swap(currentIdx, parentIdx);
        [ this.heap[currentIdx],this.heap[parentIdx]] = [ this.heap[parentIdx], this.heap[currentIdx]]
        currentIdx = parentIdx;
        parentIdx = this.parent(currentIdx);
      }
    }
  
    peek() {
      return this.heap[0];
    }
  
    remove() {
        [this.heap[0],this.heap[this.heap.length-1]] = [this.heap [this.heap.length -1],this.heap[0]]
    //   this.swap(0, this.heap.length - 1);
      const valueToRemove = this.heap.pop();
      this.shiftDown(0);
      return valueToRemove;
    }
  
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  
    leftChild(i) {
      return i * 2 + 1;
    }
  
    rightChild(i) {
      return i * 2 + 2;
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    display() {
      console.log(this.heap);
    }
  }
  
  const array = [2, 1, 2];
  const heap = new MinHeap(array);
heap.insert(3)
heap.insert(4)
heap.insert(2)
heap.insert(5)
// heap.remove()
// heap.remove()
// heap.remove()
heap.display()
heap.peek()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Max heap


// class maxHeap {
//     constructor(array){
//         this.heap = []
//         if(array){
//             this.buildHeap(array)
//         }
//     }

//     buildHeap(array){
//         this.heap = array
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }

//     shiftDown(currentidx){
//         let endIdx = this.heap.length-1
//         let leftIdx = this.leftChild(currentidx)
//         while(leftIdx<=endIdx){
//             let rightIdx = this.rightChild(currentidx)
//             let idxToShift;
//             if(rightIdx<= endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//                 idxToShift = leftIdx
//             }else{
//                 idxToShift = rightIdx
//             }
//             if(this.heap[idxToShift]>this.heap[currentidx]){
//                 [this.heap[idxToShift],this.heap[currentidx]] = [this.heap[currentidx],this.heap[idxToShift]]
//                 currentidx = idxToShift
//                 leftIdx = this.leftChild(currentidx)
//             }else{
//                 return;
//             }

//         }

//     }

//     shiftUp(currentidx){
//         let parentIdx = this.parent (currentidx)
//         while(currentidx>0 && this.heap[parentIdx]<this.heap[currentidx]){
//             [this.heap[parentIdx],this.heap[currentidx]] = [this.heap[currentidx],this.heap[parentIdx]]
//             currentidx = parentIdx
//             parentIdx = this.parent(currentidx)
//         }
//     }

//     insert(value){
//         this.heap.push(value)
//         this.shiftUp(this.heap.length-1)
//     }

//     remove(){
//         [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
//         let valueToRemove = this.heap.pop()
//         this.shiftDown(0)
//         return valueToRemove;
//     }
    
//     parent(i){
//         return Math.floor((i-1)/2)
//     }

//     leftChild(i){
//         return i*2 +1
//     }

//     rightChild(i){
//         return i*2 +2
//     }

//     display(){
//         console.log(this.heap);
//     }
// }

// const array = [3,2,2,1,7]
// const heap = new maxHeap(array)
// heap.insert(33)
// heap.insert(3)
// heap.insert(335)
// heap.insert(2)
// heap.remove()
// heap.remove()
// heap.remove()

// heap.display()
