var floodFill = function(image, sr, sc, newColor) {
  if (image[sr][sc] == newColor) {
          return image;
      }
  function DFS (row, col, currentColor) {
    if(image[row][col] === currentColor){
      image[row][col] = newColor
      //dfs
      if(row > 0) DFS(row-1,col,currentColor)
      if(row < image.length-1) DFS(row+1,col,currentColor)
      if(col > 0) DFS(row,col-1,currentColor)
      if(col < image[0].length-1) DFS(row,col+1,currentColor)
    }
  }

  let currentColor =  image[sr][sc]
  DFS(sr,sc,currentColor)
  return image
};
var image = [[1,1,1],[1,1,0],[1,0,1]]
const sr = 1, sc = 1, newColor = 2
console.log("flood fill", floodFill(image, sr, sc, newColor))
