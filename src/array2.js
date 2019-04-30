/*
Find the smallest positive integer value that cannot be represented as sum of any subset of a given array

Given a sorted array (sorted in non-decreasing order) of positive numbers, find the smallest positive integer value that cannot be represented as sum of elements of any subset of given set.
Expected time complexity is O(n).

Examples:

Input:  arr[] = {1, 3, 6, 10, 11, 15};
Output: 2

Input:  arr[] = {1, 1, 1, 1};
Output: 5

Input:  arr[] = {1, 1, 3, 4};
Output: 10

Input:  arr[] = {1, 2, 5, 10, 20, 40};
Output: 4

Input:  arr[] = {1, 2, 3, 4, 5, 6};
Output: 22
*/
var findSmallest = function (arr) {
  let res = 1
  for ( let i = 0; i < arr.length; i += 1){
    if (arr[i] <= res){
      res += arr[i]
    } else break
  }
  return res
}
console.log(findSmallest([1,2,3,6,1,11]))


/* Insert item in array */
var a1 = [1,2,3,6,1,11]
var insertArr = function (arr, k, num) {
  if (k==0) return [num].conact(...arr)
  if (k >= arr.length) return arr.concat(num)
  return arr.slice(0,k).concat([num]).concat(arr.slice(k))
}
//console.log(insertArr(a1,1,3))
