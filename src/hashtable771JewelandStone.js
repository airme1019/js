/*
https://leetcode.com/problems/jewels-and-stones/
Input: J = "aA", S = "aAAbbbb"
Output: 3
Input: J = "z", S = "ZZ"
Output: 0
*/
var numJewelsInStones = function(J, S) {
    let count = 0
    let i = 0
    while(i < S.length){
      if(J.includes(S.substring(i,i+1))) {
        console.log(S.substring(i,i+1))
        count++
      }
      i++
    }
    return count
};
const J = "aA", S = "aAAbbbbaA"
console.log(numJewelsInStones(J,S))
