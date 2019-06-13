var reconstructQueue = function(people) {
  people.sort(sortP)
  console.log(people)
  let res = []
  for (let i = 0; i < people.length; i += 1) {
    res.splice(people[i][1], 0 , people[i])
    console.log(res)
  }
  return res
};
var sortP = function (a,b) {
  //first sort by height
  if (a[0] !== b[0]){
    return b[0] - a[0]
  } else {
    //if equal height
    return a[1] - b[1]
  }
}

const p = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
console.log(reconstructQueue(p))
