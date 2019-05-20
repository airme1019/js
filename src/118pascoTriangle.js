/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = [];

    for(let i=0; i < numRows; i++) {
        triangle[i] = [];
        for(let j=0; j<=i; j++) {
            if(j==0 || j==i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
        }
    }

    return triangle;
};
//console.log(generate(5))

var getRow = function(rowIndex) {
    let t = []
    let i = 0
    while(i <= rowIndex){
      t[i] = []
      for(let j = 0; j <= i; j += 1){
        if( j == 0 || j == i){
          t[i][j] = 1
        } else {
          t[i][j]= t[i-1][j-1] + t[i-1][j]
        }
      }
      i++
    }
    return t[rowIndex]
};

console.log(getRow(3))
