const splitArray = function(nums, m) {
  const isValidSplit = value => {
      let count = 1, current = 0
      for(let i = 0; i < nums.length; i++){
          if (nums[i] > value) return false
          current += nums[i]
          if(current > value){ //split
              current = nums[i]
              count += 1
            }
      }
      return count <= m //check if can be splited into m for value
  }

  let lo= Math.max(...nums), hi = nums.reduce((acc, cur) => acc+cur, 0)
  while( lo <= hi) {
      mid = Math.floor((lo+hi)/2) // guess the max sum of subarray
      if (isValidSplit(mid)){
          hi = mid-1
      } else {
          lo = mid+1
      }
}
  return lo
}
const nums = [7,2,5,10,8]
const m = 3
console.log(splitArray(nums,m))
