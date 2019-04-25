var pythagorean = function (arr) {
  const newArr = arr.sort((a,b) => a-b).map(a => a*a)
  console.log(newArr)
  for(let i = newArr.length - 1; i >=0; i -=1) {
    //console.log(newArr[i])
    let l = 0
    let r = i - 1
    while(l < r){
      if(newArr[i] > newArr[l] + newArr[r]){
        l++
      } else if(newArr[i] < newArr[l] + newArr[r]){
        r--
      } else {
        return [arr[i], arr[l], arr[r]]
      }
    }
  }
  return false
}
console.log(pythagorean([6,2,13,4,5]))
