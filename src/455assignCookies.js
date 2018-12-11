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
   var j = 0;
   for(var i = 0; i<s.length&&i<g.length; i++){
     if(g[i]<=s[i]){  j++;
       //console.log("j: "+ j);
     } else { break;}
   }
   return i;
 }
 var assignCookies2 = function(g, s) {
     g.sort(function(a, b) { return a - b})
     s.sort(function (a, b) { return a - b })
     var j = 0;

     s.forEach((element) => {
         if (element >= g[j]) {
             j++
         }
     })
     return j
 };
 var g = [1,2,3];
 var s = [1,3,3];
var a = assignCookies(g,s);
