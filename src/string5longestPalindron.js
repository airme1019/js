/*
https://leetcode.com/problems/longest-palindromic-substring/
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/
var longestPalindrome = function(s) {
  let longest = 0
  let memo = {}
  let ans = ''
  let start = 1, end = 1;
  var helper = function (left,right) {
    if(memo[[left,right]]) return memo[[left,right]]
    let len = 0
    while(left >= 0 && right <s.length & s.charAt(left) === s.charAt(right)){
      len = Math.max(len, right-left+1)
      left--
      right++
    }
    //console.log(memo)
      return memo[[left,right]] = len
  }
   for (let i = 0; i < s.length; i++) {
    let len1 = helper(i,i+1)
    let len2 = helper(i-1,i+1)
    len = Math.max(len1,len2)
    if (len > end-start+1){
      start = i - Math.floor((len-1)/2)
      end = i + Math.floor(len/2)
    }
    longest = Math.max(longest,len)

    console.log('i '+i+'\n1len '+len1)
    console.log('2len '+len2)
    console.log('------------------')
  }
  return longest > 0 ? s.substring(start,end+1) : s.charAt(0);
}
var s = 'abcba';
console.log(longestPalindrome(s));
