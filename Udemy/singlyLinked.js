// val - is the piece of data
// next - is the reference to the next node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//When initializing singly linked list it doesn't need arguments
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Implementing PUSH method
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Implementing POP method (exercise)
  // 1. If there are no nodes in the list, return undefined
  // 2. Loop through the list until reaching a tail
  // 3. Set the next property of the 2nd to last node to be null
  // 4. Set the tail to be the 2nd to last node
  // 5. Decrement the length of the list by 1
  // 6. Return the value of the node removed
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    //Then check if the list is now empty
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //   Implementing SHIFT method (exercise)
  // 1. If there are no node return undefined
  // 2. Store the current head property in a variable
  // 3. Set the head property to the current head's next property
  // 4. Decrement the length by 1
  // 5. Return the value of the node removed
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  //   Implementing UNSHIFT method (exercise)
  // 1. This function should accept a value
  // 2. Create a new node using the value passed to teh function
  // 3. If there is no head property on the list, set the head and tail to be the newly created node
  // 4. Otherwise, set the newly created node's next property to be the current head property on the list
  // 5. Set the head property on the list to be that newly created node
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //   Implementing GET method (exercise)
  //   This method takes na index/position and returns the corresponding node
  // 1. This function should accept an index
  // 2. If the index is less than zero or greater than or equal to teh length of the list, return null
  // 3. Loop through the list until reaching the index and return the node at that specific index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Implementing SET method (exercise)
  // 1. This function should accept a value and an index
  // 2. Use your get function to find the specific node
  // 3. If the node is not found, return false
  // 4. If the node is found, set the value of node to be the value passed to the function and return true
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Implementing INSERT method (exercise)
  // 1. If the index < 0 || index > length return false;
  // 2. If index = length, push new node to the end of the list
  // 3. If index = 0, unshift a new node to teh start of the list
  // 4. Otherwise using the get method access the node at the index -1
  // 5. Set the next property on that node to be the new node
  // 6. Set the next property on the new node to be the previous next
  // 7. Increment the length
  // 8. return true
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //Implement REMOVE method (exercise)
  // 1. If the index < 0 || index > length, return undefined
  // 2. If index ==== length-1, pop
  // 3. If index = 0,  shift
  // 4. Otherwise, suing the get method, access the node at the index-1
  // 5. Set the next property on that node to be the next of the next node
  // 6. Decrement the length
  // 7. Return teh value of the node removed
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // Implementing REVERSE method (exercise)
  // 1. Swap the head and tail
  // 2. Create a variable called next
  // 3. Create a variable called prev
  // 4. Create a variable called node and initialize it to the head property
  // 5. Loop through the list
  // 6. Set next to be the next property on whatever node is
  // 7. Set the next property on the node to be whatever prev is
  // 8. Set prev to be the value of teh node variable
  // 9. Set the node variable to be the value of the next variable
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (var i = 0; i < list.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
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
}

let list = new singlyLinkedList();
list.push("I am FIRST");
list.push("I am LAST");
list.push("I am MIDDLE");
list.push("!!!");
list.push("😇");

// console.log(list);
// console.log(list.pop());
// console.log(list.push(90));
// list.pop();
// list.shift();
// list.push(20);
// list.unshift("new");
// list.unshift("new new");

// console.log(list);
// list.get(2);
// console.log(list.get(2));
// list.set(0, "I am the set item");
// console.log(list.get(-0));
// console.log(list.get(-0));
// list.remove(2);
// console.log(list);
console.log(list.print());
// console.log(list.reverse());
list.reverse();
console.log(list.print());
