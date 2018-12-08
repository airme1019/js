// @flow

/*Assume you are an awesome parent and want to give your children some cookies.
 But, you should give each child at most one cookie.
 Each child i has a greed factor gi, which is the minimum size of a cookie that
 the child will be content with;
 and each cookie j has a size sj.
 If sj >= gi, we can assign the cookie j to the child i, and the child i will be content.
 Your goal is to maximize the number of your content children and output the maximum number.
g: greedy factors
s: cookie size

 */

 var assignCookies = function(g,s) {
   g.sort();
   s.sort();
   for(var i = 0; i<g.length && i<s.length; i++){
     if(g[i]<s[i]) i++;
   }
   return i;
 }
 var g = [1,2];
 var s = [1,3];
var a = assignCookies(g,s);
console.log(a);
const b = [1,2,3];
b.push(2);
console.log(b);
