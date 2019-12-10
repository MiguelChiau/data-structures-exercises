// Node class structure
// 1. Includes value
// 2. Includes next
// 3. Includes prev

// DoublyLinkedList structure
// 1. Includes head;
// 2. Includes tail
// 3. Includes length
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Implementing PUSH method (exercise)
  // 1. create a new node with the value passed to the function
  // 2. if the head property is null set the head and tail to be the newly created node
  // 3. if not, set the next property on the tail to be that node
  // 4. set the previous property on the newly created node to be the tail
  // 5. set the tail to be the newly created node
  // 6. increment the length
  // 7. return the doubly linked list

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Implementing POP method (exercise)
  // 1. if there is no head, return undefined
  // 2. store the current tail in a variable to return later
  // 3. if the length is 1, set the head and tail to be null
  // 4. update the tail to be the previous node
  //   5. set the newTail's next to null
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail === poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  //Implementing SHIFT method (exercise)
  // 1. If the length = 0 return undefined
  // 2. Store the current head property in a variable (old head)
  // 3. if length = 1: set the head === null; set the tail === null;
  // 4. update the head to be the next of the old head
  // 5. head's prev === null
  // 6. decrement length
  // return old head
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  // Implementing UNSHIFT method (exercise)
  // 1. Create a new node with the value passed to the function
  // 2. If the length is 0 then: set the head to be the new Node. Set the tail to be the new node
  // 3. Otherwise: set the prev property on that new node of the list to be the new node.
  // Set the next property on the new node to be the head property; update the head to be the new node
  // 4. Increment the length
  // 5. Return the list
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // Implementing GET method (exercise)
  // 1. If the index is less than 0 or greater or equal to the length, return null
  // 2. If the index is less than or equal to half the length of the list:
  // loop through the list starting from the head and loop towards the middle
  // return the node once it is found
  // 3. If the index is greater than half the length of the list:
  // loop through the list starting from the tail and loop towards the middle
  // 4. return the node once it is found
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }
}

// const list = new Node(12);
const list = new DoublyLinkedList();
list.push(12);
list.push(13);
list.push(14);
list.push(15);

// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// list.shift();
// list.unshift(11);
// list.unshift(10);
list.get(1);
// console.log(list.print());
console.log("the value:", list.get(1));
