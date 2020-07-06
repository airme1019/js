/**/

const findDuplicate = function(numbers){
  let nums = new Set()
  for(let i = 0; i < numbers.length; i ++) {
    if(nums.has(numbers[i])){
      return numbers[i]
    } else nums.add(numbers[i])
  }
}
console.log(findDuplicate([0,0,2,3,3,5]))
