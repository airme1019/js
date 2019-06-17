var mySqrt = function(x) {
    if( x== 0 || x==1) return x
    let left = 1
    let right = x/2
    while(left <= right) {
      let mid = Math.floor((left+right)/2)
      if( mid > x/mid){
        right = mid - 1
      } else {
        if( mid + 1 > x/(mid+1)) return mid
        left = mid + 1
      }
    }
};
console.log(mySqrt(250))
