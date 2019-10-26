var removeInvalidParentheses = function(str) {
  let left = 0, right = 0, res = []
  var recurse = function(index, leftCount, rightCount, misplacedLeft, misplacedRight, expression) {
    if ( index = str.length){

      if(misplacedLeft == 0 && misplacedRight == 0){
        res.push(expression)
      }

    } else {
      //discard character, not adding to resulting
      recurse(str,leftCount, rightCount, misplacedLeft, misplacedRight, expression)
      // if char is (
      if( str.charAt(i) == '(') {

      }

      // if char is )
    }
  }
  for (let i = 0; i < str.length; i++) {
    if(str[i] == '('){
      left++
    } else if (str[i] == ')') {
        right = left > 0 ? right : ++right
        left = left > 0 ? --left : 0
     }
  }
//console.log('left '+left + ' right '+right)
}
const str = '(()()))'
 console.log(removeInvalidParentheses(str))
