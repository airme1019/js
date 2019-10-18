var findKthLargest = function(nums, k) {
  let res = [], map = new Map();

  nums.forEach(n => map.set(n, map.get(n) + 1 || 1));

  let sortedArray = [...map.entries()].sort((a, b) => b[0] - a[0]);
  let largest = 0
  for(let i = 0; i < k; i++) {
      //res.push(sortedArray[i][0]);
      largest += sortedArray[i][1]
      if(largest>= k) return sortedArray[i][0]
  }
//console.log(sortedArray)
};
const nums = [3,2,1,5,6,4,7,7], k = 3
console.log(findKthLargest(nums,k))
