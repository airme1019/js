/**
 * @param {character[][]} board
 * @return {boolean}
 */
var board = [
  ["5","3",".",".","7",".","",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  ["5","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
var isValidSudoku = function(board) {
  var rows = {}
  var cols = {}
  var squares = {}
  var n = 0
  while(n < 8){
    cols[n] = new Set()
    squares[n] = new Set()
    n++
  }
  console.log(cols)
  for( let i = 0; i < 9; i++) {
    rows[i] = new Set()
    for( let j= 0; j < 9; j++) {
      cols[j] = i == 0 ? new Set() : cols[j]
      if(board[i][j] !== '.') {
        if (rows[i].has(board[i][j]) || cols[j].has(board[i][j])) return false
        rows[i].add(board[i][j])
        cols[j].add(board[i][j])
      }
    }
  }

  return true;
};
const helper = (value, index, table) => {
    if (!table[index]) {
        table[index] = new Set([value]);
    } else {
        if (table[index].has(value)) {
            return false;
        }

        table[index].add(value);
    }

    return true;
}

var isValidSudoku = function(board) {
    const rowsTable = [];
    const columnsTable = [];
    const boxesTable = [];

    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            const value = board[row][column];

            if (value !== '.') {
                const boxIndex = (Math.floor(column / 3) * 3) + (Math.floor(row / 3)) ;

                if (!helper(value, row, rowsTable) ||
                    !helper(value, column, columnsTable) ||
                    !helper(value, boxIndex, boxesTable)
                ) {
                    return false;
                }
            }
        }
    }

    return true;
};
console.log(isValidSudoku(board))
