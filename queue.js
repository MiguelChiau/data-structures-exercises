class Queue {
  constructor() {
    //To keep track of the index of the element to be added next
    this.top = 0;
    //To keep track of the index of oldest added element
    this.bottom = 0;
    //To actually hold the values
    this.storage = {};
  }

  enqueue(val) {
    //To add a new element
    this.storage[this.top] = val;
    //Then increase the top to be able to add the next element
    this.top++;
  }

  dequeue() {
    //Check if the queue is empty
    if (!this.isEmpty()) {
      //To remove an element (always remove the bottom element, LILO)
      let removedElement = this.storage[this.bottom];
      //To actually delete the element
      delete this.storage[this.bottom];
      //Now increase the variable bottom to the next elements
      this.bottom++;
      //Return the value of the element being removed
      return removedElement;
    }
  }

  peek() {
    //Return the next element that will be removed
    return this.storage[this.bottom];
  }

  size() {
    //To return the size of the queue
    return this.top - this.bottom;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

let queue = new Queue();
console.log("queue has initial size of:", queue.size());
console.log("queue is initially empty:", queue.isEmpty());
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
console.log("size:", queue.size());
console.log("next element to be removed is:", queue.peek());
console.log(queue);
queue.dequeue();
console.log(queue);
