/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
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
console.log(intersection([1,1,2],[2,2,3]))
