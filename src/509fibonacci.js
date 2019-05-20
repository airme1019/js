var fib = function(N) {
    let fib = []
    let i = 0
    while(i <=N){
      if(i<2) {
        fib[i] = i
      } else {
        fib[i] = fib[i-2]+fib[i-1]
      }
      i++
    }
    return fib[N]
};
console.log(fib(5))
