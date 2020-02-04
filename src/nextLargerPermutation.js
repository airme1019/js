/*https://leetcode.com/problems/next-permutation/*/
var nextPermutation = function(nums) {
  let len = nums.length
  let m = len-2
    for ( let i = len-2; i >= 0; i -= 1) {
      if(nums[i] < nums[i+1]) {
        m = i
        break
      }
    }
     if (m < 0){
      return nums.reverse()
    } else {
      for ( let i = len-1; i > m; i -= 1) {
        if(nums[i] > nums[m]) {
           let temp = nums[m]
           nums[m] = nums[i]
           nums[i] = temp
           break
        }
      }
      return nums.slice(0,m+1).concat(nums.slice(m+1).reverse())
    }
};


let nums = [1,5,2]
console.log(nextPermutation(nums))
