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
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  group: { collection: any[] };
  position: number;

  constructor(group: { collection: any[] }) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.collection.length) {
      return { done: true, value: undefined };
    } else {
      let result = { value: this.group.collection[this.position], done: false };
      this.position++;
      return result;
    }
  }
}
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

export default GroupIterator;
