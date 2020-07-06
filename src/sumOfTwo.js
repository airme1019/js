
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// UPDATE (2016/2/13):
// The return format had been changed to zero-based indices. Please read the above updated description carefully.

// Hide Company Tags LinkedIn Uber Airbnb Facebook Amazon Microsoft Apple Yahoo Dropbox Bloomberg Yelp Adobe
// Hide Tags Array Hash Table
// Hide Similar Problems (M) 3Sum (M) 4Sum (M) Two Sum II - Input array is sorted (E) Two Sum III - Data structure design
var nums = [2, 7, 6, 3], target1 = 9;
var res = function(nums, target){
  var hash = {};
  var resArr = [];
  for( var i = 0; i< nums.length; i++){
    let num = nums[i];
    if(hash[num] != undefined){
      // console.log('hash is there ' + hash[num]);
      resArr.push([i, hash[num]]);
    } else{
      // console.log('no hash ');
      hash[target-num] = i;
      // console.log(hash[target-num]);
    }
  }
  return resArr;
}
//res(nums,target1);
// console.log(res(nums,target));

/*167. Two Sum II - Input array is sorted*/
const twoSum = (numbers, target) => {
    let p1 = 0
    let p2 = numbers.length - 1

    while (numbers[p1] + numbers[p2] !== target) {
        if (numbers[p1] + numbers[p2] > target) {
            p2--
        } else {
            p1++
        }
    }

    return [p1 + 1, p2 + 1]
}
const numbers = [2,7,11,15]
const target =22
console.log(twoSum(numbers,target))
