var evalRPN = function(tokens){
  let ans = 0
  let stack = []
  const operators = {
    "+": true,
    "-": true,
    "*": true,
    "/": true
  }
  if(tokens.length == 1) return tokens[0]
  for( let i = 0; i < tokens.length;  i ++){
    if(operators[tokens[i]]) {
      const second = stack.pop()
      const first = stack.pop()
      let res = 0
      switch(tokens[i]) {
        case '+':
          res = Number(first) + Number(second)
          break
        case '-':
          res = Number(first) - Number(second)
          break
        case '*':
          res = Number(first) * Number(second)
          break
        case '/':
          res = Number(first) / Number(second)
          res = res > 0 ? Math.floor(res) : Math.ceil(res)
          break
      }
      ans = res
      stack.push(res+'')
    } else {
      stack.push(tokens[i])
    }
  }
  return ans
}
const tokens = ["16"]
console.log(evalRPN(tokens))
