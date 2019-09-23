var nums = [0,1,0]
var moveZeroes = function(nums) {
    nums.forEach((item,index) => {
      if(item == 0) {
        nums.splice(index,1)
        nums.push(0)
      }
    })
    return nums
};
console.log(moveZeroes(nums))
