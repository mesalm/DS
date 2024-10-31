class CustomArray {
  private data: number[] = [];

  add(value: number): void {
    this.data.push(value);
  }

  remove(index: number): number | null {
    if (index < 0 || index >= this.data.length) {
      return null;
    }
    return this.data.splice(index, 1)[0];
  }

  get(index: number): number | null {
    return index >= 0 && index < this.data.length ? this.data[index] : null;
  }

  print(): number[] {
    return this.data;
  }
}

const customArray = new CustomArray();
customArray.add(1);
customArray.add(2);
customArray.add(3);
console.log(customArray.print());
customArray.remove(1);
console.log(customArray.print());
