var findItinerary = function(tickets) {
  let itin = []
  let hash = {}
  for( let i = 0; i < tickets.length; i += 1) {
    let t = tickets[i]
    if (hash[t[0]]){
      hash[t[0]].push(t[1])
      hash[t[0]].sort()
    } else {
      hash[t[0]] = [t[1]]
    }
  }
console.log(hash)
  let tNum = tickets.length
  let dep = 'JFK'
  itin.push(dep)
  let next = hash['JFK'].shift()
  while(tNum > 0 && next !== null){
    dep = next
    itin.push(dep)
    if(hash[dep] !== undefined ){
    next = hash[dep].shift()
  } else {
    next = null
  }

    tNum --
  }
  return itin
};
var findItinerary1 = function(tickets) {
    if (tickets == null || tickets.length == 0) return [];
    var map = {};
    var result = [];

    tickets.sort(sortArray);
    console.log(tickets)
    for(var i = 0; i < tickets.length; i++) {
        if(tickets[i][0] in map) map[tickets[i][0]].push(tickets[i][1]);
        else map[tickets[i][0]] = [tickets[i][1]];
    }
console.log(map)
    var key = 'JFK';
    var drawback = [];
    for(var i = 0; i < tickets.length; i++) {
        while(!(key in map) || map[key].length == 0) {
            drawback.push(key);
            key = result.pop();
        }
        result.push(key);
        key = map[key].shift();
    }
    result.push(key);
    while(drawback.length > 0) result.push(drawback.pop());

    return result;


};

function sortArray(a,b) {
    if(a[0] == b[0]) return (a[1] < b[1] ? -1: (a[1] > b[1] ? 1: 0));

    return (a[0] < b[0] ? -1 : 1);
}
const t =  [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
//const t = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
console.log(findItinerary1(t))
