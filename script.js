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
    this.list.splice(index, 0, new Node(value))
  }

  removeAt(index) {
    this.list.splice(index, 1);
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
list.prepend("zortanca");
list.removeAt(4);
list.removeAt(4);
list.pop()
list.pop()
console.log(list.at(1))
console.log(list.at(3))
console.log(list.at(0))

const sizeOfTheList = list.size()
const firstElementOfTheList = list.head()
const lastElementOfTheList = list.tail()

console.log(list.contains("essek"))

console.log(`size: ${sizeOfTheList}, head: ${firstElementOfTheList.value}, tail: ${lastElementOfTheList.value}`)

list.insertAt("albino", 1)
console.log(list.toString());
list.insertAt("kuruhasan", 3)
console.log(list.toString());
