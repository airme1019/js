var missingNumber = function(nums) {
    let m = Math.max(...nums)
    let sum = (m*(m+1))/2
    let realSum = nums.reduce((acc,val) => acc += val)
    return sum - realSum
};
console.log(missingNumber([1,3,2,5]))
