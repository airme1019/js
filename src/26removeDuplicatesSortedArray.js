/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var pointerLeft = 0
    var pointerRight = 1

    while (nums[pointerRight]!==undefined){
    //  console.log(`pointerLeft: ${nums[pointerLeft]} pointerRight: ${nums[pointerRight]}`)
         if (nums[pointerLeft]===nums[pointerRight]){
            pointerRight++
        } else{
            pointerLeft++
            nums[pointerLeft]=nums[pointerRight]
            pointerRight++
        }
    }

    return pointerLeft+1
};

console.log(removeDuplicates([1,2,3,3,4,5,5,6,6,7,7,]));
const i = [1,2,3,3,4,5,5,6,6,7,7,]
const res = new Set(i)
//console.log(res)
