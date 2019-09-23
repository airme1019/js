var reverse = function(x) {
    var res = 0
    var positive = x > 0 ? true : false
    x = Math.abs(x)
    while(x > 0){
      res = res*10 + x%10
      x = Math.floor(x/10)
    }
    res = positive ? res : res*(-1)
    return res > Math.pow(2,31) || res < (-1)*Math.pow(2, 31) ? 0 : res
};
console.log(reverse(-123))
