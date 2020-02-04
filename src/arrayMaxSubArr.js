function maxSubArray(arr) {
  var prev = 0
  var max = Number.MIN_SAFE_INTEGER
  for(let i = 0; i < arr.length; i ++){
    prev = Math.max(arr[i], prev+arr[i])
    max = Math.max(max, prev)
  }
  return max
}
