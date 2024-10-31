"use strict";
class HashTable {
    constructor() {
        this.table = {};
    }
    set(key, value) {
        this.table[key] = value;
    }
    get(key) {
        return this.table[key];
    }
    delete(key) {
        delete this.table[key];
    }
    has(key) {
        return key in this.table;
    }
    keys() {
        return Object.keys(this.table);
    }
    values() {
        return Object.values(this.table);
    }
}
const hashTable = new HashTable();
hashTable.set("name", "Ali");
console.log(hashTable.get("name"));
hashTable.delete("name");
console.log(hashTable.has("name"));
