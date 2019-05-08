var findMedianSortedArrays = function(nums1, nums2) {
  if(nums1.length > nums2.length) return findMedianSortedArrays(nums2,nums1)

   const x = nums1.length
   const y = nums2.length
   let left = 0, right = x

   while(left<=right) {
     let partitionX = (left+right)/2 | 0,
         partitionY = (x+y+1)/2  - partitionX | 0

         let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX-1]
         let minRightX = partitionX === x ? Infinity : nums1[partitionX]

         let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY-1]
         let minRightY = partitionY === y ? Infinity : nums2[partitionY]

         if(maxLeftX <= minRightY && maxLeftY <= minRightX){
           if( (x + y) & 1) return Math.max(maxLeftX,maxLeftY)
           return (Math.max(maxLeftX,maxLeftY) + Math.min(minRightX,minRightY))/2
         } else if (maxLeftX > minRightY){
           right = partitionX - 1
         } else {
           left = partitionX + 1
         }
   }
}
var findMedianSortedArrays2 = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays2(nums2, nums1);

    const x = nums1.length, y = nums2.length;
    let lo = 0, hi = x;

    while(lo <= hi) {
        let partitionX = (lo + hi) / 2 | 0,
            partitionY = (x + y + 1) / 2 - partitionX | 0;

        let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        let minRightX = partitionX === x ? Infinity : nums1[partitionX];

        let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        let minRightY = partitionY === y ? Infinity : nums2[partitionY];

        if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if((x + y) & 1) return Math.max(maxLeftX, maxLeftY);
            return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
        } else if(maxLeftX > minRightY) {
            hi = partitionX - 1;
        } else {
            lo = partitionX + 1;
        }
    }
};
//const n2 = [1,3,6,9,10]
//const n1 = [2,4,8,12,15,16]
const n1 = [1,3,12,15,19]
const n2 = [2,8,10]
console.log(findMedianSortedArrays(n1,n2))
