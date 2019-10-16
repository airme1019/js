class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            queue.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        const stack = [this.root];
        while (stack.length) {
            const node = stack.shift();
            stack.unshift(...node.children);
            fn(node);
        }
    }
}

const tree = new Tree();
tree.root = new Node(1);
tree.root.add(2);
tree.root.add(3);

tree.root.children[0].add(4);
tree.root.children[1].add(5);
//console.log(tree.root.children)


const numbers = [];
const widths = [1];
tree.traverseBF(node => {
  numbers.push(node.data)
});

var treeWidths = function (tree) {
  if(!tree.root) return [];
  var res = [];
  search(tree.root,1);
  function search(node,level) {
    if(node){
      if(res.length<level){
          res.push([]);
      }
      res[level-1].push(node.data);
      //console.log(' node ' + node.data + ' level '+ level)
      //console.log(res)
      search(node.children[0],level+1);
      search(node.children[1],level+1);
    } else {return;}
  }
  console.log(tree)
  return res;
}
//console.log(numbers)
console.log(treeWidths(tree))

const numbers2 = [];
tree.traverseDF(node => numbers2.push(node.data));
