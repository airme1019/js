/*Given an array of distinct integers, find length of the longest subarray which contains numbers that can be arranged in a continuous sequence.

Examples:

Input:  arr[] = {10, 12, 11};
Output: Length of the longest contiguous subarray is 3

Input:  arr[] = {14, 12, 11, 20};
Output: Length of the longest contiguous subarray is 2

Input:  arr[] = {1, 56, 58, 57, 90, 92, 94, 93, 91, 45};
Output: Length of the longest contiguous subarray is 5
*/
var maxLengthSubarray =  function (arr) {
  arr.sort((a,b) => a - b)
  let maxLength = 1
  let len = 1
  for( let i = 1; i < arr.length; i += 1){
    if(arr[i] == arr[i-1] + 1){
      len++
    } else {
      maxLength = Math.max(maxLength, len)
      len = 1
    }
  }
  return Math.max(maxLength, len)
}
console.log(maxLengthSubarray([13,22,6,37,8,1,4]))
