var removeInvalidParentheses = function(str) {
  let misLeft = 0, misRight = 0, res = []
  var recurse = function(index, leftCount, rightCount, misplacedLeft, misplacedRight, expression) {
console.log('index ' +index
+' leftCount '+leftCount + ' rightCount '+ rightCount
 +' misleft '+ misplacedLeft + ' misR '+misplacedRight +' expresson '+expression)
    // traversing reached the end of str
    if ( index == str.length){

      // no misplaced parentheses
      if(misplacedLeft == 0 && misplacedRight == 0){

        res.push(expression)
      }

    } else {
      //console.log('expression123 '+expression+ 'rightC'+rightCount+' lc'+leftCount)
      let char = str.charAt(index)
      //console.log('char ' + char)

      // if there is still misplaced parenthese, discard character, do not add to result
      if((char == '(' && misplacedLeft > 0) || (char == ')' && misplacedRight > 0)){
        recurse(
          index + 1,
          leftCount,
          rightCount,
          misplacedLeft = char == '(' ? misplacedLeft-1 : misplacedLeft,
          misplacedRight = char == ')' ? misplacedRight-1 : misplacedRight,
          expression)
      }

      // no misplaced ( or )
      expression = expression + char
      //console.log('exp ' + expression)
      if (char !== '(' && char !== ')') { // char is not ( or )
      recurse(index + 1, leftCount, rightCount, misplacedLeft, misplacedRight, expression)
    } else if (char == '(') { // if char is ( and there is no misplaced (
      recurse(index + 1, leftCount + 1, rightCount, misplacedLeft, misplacedRight, expression)
    } else if (rightCount < leftCount) { // char is ) and right is less then left, filter out the invalid expression
      recurse(index + 1, leftCount, rightCount+1, misplacedLeft, misplacedRight, expression)
    } 

    expression.substring(0, expression.length-1)
    //console.log('exp222 ' + expression)

    }
  }

  for (let i = 0; i < str.length; i++) {
    if(str[i] == '('){
      misLeft++
    } else if (str[i] == ')') {
        misRight = misLeft == 0 ? misRight + 1 : misRight;
        misLeft = misLeft > 0 ? misLeft - 1 : misLeft;
     }
  }
  //console.log('left '+misLeft + ' right '+misRight)
  recurse(0,0,0,misLeft,misRight,'')
  return res
}
const str = '(())())'
 console.log(removeInvalidParentheses(str))
