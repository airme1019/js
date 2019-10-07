const arr = [3,8,-10,23,19,-4,-14,27]
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b);
    let minDiff = Number.MAX_SAFE_INTEGER
    let res = []
    for( let i = 1; i < arr.length; i++){
      if(arr[i]-arr[i-1] < minDiff) {
        minDiff = arr[i]-arr[i-1]
        res = [[arr[i-1], arr[i]]]
       } else if (arr[i]-arr[i-1] == minDiff) {
        res.push([arr[i-1], arr[i]])
      }
    }
    return res
};
console.log(minimumAbsDifference(arr))
