var intersection = function(nums1, nums2) {
  let n1Set = new Set(nums1)
  return [...new Set(nums2.filter(n => n1Set.has(n)))]
}
const nums1 = [1,2,2,1]
const nums2 = [2,2]
console.log(intersection(nums1, nums2))


var intersection2 = function(nums1, nums2) {
    const presenceMap = nums1.reduce((acc, el) => {
        acc[el] = true;
        return acc;
    }, {});
console.log(presenceMap);
    return nums2.reduce((acc, el) => {
        if(presenceMap[el] === true) {
            acc.push(el);
            presenceMap[el] = false;
        }

        return acc;
    }, []);
};
console.log(intersection2([1,1,2],[2,2,3]))

/*
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
*/

var intersect3 = function(nums1, nums2) {
    let res = []
    let hash = {}
    for(let i = 0; i < nums1.length; i++) {
      let n1 = nums1[i]
      if(hash[n1]) {
        hash[n1]++
      } else {
        hash[n1] = 1
      }
    }

    for(let j = 0; j < nums2.length; j ++) {
      let n2 = nums2[j]
      if(hash[n2]) {
        res.push(n2)
        hash[n2]--
      }
    }
    return res
};
