Function.prototype.memoize = function () {
  var self = this
  return function() {
    var args = Array.prototype.slice.call(arguments)
    //console.log(args)
    self.cache = self.cache || {}
    //console.log(self.cache)
    console.log(self.cache)
    return self.cache[args] ? self.cache[args] : (self.cache[args] = self(args))

  }
}

function sqrt (n) {
  return Math.sqrt(n)
}

memoizedSqrt = sqrt.memoize()
console.log(memoizedSqrt(4))
console.log(memoizedSqrt(8))
console.log(memoizedSqrt(16))
console.log(memoizedSqrt(100))
console.log(memoizedSqrt(9))
console.log(memoizedSqrt(169))
