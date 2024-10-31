"use strict";
class Stack {
    constructor(size) {
        this.data = [];
        if (size <= 0) {
            throw new Error("Size must be a positive number");
        }
        this.size = size;
    }
    isEmpty() {
        return this.data.length === 0;
    }
    isFull() {
        return this.data.length === this.size;
    }
    add(el) {
        if (this.isFull()) {
            throw new Error("Stack is full. Cannot add element.");
        }
        this.data.push(el);
    }
    delete() {
        if (this.isEmpty()) {
            console.warn("Stack is empty. Nothing to delete.");
            return undefined;
        }
        return this.data.pop();
    }
    print() {
        return [...this.data];
    }
}
//
const test = new Stack(3);
test.add("ali");
test.add("aliaa");
test.add("alali");
console.log("Before delete:", test.print());
test.delete();
console.log("After delete:", test.print());
