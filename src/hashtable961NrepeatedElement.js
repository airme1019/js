/*
In a array A of size 2N, there are N+1 unique elements,
 and exactly one of these elements is repeated N times.

Return the element repeated N times.
*/
var repeatedNTimes = function(A) {
  let hash = {}
  for (let i = 0; i < A.length; i += 1) {
    if (hash[A[i]]) {
      return A[i]
    } else {
      hash[A[i]] = 1
    }
  }
};
const A = [1, 2, 3, 3]
console.log(repeatedNTimes(A))
