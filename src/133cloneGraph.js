/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
 var cloneGraph = function(node) {
     if (node == null) return null;

     let map = new Map();
     let set = new Set([node]);
     let q = [node];

     while (q.length != 0) {
         let size = q.length;
         for (let i = 0; i < size; i++) {
             let cur = q.shift();
             for (let n of cur.neighbors) {
                 if (!set.has(n)) {
                     set.add(n);
                     q.push(n);
                 }
             }
         }
     }

     // clone nodes
     for (let node of set) {
         map.set(node, new UndirectedGraphNode(node.label));
     }

     // clone neighbors
     for (let node of set) {
         let tempNode = map.get(node);
         for (let n of node.neighbors) {
             let tempNeighbor = map.get(n);
              tempNode.neighbors.push(tempNeighbor);
         }
     }
     return map.get(node);
 };
