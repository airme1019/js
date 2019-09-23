/**
 * @param {character[][]} board
 * @return {boolean}
 */
var board = [
  ["5","3",".","3","7",".","",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

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
