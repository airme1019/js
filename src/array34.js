/* 34. Find First and Last Position of Element in Sorted Array
*/
var searchRange = function(nums, target) {

    let low = 0
    let high = nums.length - 1
    let mid = 0
    let start = -1
    let end = 0
     while (low <= high){
       mid = Math.floor((low+high)/2)
       if(target > nums[mid]) {
        low = mid + 1
       } else if (target < nums[mid]){
        high = mid -1
      } else {
        start = mid
        end = mid
         break
      }

    }
    if( start > -1){
    while(nums[start-1] == target && start > 0){
      start--
    }
    while(nums[end+1] == target && end < nums.length){
      end++
    }
  } else return [-1, -1]
    return [start, end]
};
const nums = [5,7,7,8,8,10], target = 8
const t = searchRange(nums,target)
console.log(t)
