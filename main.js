import LinkedList from "./LinkedList.js";

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

console.log(newList.contains("dog"));
console.log(newList.find("dog"));

console.log(newList.contains("turtle"));
console.log(newList.find("turtle"));

console.log(newList.toString());
