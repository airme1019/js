var increasingTriplet = function(nums) {
  if(nums.length<3){ return false }

  for ( let i = 0; i < nums.length-2; i++) {
    let start = nums[i]
    let sub = [start];
    for(let j = i+1; j < nums.length; j++) {
      if(nums[j] < sub[sub.length-1] && nums[j]> sub[0]) {
        sub.pop()
        sub.push(nums[j])
      } else if (nums[j] > sub[sub.length-1]&& nums[j]> sub[0]){
        sub.push(nums[j])
      }
      console.log(sub)
      if(sub.length >= 3) {return true}
    }
  }
  return false
};
const nums1 = [5,1,5,5,2,5,4]
const nums2 = [6,1,2,3,1,2,1]
const nums3 = [0,4,2,1,0,-1,-3]
const nums4 = [2,1,5,0,3]
const nums5 = [1,1,1,1,1]
console.log(increasingTriplet(nums5))
