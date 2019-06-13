/*
https://leetcode.com/problems/daily-temperatures/
*/
var dailyTemperatures = function(T) {
    let res = []
    for ( let i = 0; i < T.length; i += 1) {
      let warmer = false
      for (let j = i + 1; j < T.length; j += 1) {
        if (T[j] > T[i]) {
          warmer = true
          res.push(j-i)
          break
        }
      }
      if( warmer == false) res.push(0)
    }
    return res
};
var dailyTemperatures2 = function(T) {
    let res = new Array(T.length).fill(0)
    let stack = []
    for ( let i = 0; i < T.length; i += 1) {
       while ( stack.length > 0 && T[i] > T[stack[stack.length-1]]) {
         let top = stack.pop()
         res[top] = i - top
       }
       stack.push(i)
    }
    return res
};
const T = [72, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures2(T))
