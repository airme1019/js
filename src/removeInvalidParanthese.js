var removeInvalidParentheses = function(s) {
    let arr = s.split('')
    let close = []
    for(let i = 0; i < arr.length; i += 1){
      let p = arr[i]

      if ( p == '('){
        close.push([i, ')'])
      } else {
        if (!p.match(/[a-z]/i)){
          console.log('not char')
          let pop = close.pop()
          console.log(pop)
          if(pop == undefined || (pop !== undefined && p !== pop[1])) arr[i] = ''
        }
      }
    }
    if(close.length > 0){
      close.forEach( item => {
        arr[item[0]] = ''
      })
    }
    return arr.join('')
};
const s = "()())()"
console.log(removeInvalidParentheses(s))
