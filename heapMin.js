class minHeap {
    constructor(array) {
        this.heap = []
        if (array) {
            this.buildheap(array)
        }
    }
    buildheap(array) {
        this.heap = array
        for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
            this.shiftDown(i)

        }
    }
    shiftDown(currentidx) {
        let endIdx = this.heap.length - 1
        let leftIdx = this.leftChild(currentidx)
        if (leftIdx <= endIdx) {
            let rightIdx = this.rightChild(currentidx)
            let idxToShift;
            if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {

                idxToShift = rightIdx
            } else {
                idxToShift = leftIdx
            }
            if (this.heap[idxToShift] < this.heap[currentidx]) {
                [this.heap[currentidx], this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[currentidx]]

                currentidx = idxToShift
                leftIdx = this.leftChild(currentidx)
            } else {
                return;
            }
        }
    }
    shiftUp(currentIdx) {
        let parentIdx = this.parent(currentIdx);
        while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
            this.swap(currentIdx, parentIdx);
            [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]]
            currentIdx = parentIdx;
            parentIdx = this.parent(currentIdx);
        }
    }
    peek() {
        return this.heap[0]
    }
    remove() {
        [this.heap[0],this.heap[this.heap.length - 1]]= [this.heap[this.heap.length - 1], this.heap[0]]

        const valueToRemove = this.heap.pop();
        this.shiftDown(0);
        return valueToRemove;
    }
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1)
    }
    parent(i) {
        return Math.floor((i - 1) / 2)
    }
    leftChild(i) {
        return i * 2 + 1
    }
    rightChild(i) {
        return i * 2 + 2
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    display() {
        console.log(this.heap)
    }
}
const array = [6,2,8]

const heap = new minHeap(array)

heap.insert(1)
heap.insert(5)
heap.insert(15)
heap.display()