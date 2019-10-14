/* find three numbers which sum is 0 in a given array*/
var threeSum = function(nums) {
  var r = [];
  nums = nums.sort((a, b) => a - b);
  console.log(nums)
  if (nums[0] > 0) return r
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i - 1] && i > 0) {
      continue;
    }
    var sum2 = 0 - nums[i];
    var j = i + 1;
    var k = nums.length - 1;
    while (j < k) {

      if (nums[j] + nums[k] == sum2) {
        r.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (nums[j] == nums[j + 1] && j < k) {
          j++;
        }
        while (nums[k] == nums[k - 1] && j < k) {
          k--;
        }
      } else if (nums[j] + nums[k] > sum2) {
        k--;
      } else {
        j++;
      }
    }
  }
  return r;
};
var nums =[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
//[-3,-1,-1,0,1,2]
//var nums =[0,0,0,0];
var nums =[-10,5,3,5,2,5,-4,5];    //[-10,-4,2,3,5,5,5,5]
var nums1 = [1, 2, 3, 4]
//console.log(threeSum(nums));

/*
Count triplets with sum smaller than a given value
*/
var tripletsLessThan = function (arr1, target) {
  let result = []
  let arr = arr1.sort((a,b) => a-b)
  let n = arr1.length
  for (let i = 0; i < n - 2; ++i) {
           let left = i + 1, right = n - 1;
           while (left < right) {
               if (arr[i] + arr[left] + arr[right] < target) {
                 let n = right - left
                 while(n > 0){
                   result.push([arr[i],arr[left],arr[left+n]]);
                   n--
                 }
                   left++;
               } else {
                  right--;
               }
           }
       }
       return result;
}
console.log(tripletsLessThan([1, 2, 3, 4],9));

function threeSumSmaller2(nums, target){
  var res = 0;
  var result = [];
      for(var i = nums.length - 1; i >= 2; i--){
          var left = 0, right = i - 1;
          while(left < right){
              if(nums[left] + nums[right] + nums[i] >= target){
                  right--;
              } else {
                 res += right - left;
                 let n = right - left;
                 while(n > 0){
                   result.push([nums[i],nums[left],nums[left+n]])
                   n--
                 }
                 left++;
              }
          }
      }
      return result;
}
//console.log(threeSumSmaller2([1,2,3,4],9));
