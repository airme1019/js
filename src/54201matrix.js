/*
https://leetcode.com/problems/01-matrix/
*/
var updateMatrix = function(matrix) {
  let rez = new Array(matrix.length);
   for (let i =0; i < rez.length; i++){
     rez[i] = new Array(matrix[0].length).fill(0);
   }
   function dfs(i,j){
     if(i < 0 || i >= matrix.length || j <0 ||  j >= matrix[0].length ||matrix[i][j] ===Infinity  ){
       return Number.MAX_SAFE_INTEGER;
     }
     if (matrix[i][j] === 0){
       return 0;
     }
     //do not do DFS if at least one neibhour is 0 :
     if(i > 0 && matrix[i-1][j] == 0) return 1;
     if(j < matrix[0].length-1 && matrix[i][j+1] == 0) return 1;
     if(i < matrix.length-1 && matrix[i+1][j] == 0) return 1;
     if(j>0 && matrix[i][j-1] == 0) return 1;

     let temp =  matrix[i][j];
     matrix[i][j] = Infinity;
     let down = dfs(i+ 1,j);
     let up = dfs(i - 1,j);
     let right = dfs(i,j + 1);
     let left = dfs(i,j - 1);
     matrix[i][j] = temp;
     let curMin = Math.min(down, up, right, left) + 1;
     return curMin;
   }
   for (let i =0; i < matrix.length; i++){
     for (let j = 0; j <matrix[0].length; j++ ){
       rez[i][j] = dfs(i,j);
     }
   }
   return rez;
};

  
var updateMatrix2 = function(matrix) {

    // General approach is: Loop over the full matrix to find all zeroes first.
    // Add those to a queue and start a classic BFS, writing down a number +1
    // of the position we find in the Q. That way, all the neigbors of the zeroes will become 1's
    // all their neighbors 2's etc.
    // As we're looking for the initial set of zeroes, mark the others, mark as infinity
    // because we don't want to get confused with future 1s we want to write down.

    let i, l, j, m;

    let q = [];

    // Find all zeroes in the matrix
    for (i = 0, l = matrix.length; i < l; i++) {
        for ( j = 0, m = matrix[0].length; j < m; j++) {
            if (matrix[i][j] === 0) {
                // Note the third param here, a zero to keep track of which "level" we're at.
                // The zeroes are obviously at zero.
                // Later in the bfs we will increase this for each unvisited neighbor
                q.push([i, j, 0]);
            } else {
                matrix[i][j] = Infinity;
            }
        }
    }

    // little helper array to find neighbors in a quick forEach loop.
    let dir = [[1,0],[0,1],[-1,0],[0,-1]];

    // Start BFS. BFS is the right choice so we minimize attempted double visits
    // BFS is like a stain that spreads, while DFS is like tendrils reaching out.
    while (q.length) {
        let pos = q.shift();

        // write value if we find it's lower than current (like those infinities)
        if (matrix[pos[0]][pos[1]] > pos[2]) {
            matrix[pos[0]][pos[1]] = pos[2];
        }

        // Look at all neighbor positions. Are they on the board? Are they not yet visited?
        // If yes to both, add to the q, with an increased "level" param at pos [2]
        dir.forEach(function(d) {
            let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];
            // valid next coordinates?
            if (next[0] > -1 && next[0] < matrix.length && next[1] > -1 && next[1] < matrix[0].length) {
                // not yet marked?
                if (matrix[next[0]][next[1]] === Infinity) {
                    // add to q, but with increased index, which we stored at pos[2]
                    q.push(next);
                }
            }
        });
    }
    return matrix;
};

const matrix =
[[0,0,0],
 [0,1,0],
 [1,1,1]]
 console.log(updateMatrix(matrix))
