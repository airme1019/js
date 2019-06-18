var isPerfectSquare = function(num) {
    if (num == 0 || num == 1 || num == 4) return true
    let left = 1
    let right = num/2
    while( left <= right){
      let mid = Math.floor((left+right)/2)
      let square = mid * mid
      if(square > num){
        right = mid-1
      } else if(square < num){
        left = mid +1
      } else return true
    }
    return false
};
console.log(isPerfectSquare(1000))
