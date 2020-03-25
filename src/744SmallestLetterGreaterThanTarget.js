/* https://leetcode.com/problems/find-smallest-letter-greater-than-target/ */
var nextGreatestLetter = function(letters, target) {
    let left = 0, right = letters.length -1
    let next = letters[0]
    while(left <= right) {
      let mid = Math.floor((left+right)/2)
      console.log("mid ", mid)
      if(letters[mid] > target){
        next = letters[mid]
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return next
};
const letters = ["e","e","e","e","e","e","n","n","n","n"], target = "e"
console.log(nextGreatestLetter(letters, target))
