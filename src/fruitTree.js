var totalFruit = function(tree) {
  let memo = new Map()
    for(let i = 0; i < tree.length; i += 1){
      let temp = 1
      let b1 = tree[i]
      let b2 = null
      for(let j = i+1; j< tree.length; j += 1){
        if(tree[j] !== tree[i] && b2 == null){
          b2 = tree[j]
          temp++
        } else if(tree[j] == b2 || tree[j] == b1){
          temp++
        } else {
          break
        }
      }
      memo.set(i,temp)
    }
    return Math.max(...Array.from(memo.values()))
};
const t =[3,3,3,1,2,1,1,2,3,3,4]
//console.log(totalFruit(t))

var totalFruit2 = function(tree){
  if(tree.length == 0) return 0
  let res = []
  let b1 = tree[0]
  let b2 = null
  let fruits = 0
  for(let i = 0; i < tree.length; i += 1){
    if(tree[i] == 0) {
      continue
    }
    if(tree[i] == b1 ) {
      b1 = tree[i]
      fruits++
    } else if(b2 == null || tree[i] == b2){
      b2 = tree[i]
      fruits++
    } else {
      console.log(fruits)
      res.push(fruits)
      fruits = fruits - 2
      b1 = tree[i-1]
      b2 = tree[i]
    }
  }
  res.push(fruits)
  return Math.max(...res)
}
console.log(totalFruit2(t))
