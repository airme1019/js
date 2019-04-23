/*
Given two sorted arrays A and B, generate all possible arrays such that
first element is taken from A then from B then
from A and so on in increasing order till the arrays exhausted.
The generated arrays should end with an element from B.
*/
var alternateArray = function (a, b) {
  let result = []
  for (let i = 0, j = 0; i < a.length && j < b.length; i += 1, j +=1) {
    let r = []
      while (a[i] > b[j]){
        j ++
      }
      while (a[i] < b[j]) {
        r.push(a[i])
        r.push(b[j])
        i++
        if(b[j]>a[i]) i++
        j++
      }

    if (r.length > 1) result.push(r)
  }
  return result
}

const A = [10, 15, 25]
const B = [1, 5, 20, 30]
const test = alternateArray(A,B)
console.log(test)
