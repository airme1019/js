var subarraySum = function(nums, k) {
  let map = {}
  let sum = 0
  let res = 0
    for( let i =  0; i< nums.length; i += 1){
      sum += nums[i]
      if(sum == k) {res++}
      map[sum] = i
      let diff = sum - k
      if(map[diff] !== undefined ) {
        res++
        console.log(nums.slice(map[diff]+1, i+1))
      }
    }
    console.log(map)
    return res
};
const n = [3,2,7,1,3,6,10]
const k = 10
console.log(subarraySum(n,k))
