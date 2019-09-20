var nums = [4,1,2,1,2]
var singleNumber = function(nums) {
  const hash = {}
  for (let i = 0; i < nums.length; i ++) {
    let num = nums[i]
    if ( hash[num]) { delete hash[num]
    } else { hash[num] = 1}
  }
  console.log(hash)
  return Object.keys(hash)[0]
};
var r = singleNumber(nums)
console.log(r)
