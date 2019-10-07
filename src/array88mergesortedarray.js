var nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
var merge = function(nums1, m, nums2, n) {
  let n1l = m - 1;
  let n2l = n - 1 ;
  for(let i = m+n-1; i >= 0; i --) {
    if(n1l >= 0 && n2l >= 0 && nums1[n1l] >= nums2[n2l]) {
      nums1[i] = nums1[n1l]
      nums1[n1l] = nums2[n2l]
      n1l --
    } else if (n2l >= 0) {
      nums1[i] = nums2[n2l]
      n2l --
    } else { break}
  }
  return nums1
};
console.log(merge(nums1,m,nums2,n))
