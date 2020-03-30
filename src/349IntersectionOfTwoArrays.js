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
