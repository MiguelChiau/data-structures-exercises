// function linearSearch(arr, val) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === val) return i;
//   }
//   return -1;
// }
// linearSearch([10, 25, 20, 25, 30], 15);
// console.log(linearSearch());

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.born = year;
    this.tardies = 0;
    this.scores = [];
  }
  // This is an instance that works on each student
  fullName() {
    return `My full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 1) {
      return "WATCH OUT ON YOUR TARDINESS!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScores(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce(function(a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let student1 = new Student("Miguel", "Chiau", "1996");
let student2 = new Student("Mike", "Orlando", "1996");

// console.log(student1.fullName());
// console.log(student1.markLate());
// console.log(student2.markLate());
// console.log(student2.addScores(98));
console.log(student2.calculateAverage(100, 90));
