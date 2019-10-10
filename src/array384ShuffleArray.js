/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = nums.slice()
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.original
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
   for(let i = 0; i < this.nums.length; i ++) {
    let temp = this.nums[i]
    let random =  i + Math.floor(Math.random()* (this.nums.length-i))
    this.nums[i] = this.nums[random]
    this.nums[random] = temp
  }
  return this.nums
};

/**
 * Your Solution object will be instantiated and called as such:
 */
  var obj = new Solution([1,3,5,2])
  var param_1 = obj.reset()
  var param_2 = obj.shuffle()

  console.log(param_2)
console.log(param_1)

/* Copy array shallow copy*/
 nestedNumbers = [[1], [2]];
numbersCopy = [...nestedNumbers];
console.log(numbersCopy)
