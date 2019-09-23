var nums = [1,2,3,2,3]
var containsDuplicate = function(nums) {
    if (nums.length == 0 || nums.length == 1) return false
    let occ = {}
    for( let i = 0; i < nums.length; i++) {
      let num = nums[i]
      if (occ[num] == 1){
        return true
      } else { occ[num] = 1}
    }
    return false
};

var containsDuplicate2 = function(nums) {
  var s = new Set(nums)
  return s.size < nums.length
}
var res = containsDuplicate2(nums)
console.log(res)
