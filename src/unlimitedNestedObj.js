var data = [
    {id:40,items: [{id:3,items:[{id: 2}]}]},
    {id:10,items: [{id:1}, {id:2, items:[{id:7, items:[{id:0}]}]}]},
    {id:30,items: [{id:5},{id:6}]},
    {id:20}
];

var getIds = function(d) {
  let res
  return d.reduce((acc,cur) => {
    console.log(cur['id'])
    acc.push(cur['id'])
    if(cur['items']){
      let items = getIds(cur['items'])
      acc.push(...items)
    }
    return acc
  },[])
}

var getIdsBFS = function(d,level) {
  let res = []
  let queue = []
  res[level] = []
  d.forEach(ele => {
    res[level].push(ele['id'])

     if(ele['items']){
      queue.push(...ele['items'])
      //level++
    }

  })
  console.log(queue)
  res = res.concat(getIdsBFS(queue,level+1))
/*  while(queue.length > 0){
    let subEle = queue.shift()
    if(subEle['items']) level++
     res = res.concat(getIdsBFS(subEle,level))
     console.log('level: '+level)
  }*/

  return res
}

console.log(getIdsBFS(data,0))
