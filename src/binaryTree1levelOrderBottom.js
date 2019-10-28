

var levelOrderBottom = function(root) {
    if(!root) return [];
    var reversed = [];
    search(root,1);
    function search(node,level){
      if(node){
        if(reversed.length<level){
        //  reversed.unshift([]);
            reversed.push([]);
        }
        //reversed[reversed.length-level].push(node.val);
          reversed[reversed.length-1].push(node.val);
        search(node.left,level+1);
        search(node.right,level+1);
      } else {return;}
    }
    return reversed;
};
const t = [3,9,20,null,null,15,7]
//const output = [[3],[9,20],[15,7]]
console.log(levelOrderBottom(t))
