// LEET CODE PROBLEM
/*Implement Stack using Queues

Implement the following operations of a stack using queues

*push(x) -- Push element x onto stack
*pop() -- Removes the element on top of the stack
*top() -- Get the top element
*empty() -- Return whether the stack is empty

EXAMPLE:

myStack Stack = new my Stack();

stack.push(1);
stack.push(2);
stack.top();  //returns 2
stack.op();  //returns 2
stack.empty();  //returns false


NOTES:
1. You must use only operations of a queue -- which means only
push to back, peek/pop from front, size and is empty operations are valid

2. Depending on your language queue, may not be supported natively. You
may simulate a queue by using a list or dequeue (double-ended queue); as
long as you use only standard operations of a queue

3. You may assume that all operations are valid ()


*/

// EXERCISE: IMPLEMENT QUEUE USING STACKS
// 1. Initialize the data structure
var MyQueue = function() {
  // This is the stack where we add things to
  this.pushStack = new Stack();
  //   This is the stack where we remove things from
  this.popStack = new Stack();
};

// 2.Push element X to the back of queue
MyQueue.prototype.push = function(x) {
  this.pushStack.push(x);
};

// 3. Removes the elements in front of queue and returns that element
MyQueue.prototype.pop = function() {
  if (this.popStack.empty()) {
    while (!this.popStack.empty()) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.pop();
};

// 4. Get the front element
MyQueue.prototype.peek = function() {
  if (this.popStack.empty()) {
    while (!this.popStack.empty()) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.peek();
};

// 5. Whether the queue is empty
MyQueue.prototype.empty = function() {
  return this.popStack.empty() && this.pushStack.empty();
};

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }
}
