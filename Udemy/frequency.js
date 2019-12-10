// FREQUENCY COUNTER PATTERN
// Write a function called same, which accepts two arrays. The function should
// return true if every value in the array has it's corresponding value squared
// in the second array. The frequency of the values must be the same

// 1.This is the Naive solution
// same([1, 2, 3, 2], [9, 1, 4, 4]);

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     // -1 means if the value is not found
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     //If value is found, 1, remove it from array2
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// Since we have a nested loop then we have a quadratic relationship
// in terms of time complexity
//2. NOW REFACTORING THE SOLUTION

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //Each object counts the frequency of individual values in the arrays
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
