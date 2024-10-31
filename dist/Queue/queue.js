"use strict";
class Queue {
    constructor(size) {
        this.data = [];
        this.size = size > 0 ? size : 10;
    }
    isEmpty() {
        return this.data.length === 0;
    }
    isFull() {
        return this.data.length === this.size;
    }
    enqueue(el) {
        if (this.isFull()) {
            return "Queue is full";
        }
        this.data.push(el);
        return "Element added to Queue";
    }
    dequeue() {
        if (this.isEmpty()) {
            console.warn("Queue is empty. Nothing to delete.");
            return undefined;
        }
        return this.data.shift();
    }
    print() {
        return [...this.data];
    }
}
const testQueue = new Queue(5);
console.log(testQueue.enqueue("ali"));
console.log(testQueue.enqueue("salma"));
console.log(testQueue.enqueue("Shosho"));
console.log(testQueue.enqueue("ady"));
console.log(testQueue.enqueue("shady"));
console.log(testQueue.dequeue());
console.log(testQueue.print());
