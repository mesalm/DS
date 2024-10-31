class HashTable {
  private table: { [key: string]: any } = {};

  set(key: string, value: any): void {
    this.table[key] = value;
  }

  get(key: string): any {
    return this.table[key];
  }

  delete(key: string): void {
    delete this.table[key];
  }

  has(key: string): boolean {
    return key in this.table;
  }

  keys(): string[] {
    return Object.keys(this.table);
  }

  values(): any[] {
    return Object.values(this.table);
  }
}

const hashTable = new HashTable();
hashTable.set("name", "Ali");
console.log(hashTable.get("name"));
hashTable.delete("name");
console.log(hashTable.has("name"));
