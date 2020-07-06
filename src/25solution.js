const s25 = function() {
  let res = []
  let a = 0
  let b
  let c
  while(a<25){
    //console.log("a: ",a)
    b = a+1
    while(b<25){
      //console.log("b: ",b)
      c = b+1
      while(c<25){
        //console.log("c: ",c)
        if(a+b+c === 25) {
          res.push(`${a}+${b}+${c}`)
          //console.log(`${a}+${b}+${c}`)
        }
        c++
      }
      b++
    }
    a++
  }
  return res
}
const test = s25()
console.log("solutions: ", test)

console.log("solutions: ", test.length)
