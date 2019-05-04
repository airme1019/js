var findDisappearedNumbers = function(nums) {
    let missing = []
    for ( let i = 0; i < nums.length; i +=1) {
      let pos = Math.abs(nums[i]) - 1
      console.log(nums[i] + ' pos '+pos)
      // mark as visited
      nums[pos] = 0 - nums[pos]
      console.log(nums[pos])
    }
    for ( let i = 0; i < nums.length; i +=1) {
      if (nums[i] > 0) missing.push(i+1)
    }
    return missing
};
//let nums = [1,3,5,6]
//console.log(findDisappearedNumbers(nums))

var findDisappearedNumbers2 = nums => {
  let min = Math.min(...nums)
  let max = Math.max(...nums)
  let res = []
  for ( let i = min; i <=max; i += 1){
    if (! nums.includes(i)) res.push(i)
  }
  return res
}
//console.log(findDisappearedNumbers2(nums))

var firstMissingPositive = function(nums) {
  nums = nums.filter(num => num > 0)
  let min = Math.min(...nums)
  if ( min > 1) return 1
  while(nums.includes(min)) {
    min++
  }
  return min
};
let nums = [4,2,6,-2,3,5,8]
console.log(firstMissingPositive(nums))
