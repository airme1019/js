/*
https://leetcode.com/problems/minimum-path-grid/
Given a m x n grid filled with non-negative numbers, find a path from top
left to bottom right which
minimizes the grid of all numbers along its path.

You can only move either down or right at any point in time.
 */
var minPathSum = function(grid) {
  let x = grid.length
  let y = grid[0].length
  for(let m = 1; m < y; m++ ) {
    grid[0][m] += grid[0][m-1]
  }
  for(let n=1; n< x; n++) {
        grid[n][0] += grid[n-1][0];
    }
  for(let i = 1; i < y; i ++){
    for( let j = 1; j < x; j ++) {
      grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
    }
  }
  return grid[x-1][y-1]
}

const grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
console.log(minPathSum(grid))
