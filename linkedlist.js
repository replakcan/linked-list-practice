class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
  }

  append(value) {
    const nodeToAppend = new Node(value);

    if (!this.headNode) {
      this.headNode = nodeToAppend;
    } else {
      let currentNode = this.headNode;

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = nodeToAppend;
    }
  }

  prepend(value) {
    const nodeToPrepend = new Node(value);

    nodeToPrepend.nextNode = this.headNode;
    this.headNode = nodeToPrepend;
  }

  size() {
    let currentNode = this.headNode;

    if (!currentNode) return 0;

    let size = 1;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      size++;
    }

    return size;
  }

  head() {
    const head = this.headNode;

    return head ? head.value : null;
  }

  tail() {
    const head = this.headNode;

    if (!head) return null;
    if (!head.nextNode) return head.value;

    let currentNode = head;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  at(index) {
    if (!this.headNode || this.size() <= index) return null;

    let indexCount = 0;
    let currentNode = this.headNode;

    while (index > indexCount) {
      currentNode = currentNode.nextNode;
      indexCount++;
    }

    return currentNode.value;
  }

  pop() {
    const head = this.headNode;

    if (!this.headNode) return null;

    let currentNode = head;

    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = null;
  }

  contains(value) {
    const head = this.headNode;

    if (!head) return null;

    let currentNode = head;

    while (currentNode) {
      if (currentNode.value == value) return true;

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    const head = this.headNode;

    if (!head) return null;

    let index = 0;
    let currentNode = head;

    while (currentNode) {
      if (currentNode.value == value) return index;

      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    const head = this.headNode;

    if (!head) return "list is empty";

    let rv = "";
    let currentNode = head;

    while (currentNode) {
      rv += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return (rv += "null");
  }
}

const newList = new LinkedList();

newList.append("lion");
newList.append("tiger");
newList.append("turtle");
newList.append("cat");
newList.prepend("dog");

console.log("theList: ", newList);
console.log(newList.size());

console.log("head: ", newList.head());
console.log("tail: ", newList.tail());

console.log(newList.at(0));
console.log(newList.at(1));
console.log(newList.at(2));
console.log(newList.at(3));
console.log(newList.at(4));
console.log(newList.at(5));

newList.pop();

console.log(newList.at(4));
console.log(newList.tail());
console.log(newList.size());
console.log(newList.headNode.nextNode);

console.log(newList.contains("dog"));
console.log(newList.find("dog"));

console.log(newList.toString());
