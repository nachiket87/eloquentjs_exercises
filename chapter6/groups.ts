class Group {
  collection: any[];

  constructor(collection: any[]) {
    this.collection = collection;
  }

  static from(collection: any[]) {
    return new Group(collection);
  }

  has(value: any) {
    const alreadyHasValue = this.collection.some((contents) => {
      return contents === value;
    });
    return alreadyHasValue;
  }

  add(value: any) {
    if (!this.has(value)) {
      this.collection.push(value);
    }
  }

  delete(value: any) {
    if (this.has(value)) {
      const index = this.collection.indexOf(value);
      return this.collection.splice(index);
    }
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
