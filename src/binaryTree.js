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
          //  console.log(node)
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

const numbers = [];
const widths = [1];
tree.traverseBF(node => {
  numbers.push(node.data)
});

var treeWidths = function (tree) {
  if (tree.root == null) return [0]
  var res = []

  function helper (node, level) {
    while(node.children.length){
    helper(node.children[0], 0)
    helper(node.children[0], 0)
    node =
  }
  }
   helper(tree.root, 0)

}
//console.log(numbers)
console.log(treeWidths(tree))

const numbers2 = [];
tree.traverseDF(node => numbers2.push(node.data));
