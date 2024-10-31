"use strict";
class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null;
    }
    add(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    print() {
        const values = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return values;
    }
}
const linkedList = new LinkedList();
linkedList.add("Ali");
linkedList.add("Salma");
console.log(linkedList.print());
