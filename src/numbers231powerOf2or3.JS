var isPowerOfTwo = function(n) {
    if (n == 0) return false
    if (n == 1) return true
    while(n%2 == 0) n /=2
    return n == 1
};
var isPowerOfTwo2 = function(n) {
  return n > 0 && (n == 1 || (n%2 == 0 && isPowerOfTwo2(n/2)))
};
//console.log(isPowerOfTwo(132))
//console.log(Math.pow(2,30))

var isPowerOfThree = function(n) {
    if ( n == 0) return false
    if ( n == 3) return true
    while ( n%3 == 0) n /= 3
    return n == 1
};
var isPowerOfThree2 = function(n) {
  return n > 0 && (n==1 || (n%3 == 0 && isPowerOfThree2(n/3)))
}
console.log(isPowerOfThree2(729))
