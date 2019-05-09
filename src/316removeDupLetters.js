var removeDuplicateLetters = function(s) {
  if(s.length == 0) return ''
  let len = s.length
  let stack = []
  for ( let i = 0; i < len; i += 1) {
    let c = s.charAt(i)
    if(stack.includes(c)) {
      let pos = stack.indexOf(c)

          if(stack[pos] > stack[stack.length-1]) {
            stack.splice(pos,1)
            stack.push(c)
          }
     } else {
      stack.push(c)
    }
  }
  console.log(stack)
return stack.filter( c => c != 0).join('')
};

const s = "bcabc"
const s2 = "cbacdcbc"
console.log(removeDuplicateLetters(s2))
//console.log('f'-'b')
