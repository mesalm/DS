"use strict";
//Binary Search Tree
class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            }
            else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }
    contains(value) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (value === currentNode.value) {
                return true;
            }
            currentNode =
                value < currentNode.value ? currentNode.left : currentNode.right;
        }
        return false;
    }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.contains(5));
console.log(bst.contains(20));
