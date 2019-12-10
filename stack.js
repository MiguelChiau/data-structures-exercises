class Stack {
  constructor() {
    //The data will be added to an object called storage
    this.storage = {};

    //Now to keep track of the indexes of items being added or removed
    // (0 means we start from index 0)
    this.size = 0;
  }

  push(val) {
    //To add anything to the object we need to access the size variable
    this.storage[this.size] = val;
    this.size++;
  }

  pop() {
    // 1. we need a reference to the top element (size is always one more than the index of the items)
    let top = this.storage[this.size - 1];
    //2. To delete the element
    delete this.storage[this.size];
    //3. Then decrease the size since there's one less element
    this.size--;
    //4. Then return the last element that was just removed
    return top;
  }

  peek() {
    //This method just return the next element that would be removed (but it doesn't actually remove the element itself)
    return this.storage[this.size - 1];
  }

  empty() {
    //To check if the stack it empty
    return this.getSize() === 0;
  }

  getSize() {
    return this.size;
  }
}

let stack = new Stack();
stack.push("a");
stack.push("b");
stack.push("c");
console.log("top", stack.peek(), stack);

stack.pop();
stack.pop();
console.log("top after dequeue: ", stack.peek());
console.log("size after dequeue: ", stack.getSize());
