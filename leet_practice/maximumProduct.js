var maximumProduct = function(nums) {
    if(nums.length>3){
    nums.sort(function(a,b){return b-a;});
      // console.log(nums);
    var f = nums[0]*nums[1]*nums[2]; 
    var l =  nums[nums.length-1]*nums[nums.length-2]*nums[0]; 
    return f>l ? f:l; 
    }else{
        return nums[0]*nums[1]*nums[2];
    } 
};
// console.log(maximumProduct([-5,-4,-3,-6,-2,2]));   
