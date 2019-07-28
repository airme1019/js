var findMin = function(nums) {
    var min = 0;
    var max = nums.length - 1;

    if(nums.length === 0){
        return -1;
    }

    if(nums.length === 1){
        return nums[0];
    }

    while(min <= max){
        var middle = Math.floor((max+min)/2);

        if(((nums[middle] < nums[middle+1] && nums[middle] < nums[middle-1])
            || (nums[middle] < nums[middle-1]) && nums[middle+1] === undefined)){
            return nums[middle];
        }

        if(nums[min] > nums[max]){
            if(nums[min] <= nums[middle]){
                min = middle + 1;
            } else {
                max = middle - 1;
            }
        } else {
            return nums[min];
        }
    }
};
const n = [1,2,3,4,5,6]
console.log(findMin(n))
