/*https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/*/
var removeSubfolders = function(folder) {
  folder.sort((a,b) => a.length - b.length)
  let index = 1
  let ans = []
  ans.push(folder[0])
  while(index < folder.length){
    //console.log(folder[left] + ' '+folder[right])
    let isSub = false
    ans.forEach(item => {
      if(folder[index].startsWith(item+'/')){
        isSub = true
      }
    })
    if(!isSub) ans.push(folder[index])

    index++
  }
  return ans
};
//const folder = ["/ah/al/am","/ah/al"]
//const folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
const folder =["/a/b/c","/a/b/ca","/a/b/d"]
console.log(removeSubfolders(folder))
