var twoSum = function(nums, target) {
    if(nums.length<2) return []
    if(nums.length == 2){
       return nums
    }
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        let n = target - nums[i]
         let find = hash[n];
          if(find !== undefined) {
            return [n, nums[i]]
        } else {
           hash[nums[i]] = i
          }
    }
    return []
};

const nums = [2, 7, 11, 15]
const target = 9
const t = twoSum(nums,target)
console.log(t)
