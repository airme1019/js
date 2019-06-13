var climbStairs = function(n) {
    let res = []
    let i = 0
    while( i <= n){
      if( i < 3) {
        res[i] = i
      } else {
        res[i] = res[i-2] + res[i-1]
      }
      i++
    }
    return res[n]
};
console.log(climbStairs(4))
