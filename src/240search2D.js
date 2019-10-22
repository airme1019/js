var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i += 1) {
      if(target == matrix[i][0] || target == matrix[i][matrix[i].length-1]) return true
      if(target < Math.max(...matrix[i]) || target > Math.min(...matrix[i])){
        //console.log(i)
      let find = binarySearch(matrix[i],target)
      if(find) {return true}
    }
    }
    return false
};

var binarySearch = function(arr,target){
  let low = 0, high = arr.length-1, found =false
  //console.log(arr)
    while(low < high ){
    let mid = Math.floor((low + high)/2)
    //console.log('mid '+mid)
    if(target > arr[mid]){
      low = mid+1
    } else if( target < arr[mid]){
      high = mid
    } else {
      found = true
      break
     }
  }
  return found
}
const m = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
console.log(searchMatrix(m,5))
