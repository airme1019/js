var fizzBuzz = function(n) {
  //if( n == 1) return ['1']
  let res = []
  let i = 1
    while(i <= n){
      if( i%15 == 0){
        res.push('FizzBuzz')
      } else if (i%3 == 0) {
        res.push('Fizz')
      } else if (i%5 == 0) {
        res.push('Buzz')
      } else res.push(''+ i)
      i++
    }
  return res
};
console.log(fizzBuzz(12))
