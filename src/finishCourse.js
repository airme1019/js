// use strict
var canFinish = function(numCourses, prerequisites) {
    let nodeList = {};

    for(let [course,prereq] of prerequisites){
        if(!nodeList[course]){
            nodeList[course] = [];
        }

        nodeList[course].push(prereq);
    }
//console.log(nodeList);
    let keys = Object.keys(nodeList);
    let closed = new Set();
    for(let key of keys){
        if(!DFS(parseInt(key)))
            return false;
    }

    return true;

    function DFS(start){
      //console.log(closed);
        closed.add(start);
        let children = nodeList[start];

        if(children != null){
            for(let child of children){
                if(!closed.has(child)){
                    if(!DFS(child))
                        return false;
                }
                else{
                    return false;
                }

            }
        }
        closed.delete(start);
      //  console.log( closed);
        //if(closed.length)
        return closed.size  <= numCourses-1;
    }

};

function canFinish2(numCourses, prerequisites) {
  const seen = new Set();
  const seeing = new Set();
  const adj = Array(numCourses+1).map(r => []);

  for (let [u, v] of prerequisites) {
    adj[v].push(u);
  }


  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return false;
    }
  }
  return true;

  function dfs(v) {
    //console.log("seeing: ");
    //console.log(seeing);
  ///  console.log("seen: ");
  //  console.log(seen);
    if (seen.has(v)) return true; // visted
    if (seeing.has(v)) return false;// cycle

    seeing.add(v);
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false;
      }
    }
    seeing.delete(v);
    seen.add(v);
    return true;
  }
}

var numCourses = 3;
var prerequisites = [[1,0], [0,2],[2,3]];
//console.log(canFinish(numCourses,prerequisites));
