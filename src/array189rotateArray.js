/*Input: [1,2,3,4,5,6,7,8] and k = 3
Output: [6,7,8,1,2,3,4,5]*/
var nums = [1,2,3,4,5,6,7,8,9]
k = 3
var rotate = function(nums, k) {
  var len = nums.length
    return nums.splice(nums.length-k).concat(nums.splice(0,len - k+1))
};

var rotate2 = function(nums, k) {
  var i = 0
  while( i < k%nums.length) {
    let n = nums.pop()
    nums.unshift(n)
    i++
  }
  return nums
};

var t = rotate2(nums,11)
console.log(t)
