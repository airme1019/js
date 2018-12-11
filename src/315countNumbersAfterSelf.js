/*
BST: 对于每一个结点都要维护它本身这个数出现了多少次（count），左子树比他小的元素的总和 （花花的解法）
这个解法是用一个count维护，再生成数的过程中得到count的数，当要插入的i的值比r（当前根结点）小的时候，首先r的count要加1（记录比当前结点小结点的数量），然后判断有没有left，有的话继续遍历他的left，没有的话插入为left，同理判断比r.val大的情况，但是判断右子树不同的是 每当发现一个nums[i]比当前r大的时候总的count要加1，因为找到一个比他小的结点，然后要是有right的话在遍历right（遍历到右子节点的时候发现了再加一，一直遍历到没有右子节点了），没有的话插入为新的右子节点
*/
class TreeNode {
    constructor(val) {
        this.val = val;
        this.count = 1;
        this.left = this.right = null;
    }
}
var countSmaller = function(nums) {
    const N = nums.length;
    if (N === 0) return [];

    let root = new TreeNode(nums[N - 1]);
    let ans = [0];
    for(let i = N - 2; i >= 0; i--) {
        ans.push(insert(nums[i]));
         // console.log('after push', nums[i], root);
    }
    return ans.reverse();

    function insert(num){
        let r = root;
        let count = 0;
        while(true) {
            if (num <= r.val) {
                r.count++;
                if (!r.left) {
                    r.left = new TreeNode(num);
                    break;
                }
                else {
                    r = r.left;
                }
            }
            else if (num > r.val) {
                count += r.count;
                if (!r.right) {
                    r.right = new TreeNode(num);
                    break;
                }
                else {
                    r = r.right;
                }
            }
            else {
                r.count++;
                break;
            }
        }
        return count;
    }
}
