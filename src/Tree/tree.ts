//Binary Search Tree

class TreeNode {
  value: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class BinarySearchTree {
  private root: TreeNode | null = null;

  insert(value: number): void {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode: TreeNode | null = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  contains(value: number): boolean {
    let currentNode: TreeNode | null = this.root;
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
