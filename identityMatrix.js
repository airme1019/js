function identityMatrix(size){
  var r = new Array(size);
  for(var i = 0; i < size; i++){
    r[i] = new Array(size).fill(0);//file everything with 0
    r[i][i] = 1; // add identity part
  }
  return r;
}
// console.log(identityMatrix(3));
