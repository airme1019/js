var maxDistance = function(arrays) {
  var maxD = 0;
  var max = arrays[0][arrays[0].length-1];
  var min = arrays[0][0];
  for(var i = 1; i< arrays.length; i++){
      var d1 = Math.abs(arrays[i][arrays[i].length-1] - min);
      var d2 = Math.abs(arrays[i][0] - max);
       maxD = Math.max(d1,d2,maxD);
    max = Math.max(max, arrays[i][arrays[i].length-1]);
    min = Math.min(min, arrays[i][0]);
     }  
   return maxD;
}
console.log(maxDistance(a));  
