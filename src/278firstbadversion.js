/* https://leetcode.com/problems/first-bad-version/ */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // binary search
       var start = 1, end = n;
       while(start < end){
           var mid = Math.floor(start + (end-start) / 2);
           if(isBadVersion(mid)){
                if (!isBadVersion(mid-1)) return mid
                end = mid; // look on left side of mid
           }else{
               if (isBadVersion(mid+1)) return mid+1
               start = mid+1; // look on the right side of mid
           }
       }
       return start;
    };
};
