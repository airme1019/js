var twoSum1 = function(nums, target) {
    if(nums.length<2) return []
    if(nums.length == 2){
       return nums
    }
    let res = []
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
      //console.log(map)
        let adder = target - nums[i]
        console.log('a: ' + adder)
        let find = hash[adder+''];
        console.log(find)
         if(find !== undefined) {
           console.log('aa: ' + hash[adder])
          res = [adder, nums[i]]
          console.log(hash)
          return res
        } else {
          console.log('a1 '+adder)
          hash[adder] = nums[i]
          console.log(hash)
        }
    }
    return []
};
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let map = {};
    for(let i = 0; i < len; i++) {
        let n = target - nums[i];
        let find = map[n];
        console.log(map)
        if(find !== undefined) return [find, i];
        else map[nums[i]] = i;
    }
};
const nums = [2, 7, 11, 15]
const target = 9
const t = twoSum(nums,target)
console.log(t)
