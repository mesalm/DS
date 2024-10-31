class ListNode {
  value: string;
  next: ListNode | null = null;

  constructor(value: string) {
    this.value = value;
  }
}

class LinkedList {
  private head: ListNode | null = null;

  isEmpty(): boolean {
    return this.head === null;
  }

  add(value: string): void {
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

  print(): string[] {
    const values: string[] = [];
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
