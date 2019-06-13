var islandPerimeter = function(grid) {
  let perimeter = 0
  for(let i = 0; i < grid.length; i += 1){
    for (let j = 0; j < grid[i].length; j += 1){
      if(grid[i][j] == 1){
        perimeter += 4
        if(i-1>=0 && grid[i-1][j] == 1){
          perimeter -= 1
        }
        if(i+1<grid.length && grid[i+1][j] == 1){
          perimeter--
        }
        if(j-1 >= 0 && grid[i][j-1] == 1){
          perimeter--
        }
        if(j+1 < grid[i].length && grid[i][j+1] == 1){
          perimeter--
        }
      }
    }
  }
  return perimeter
};
const grid = [[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
 console.log(islandPerimeter(grid))
