var judgeCircle = function(moves) {
    let x = 0, y = 0
    for ( let i = 0; i < moves.length; i += 1) {
      let m = moves.charAt(i)
      if ( m == 'U'){
        y += 1
      } else if ( m == 'D'){
        y -= 1
      } else if ( m == 'L'){
        x -= 1
      } else if ( m == 'R'){
        x += 1
      }
    }
    return x == 0 && y == 0
};
const m = "UDUDD"
console.log(judgeCircle(m))
