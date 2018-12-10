var graphBFS = function(g){
  function bfs(start){
    console.log(g);
    var visited = Array(g.length).fill(false);
    var traves = [];
    console.log(visited);
    var queue = [];
    visited[start] = true;
    queue.push(start);
    traves.push(start);
    console.log(start);
    while(queue.length){
      var queueEle = queue.shift();
      var adj = g[queueEle];
      for(let i in adj){
        if(!visited[adj[i]]){
          visited[adj[i]] = true;
          queue.push(adj[i]);
          traves.push(adj[i]);
          console.log(adj[i]);
        }
      }
    }
    return traves;
  }
  return bfs(0);
}
var g = [[1,2],[3],[3],[],[]];
//console.log(graphBFS(g));
