var findPeakElement = function(nums) {
  if(nums.length == 0) return null
  if(nums.lenght <= 2) return nums[0]
  if(nums.length == 3) return nums[1]

    let left = 0
    let right = nums.length - 1
    while(left +1 < right){
      let mid = Math.floor((left+right)/2)
      if(nums[mid-1]<nums[mid]>nums[mid+1]){
        return mid
      } else if(nums[mid-1]<nums[mid]<nums[mid+1]){
        left = mid + 1
      } else {
        right = mid
      }
    }
    return nums[left] > nums[right] ? left : right;
};
const n = [1,2,3,2]
console.log(findPeakElement(n))
