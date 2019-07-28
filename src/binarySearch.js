var search = function(nums, target) {
    let low = 0
    let high = nums.length -1

    while(low<=high){
      let mid = Math.floor((low+high)/2)
      if(target < nums[mid]){
        high = mid-1
      } else if (target> nums[mid]){
        low = mid +1
      } else return mid
    }
    return -1
};
const n =  [-1,0,3,5,9,12]
const t = 9
console.log(search(n,t))
