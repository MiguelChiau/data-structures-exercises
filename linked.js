// // Practicing Linked lists

// //Suppose we have a node with data of 100
// const n1 = {
//   data: 100
// };

// //Then another node with data 200
// const n2 = {
//   data: 200
// };

// //Now supposed we want to link these two nodes together
// // add a reference from n1 to n2
// n1.next = n2;
// console.log(n1);

//The class Node will represent each individual node
class Node {
  //Each node will take data and a pointer
  // (next, by defaul set to null because the last one references to null)
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// // Now to construct an actual node
// const n1 = new Node(100);
// console.log(n1);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Now the methods we want to create
  //1. Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //2. Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    this.size++;

    //If empty, make a head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //3. Insert at an index
  insertAt(data, index) {
    //if the index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    //if it's the first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //The node before the index
      count++;
      current = current.next; //The node after teh index
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }
  //4. Get an index

  //5. Remove at an index

  //6. Clear the lists

  // 7. Print thr list of data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(200);
ll.insertFirst(400);
ll.insertFirst(800);
ll.insertLast(1000);
ll.insertAt(600, 10);

ll.printListData();
