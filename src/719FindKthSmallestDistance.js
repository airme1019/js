/*
https://leetcode.com/problems/find-k-th-smallest-pair-distance/
*/

/*def smallestDistancePair(nums, k):
    # Return: Is there k or more pairs with distance <= guess? i.e. are
    # there enough?
    def possible(guess_dist):
        i = count = 0
        j = 1
        # Notice that we never decrement j or i.
        while i < len(nums):
            # If the distance calculated from j-i is less than the guess,
            # increase the window on `j` side.
            while (j < len(nums)) and ((nums[j] - nums[i]) <= guess_dist):
                j += 1
            # Count all places between j and i
            count += j - i - 1
            i += 1
        return count >= k

    nums.sort()
    lo = 0
    hi = nums[-1] - nums[0]

    while lo < hi:
        mid = (lo + hi) // 2
        # If `mid` produced `k` or more results we know it's the upper bound.
        if possible(mid):
            # We don't set to `mid - 1` because we found a number of distances
            # bigger than *or equal* to `k`. If this `mid` ends up being
            # actually equal to `k` then it's a correct guess, so let's leave it within
            # the guess space.
            hi = mid
        # If `mid` did not produce enouh results, let's increase  the guess
        # space and try a higher number.
        else:
            lo = mid + 1

    # `lo` ends up being an actual distance in the input, because
    # the binary search mechanism waits until the exact lo/hi combo where
    # 2nd to last `mid` did not produce enough results (k or more), but
    # the last `mid` did.
    return lo
    */
const smallestDistancePair = function(nums,k){
  nums.sort((a,b)=> a-b)
  console.log("sorted ", nums)
  const check = function(distance) {
    let count = 0
    let i = 0, j = 1
    // Notice that we never decrement j or i.
    while( i < nums.length){
        //If the distance calculated from j-i is less than the guess,
        // increase the window on `j` side.
        while (j < nums.length && ((nums[j] - nums[i]) <= distance) ){
            j ++
        }
        // Count all places between j and i
        count += j - i - 1
        i += 1
    }
    console.log("count " +count)
    return count
  }
  let left = 0, right = nums[nums.length-1]- nums[0]
  while(left<right){
    let mid = Math.floor((left+right)/2)
    console.log("mid ", mid)
    //check how many pairs till mid
    let count = check(mid)
    if(count >= k){
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
//const nums = [38,33,57,65,13,2,86,75,4,56]
const nums = [1,3,1]
console.log(smallestDistancePair(nums,1))

// Brute force => runtime error stack overflow
    const smallestDistancePair2 = function(nums, k) {
      let distanceArr = []
      for(let i = 0; i < nums.length; i ++) {
        for( let j = i+1; j < nums.length; j ++){
          distanceArr.push(Math.abs(nums[i]-nums[j]))
        }
      }
      //console.log(distanceArr.sort((a,b)=> a-b))
      return distanceArr.sort((a,b)=> a-b)[k-1]
    }
