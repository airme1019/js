/* Valid Anagram*/
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let sArr = s.split('').sort()
    let tArr = t.split('').sort()
    for( let i = 0; i < s.length; i++){
      if( sArr[i] != tArr[i]) return false
    }
    return true
};
var s= "anagrbm"
var t= "nagaram"
//console.log(isAnagram(s,t))

/* 38. Count and Say  https://leetcode.com/problems/count-and-say/
1.     1
2.     11
3.     21
4.     1211
5.     111221
idea: use hash, helper function to read previous row
*/
var countAndSay = function(n) {
    if(n <= 0) return -1
    let res = '1'
    for( let i = 1; i < n; i++) {
      res = helper(res)
      console.log('res'+res)
    }
    return res
};
var helper = function(res) {
  let r = ''
  let j = 0
  while( j < res.length) {
     let count = 0
    let c = res.charAt(j)
    while(res.charAt(j) == c) {
      count++
      j++
    }
    console.log('count '+ count + 'j '+j)
    r += count+c
  }
  return r
}
console.log(countAndSay(10))
