var fib = function(n) {
  let fib = {}
  fib[0] = 0
  fib[1] = 1
  if(n<2) return fib[n]
  let i = 2
  while(i<=n){
    fib[i] = fib[i-1] + fib[i-2]
    console.log(fib)
    i++
  }
  return fib[n]
}
console.log(fib(4))
