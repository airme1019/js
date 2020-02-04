var permuteUnique = function(nums) {
  nums.sort()
  let ans = [], used = []
  const backtraking = function (temp) {
    // finish permute, add to ans
    if( temp.length == nums.length) {
      console.log(temp)
      ans.push(temp.slice())
    }
    for( let i = 0; i < nums.length; i ++) {
      // when to skip this number
      if ( used[i] || ( i > 0 && nums[i] == nums[i-1] && !used[i-1])){
        continue
      }

      temp.push(nums[i])
      used[i] = true
      backtraking(temp)
      used[i] = false
      temp.pop()
    }
  }
  backtraking([])
  return ans
}

const nums = [1,1,2]
console.log(permuteUnique(nums))

var permutation = function (nums) {
  let ans = []
  const backtracking = function (temp) {
    if( temp.length == nums.length){
      ans.push(temp.slice())
    }

    for (let i = 0; i < nums.length; i++) {
      if(temp.indexOf(nums[i]) >= 0) continue

      temp.push(nums[i])
      backtracking(temp)
      temp.pop()
    }
  }
  backtracking([])
  return ans
}
const nums2 = [1,2,3]
console.log(permutation(nums2))
