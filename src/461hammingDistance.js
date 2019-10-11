/*The Hamming distance between two integers is the number of
 positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.
https://leetcode.com/problems/hamming-distance/
*/
var hammingDistance = function(x, y) {
  //console.log(x^y)
    return (x^y).toString(2).replace(/0/g, '').length
  //  console.log('x '+ x.toString(2))
  //  console.log('y '+ y.toString(2))
};
hammingDistance(1,4)
