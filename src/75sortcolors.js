/* https://leetcode.com/problems/sort-colors/ */
var sortColors = function (nums) {
  var i = 0
  while( i < nums.length && i >=0) {
    if(nums[i] < nums[i-1]) {
       swap(i, i-1)
      i--
    } else { i++}
  }
  function swap (a,b) {
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
   }
  return nums
}
/*Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]*/
const nums = [2,0,2,1,1,0]
console.log(sortColors(nums))

var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
console.log(keysSorted); 
