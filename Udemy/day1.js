function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// The problem of time
// Different machines will record different times for running the same code
// For fast algorithms, speed measurements may not be precise enough

// How efficient an algorithm is, THE big 0 Notation
// As the input,n, grows how does that affect the runtime of the code

// SPACE COMPLEXITY
// Amount of memory that is taken up by the algorithm , as the input grows
// Auxiliary space complexity is the space required by the algorithm not including space taken up by the inputs

// SPACE COMPLEXITY IN JS
// 1. most primitives (booleans, numbers, undefined, null) are constant space
// 2. Strings require O(n) space (where n is the string length)
// 3. Reference types are generally O(n), where n is the length (for arrays) or number of keys (for objects)

// DAY 2
