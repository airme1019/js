/* */
var gameOfLife = function(board) {
  let res = []
  for (let x= 0; x< board.length; x += 1) {
    res[x] = []
    for( let y = 0; y < board[0].length; y += 1){
      let live = count(board,x,y)
      let nextLife = 0
      if(live == 3){
        nextLife = 1
      } else if( board[x][y] == 1 ){
        if(live < 2) {
          nextLife = 0
        } else if( live == 2){
          nextLife = 1
        } else if( live >3){
          nextLife = 0
        }
      }
      res[x].push(nextLife)
    }
  }
  //console.log(res)
  for (let x= 0; x< board.length; x += 1) {
    for( let y = 0; y < board[0].length; y += 1){
      board[x][y] = res[x][y]
    }
  }
  return board
};
var count = function(board, x, y) {
  let live = 0
  for (let i = Math.max(x-1, 0); i <= Math.min(x + 1, board.length - 1); i += 1) {
    for(let j = Math.max(y-1, 0); j <= Math.min(y + 1,board[0].length - 1 ); j += 1 ){
      if (board[i][j] == 1){
        live += 1
      }
    }
  }
  if ( board[x][y] == 1) live--
  return live
}
let b = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
//console.log(gameOfLife(b))
//console.log(count(b,0,0))
console.log((10 >>> 0).toString(2))
