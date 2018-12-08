var maxSlidingWindow = function(nums, k) {
    var max = [];
    if(nums.length <2 || k==1) { return nums;}
    if(nums.length ==2){ m = Math.max(...nums); max.push(m); return max;}
    for(var i = 0; i< nums.length-k+1; i++){
        var m = nums[i];
        for(var j = i+1; j<i+k;j++){            
            if(nums[j] && nums[j]>m){
               m = nums[j];                
               }           
        }      
         max.push(m);
    }
    return max;
};
var nums = [1,3,-1,-3,5,3,6,7];
// console.log(maxSlidingWindow(nums,3));
