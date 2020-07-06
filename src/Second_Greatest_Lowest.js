function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];

  for(var j=1; j<arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]); // make unique items for array
    }
  }

  result.push(uniqa[1],uniqa[uniqa.length-2]);

  return result.join(',');

}

// console.log(Second_Greatest_Lowest([1,2,2,1,3,4,5]));

const sgl = function(arr) {
  let arrSet = new Set(arr)
  return [...arrSet].sort()[1]
}
console.log(sgl([1,2,2,1,3,4,5]))
