// //Using extend from an array allow to have access to push, pop methods
class Stack extends Array {
  constructor(...elements) {
    //super refers to an empty array (where we are extending from)
    super(...elements);
  }

  pop() {
    if (this.length === 0) throw new Error("No element to pop");
    //We use super because the method we want to call is in the parent class
    super.pop();
  }

  //Peek allows to look up what the last element in a stack is
  peek() {
    if (this.length === 0) throw new Error("The stack in empty");

    return this[this.length - 1];
  }

  size() {
    return this.length;
  }
}

// const s = new Stack(1, 2, 3);
// console.log(s);
// s.push(5);
// console.log(s);
// s.pop();
// console.log(s.peek());
// console.log(s);

// EXAMPLE
// Given the strings bellow check is they are correct/valid
const string1 = "[[{([[({})]])}]]"; //This is fine
const string2 = "[[{([[({}]]])}]]"; //This isn't fine

function check(string) {
  const arr = string.split(""); //split the brackets/braces and put them on an array
  const stack = new Stack();

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (
      currentElement === "[" ||
      currentElement === "{" ||
      currentElement === "("
    ) {
      stack.push(currentElement);
    } else {
      if (stack.size() === 0) {
        console.log("Failed at 1");
        return false;
      }

      const lastElement = stack.peek();
      stack.pop();
      if (lastElement === "[" && currentElement === "]") {
      } else if (lastElement === "{" && currentElement === "}") {
      } else if (lastElement === "(" && currentElement === ")") {
      } else if (lastElement === "[" && currentElement === "]") {
      } else {
        return false;
      }
    }
  }

  if (stack.size() !== 0) {
    return false;
  }
  return true;
}

console.log(check(string1));
console.log(check(string2));
