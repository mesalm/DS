"use strict";
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        if (value === null || value === undefined) {
            throw new Error("Cannot insert null or undefined value");
        }
        this.heap.push(value);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex])
                break;
            [this.heap[index], this.heap[parentIndex]] = [
                this.heap[parentIndex],
                this.heap[index]
            ];
            index = parentIndex;
        }
    }
    extractMax() {
        if (this.heap.length === 0)
            return null;
        if (this.heap.length === 1)
            return this.heap.pop() || null;
        const max = this.heap[0];
        this.heap[0] = this.heap.pop() || 0;
        this.bubbleDown();
        return max;
    }
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild = null;
            let rightChild = null;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null)
                break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
console.log(maxHeap.extractMax());
