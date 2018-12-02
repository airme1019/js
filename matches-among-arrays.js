var arrays = [
    ['apple', 'orange', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'],
    ['taco', 'fish', 'apple', 'pizza'],
    ['banana', 'pizza', 'fish', 'apple']
  ];  


var result = arrays.shift().filter(function(v) {
  console.log("v " + v);
    return arrays.every(function(a) {
      console.log("a " + a);
        return a.indexOf(v) !== -1;
    });
});


document.write('<pre>' +
               JSON.stringify(result,null,4)
               + '</pre>');
