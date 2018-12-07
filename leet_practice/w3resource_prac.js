// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug

function rangeBetween(a,b){
    var r = [];
    if(a<=b){
    for(var i = a; i<=b;i++){
        
        r.push(i);
    }
    }else{
        for(var i = b; i<=a;i++){
        
        r.push(i);
    }
        
    }
    
    return r;
}
//// console.log(rangeBetween(10,0));

function filter_arr(val){
    if(val){ return val;}
     
}

var res = ["1","0","2",null, '', true,false].filter(filter_arr);
//// console.log(res);
/*38. Write a JavaScript function to move an array element from one
position to another.*/
function move(arr,a,b){
    if(a<=arr.length-1 & b<= arr.length-1){
    var temp = arr[a];
    arr[a]= arr[b];
    arr[b] = temp;
    // console.log( arr);
       }
    else{// console.log("out!");}
}
//move([1,2,3,4,5],1,4);

/*37. Write a JavaScript function to create a specified number of
elements with pre-filled string value array.*/
function arr_fill(a,b){
    
    var arr = new Array(a);
    arr.fill(b);
    return arr;
    
}
//// console.log(arr_fill(5,"AB"));

/*35. Write a JavaScript function to get a random item from an array.*/
function random_arr(arr){
    var r = Math.floor(Math.random()*(arr.length));
    // console.log(arr[r]);
    
    
}
//random_arr([1,2,3,4,5,6]);
/*34. Write a JavaScript function to get nth 
largest element from an unsorted array.*/ 

function nthlargest(arr,nth){
    arr = arr.sort().reverse();
    if(nth<= arr.length-1){
    // console.log(arr[nth]);

       }
    
}
//nthlargest([5,2,4,3,1,0,-3,6],7);

/*31. Write a JavaScript function to remove a specific element from an array*/
function remove_item(arr,item){
    
    var item_index = arr.indexOf(item);
    if(item_index !== -1){
        arr.splice(item_index,1);
        // console.log(arr);
    }else{
        // console.log("Item not here");
    }
    
}
//remove_item([2,6,3,19],6);

/*30. Merge two arrays and remove duplicated items*/
function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.push(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


var array1 = [1, 2, 3];

var array2 = [2, 30, 1];

//// console.log(merge_array(array1, array2));

/*28. Write a JavaScript function to find the longest common 
starting substring in a set of strings.*/
function longest_common_starting_substring(arr) {
   var i = 0;
   while (i < arr[0].length && arr[0].charAt(i) === arr[1].charAt(i)) i++; 
   // console.log(arr[0].substring(0, i));
}
//longest_common_starting_substring(["hello", "helloaaaa"]);

/*26. Write a JavaScript program to find a pair of elements (indices of the two numbers) from
an given array whose sum equals a specific target number.*/
function findPair(arr,num){
    var pair = [];
    for(var i =0;i<arr.length;i++){
        if(arr[i]<num){
            var temp = num - arr[i];
            if(arr.indexOf(temp)!== -1){
               pair.push([i,arr.indexOf(temp)]);
               }
        }
        
    }
    // console.log(pair);
    
}
//findPair([11,9,20,1,0,3,17],20);

/*25. Write a JavaScript function to sort the following array of objects by title value.*/
var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function compare_to_sort(x,y) 
 {
   
  return x.title - y.title;
 }

//// console.log(library.sort(compare_to_sort));

/*23. Write a JavaScript function to find the difference of two arrays.*/
function differenceOf2Arrays (array1, array2) {
var temp = [];
array1 = array1.toString().split(',').map(Number);
array2 = array2.toString().split(',').map(Number);

for (var i in array1) {
if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
}
for(i in array2) {
if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
}
return temp.sort((a,b) => a-b);
}

function flattenArr(arr){
    
    // console.log(arr.toString().split(',').map(Number));
}
flattenArr([3,[2,6],5,[2,[7,8]]]);


function binary_Search(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(binary_Search(items, 1));   
// console.log(binary_Search(items, 5));
  
