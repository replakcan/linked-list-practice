class LinkedList {
  constructor(list = []) {
    this.list = list;
  }

  append(value) {
    const newNode = new Node(value);

    this.list.push(newNode);
  }

  prepend(value) {
    const newNode = new Node(value);

    this.list.unshift(newNode);
  }

  size() {
    return this.list.length;
  }

  head() {
    return this.list[0];
  }

  tail() {
    const lastItemIndex = this.list.length - 1;

    return this.list[lastItemIndex];
  }

  at(index) {
    return this.list[index];
  }

  pop() {
    this.list.pop();
  }

  contains(value) {
    return this.list.some((el) => el.value == value);
  }

  find(value) {
    return this.list.indexOf(value);
  }

  toString() {
    const nodeList = this.list;
    let rv = "";

    for (let i = 0; i < nodeList.length; i++) {
      if (i + 1 == nodeList.length) {
        rv += `( ${nodeList[i].value} ) -> null`;
      } else {
        rv += `( ${nodeList[i].value} ) -> `;
      }
    }

    return rv;
  }

  insertAt(value, index) {
    const nodeList = this.list;

    nodeList.splice(index, 1, value);

    return nodeList;
  }

  removeAt(index) {
    const nodeList = this.list;

    nodeList.splice(index, 1);

    return nodeList;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("lion");
list.append("monkey");
list.prepend("honeyBee");
list.prepend("essek");

console.log(list.size());
console.log(list.head());
console.log(list.tail());

console.log(list.toString());
