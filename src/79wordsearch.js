function exist(board, word) {
  if (board.length === 0) return false;

  const h = board.length;
  const w = board[0].length;

  function go(i, j, k) {
    if (i < 0 || j < 0 || i >= h || j >= w) return false;
    if (board[i][j] !== word[k]) return false;
    if (k === word.length - 1) return true;

    board[i][j] = '*';      // mark as visited

    if (go(i - 1, j, k + 1)) return true;  // up
    if (go(i + 1, j, k + 1)) return true;  // down
    if (go(i, j - 1, k + 1)) return true;  // left
    if (go(i, j + 1, k + 1)) return true;  // right

    board[i][j] = word[k];  // reset
    return false;
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (go(i, j, 0)) return true;
    }
  }

  return false;
}
const board =
[["a","a","a"],
["a","b","b"],
["a","b","b"],
["b","b","b"],
["b","b","b"],
["a","a","a"],
["b","b","b"],
["a","b","b"],
["a","a","b"],
["a","b","a"]]

const word = "aab"
console.log(exist(board, word))
