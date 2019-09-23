/*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3

 void rotate(vector<vector<int> > &matrix) {
    reverse(matrix.begin(), matrix.end());
    for (int i = 0; i < matrix.size(); ++i) {
        for (int j = i + 1; j < matrix[i].size(); ++j)
            swap(matrix[i][j], matrix[j][i]);
    }
}
*/
var m = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

var rotate = function(matrix) {
  const len = matrix.length
  for (let i = 0; i < Math.floor(len/2); i ++) {
    let temp = matrix[i]
    matrix[i] = matrix[len-i-1]
    matrix[len-i-1] = temp
  }
  //console.log(matrix)
  for (let r = 0; r < len; r ++){
    for( let c = r+1; c < len; c ++) {
      if( r !== c) {
        let temp2 = matrix[r][c]
        matrix[r][c] = matrix[c][r]
        matrix[c][r] = temp2
        //console.log(matrix)
      }
    }
  }
  return matrix
};

/* allocate hash table */
var rotate2 = function (m) {

  var len = m.length
  var hash = []
  for ( let c = 0; c < len; c ++) {
    hash[c] = []
    for(let r = 0; r < len; r++){
    let val = m[r][c];
     hash[c].unshift(val);
   }
   }
  return hash
}
var t = rotate2(m)
console.log(t)
/*
 * anticlockwise rotate
 * first reverse left to right, then swap the symmetry
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  => 6 5 4  => 2 5 8
 * 7 8 9     9 8 7     1 4 7

 void anti_rotate(vector<vector<int> > &matrix) {
    for (auto vi : matrix) reverse(vi.begin(), vi.end());
    for (int i = 0; i < matrix.size(); ++i) {
        for (int j = i + 1; j < matrix[i].size(); ++j)
            swap(matrix[i][j], matrix[j][i]);
    }
}
*/
var anti_rotate = function(m) {
  m.forEach( item => item.reverse())
  for( let r = 0; r < m.length; r++){
    for( let c = r +1; c < m.length; c++) {
      let temp = m[r][c]
      m[r][c] = m[c][r]
      m[c][r] = temp
    }
  }
  return m
}
var t1 = anti_rotate(m)
console.log(t1)
