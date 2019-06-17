var groupAnagrams = function(strs) {

  let str1 = strs.map(item => item.split('').sort().join(''))
  let hash = {}
  let res = []
  str1.forEach((item,index) => {
    if(hash[item] !== undefined ){
      hash[item].push(strs[index])
    } else {
      hash[item] = [strs[index]]
    }
  })
  for(prop in hash){
    res.push(hash[prop])
  }
  return res
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))
