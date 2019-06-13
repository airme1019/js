/*
Given two sorted arrays A and B, generate all possible arrays such that
first element is taken from A then from B then
from A and so on in increasing order till the arrays exhausted.
The generated arrays should end with an element from B.
*/
const alternateArray = function(a, b) {
  let result = []

  generateArray(a, b, 0, 0, true, result)
}
/* Utility function */
const generateArray = function(a, b, aIndex, bIndex, fromA, result) {
  let arr = []
  if (aIndex >= a.length || bIndex >= b.length) {
    result.pop();
    return;
  }
  if (fromA) {
    for (let i = aIndex; i < a.length; i++) {
      if (a[i] >= b[bIndex]) {
        result.push(a[i]);

        generateArray(a, b, i, bIndex+1, false, result);
     }
    }
  } else {
    for (let j = bIndex; j < b.length; j++) {
      if (a[aIndex] < b[j]) {
        result.push(b[j]);

        console.log(result)
        generateArray(a, b, aIndex + 1, j, true, result);
      }
    }
  }
  result.pop()
}
const A = [10, 15, 25]
const B = [20,30, 45]
let r = []
const test = alternateArray(A, B)
