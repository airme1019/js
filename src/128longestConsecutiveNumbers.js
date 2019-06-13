var longestConsecutive = function(nums) {
  if(nums == [] || nums.length == 1) return nums.length
    const hash = {}
    for( num of nums) hash[num] = true
    let longest = 0
    for( let i = 0; i < nums.length; i += 1){
      let count = 1
      let n = nums[i] + 1
      while(hash[n]){
        n++
        count++
      }
      longest = count > longest ? count : longest
    }
    return longest
};

const nums = [1]
console.log(longestConsecutive(nums))
