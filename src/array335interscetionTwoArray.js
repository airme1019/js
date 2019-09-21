
var a1 = [1,2,2,2,3]
var a2 = [2,3]
var intersect = function(nums1, nums2) {
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
console.log(intersect(a1,a2))
