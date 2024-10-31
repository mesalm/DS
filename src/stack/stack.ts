class Stack {
  private data: string[] = [];
  private size: number;

  constructor(size: number) {
    if (size <= 0) {
      throw new Error("Size must be a positive number");
    }
    this.size = size;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  isFull(): boolean {
    return this.data.length === this.size;
  }

  add(el: string): void {
    if (this.isFull()) {
      throw new Error("Stack is full. Cannot add element.");
    }
    this.data.push(el);
  }

  delete(): string | undefined {
    if (this.isEmpty()) {
      console.warn("Stack is empty. Nothing to delete.");
      return undefined;
    }
    return this.data.pop();
  }

  print(): string[] {
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
