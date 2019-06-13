var palindromePairs = function(words) {
  let res = []
  for ( let i = 0; i < words.length; i += 1) {
    for( let j = i +1; j < words.length; j++){
      //if(words[i].charAt(0) !== words[j].charAt(words[j].length - 1)) continue
      if (palindrome(words[i]+words[j])) res.push([i,j])
      if (palindrome(words[j]+words[i])) res.push([j,i])

    }
  }
  return res
};
var palindrome = function (s){
  let left = 0
  let right = s.length - 1
  while( left < right){
    if(s.charAt(left) !== s.charAt(right))return false
    left++
    right--
  }
  return true
}
const w = ["abcd","dcba","lls","s","sssll"]
//console.log(palindromePairs(w))
//console.log(palindrome('abcba'))
console.log(Math.sqrt(100))
