var summaryRanges = function(nums) {
  let res = []
  let start = nums[0]
  let range = 1
  for ( let i = 1; i < nums.length; i += 1){
    while(nums[i] == nums[i-1]+1){
      range++
      i++
    }

    console.log('i: '+ i + 'start: '+start + 'range'+range)
    if(range > 1){
      res.push(`${start}->${start+range-1}`)
    } else {
      console.log('range: ' + range)
      res.push(''+start)

    }
    start = nums[i]
    range = 1
  }
  if(start == nums[nums.length - 1]) res.push('' + start)
  return res
};
console.log(summaryRanges([2,4,5,6,7,9]))
