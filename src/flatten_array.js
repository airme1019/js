/*test 1*/
function flat(arr,flatted){
  if(!flatted){var flatted =[];}
  for(var i = 0; i<arr.length; i++){


    if(Array.isArray(arr[i]) ){

       flat(arr[i],flatted);

    }else{

    flatted.push(arr[i].toString());

    }


}

return flatted;
}
var test = [1, [2], [3,4], [[5, [6]]], 7];
// console.log(flat(test));

function flatten(arr){
  return arr.reduce((acc, cur) => Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur), []);
}
// console.log(flatten(test));
