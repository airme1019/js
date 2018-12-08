"use strict";
 v = "Hi!  I'm a strict mode script!";  // ERROR: Variable v is not declared
var v;

var test =  new Object();
test.p1 = '1';
test.p2 = '2';
//// console.log(Object.getOwnPropertyNames(test));


var isStrict = (function() { return !this; })();
//// console.log(isStrict)

var arr1 = [1,2,3]
for (let i in arr1) {
  //// console.log(i)
}

var lamdaFunc = (...params) => {
  // console.log(params.length)
  for ( let i of params){
    // console.log(i)
  }
}
lamdaFunc(3,2,1,5)

// generator
function* ask() {
   const name = yield "What is your name?";
   const sport = yield "What is your favorite sport?";
   return `${name}'s favorite sport is ${sport}`;
}
const it = ask();
/* // console.log(it.next());
// console.log(it.next('Ethan'));
// console.log(it.next('Cricket'));
*/
// object assign
var det = { name:"Tom", ID:"E1001" };
var copy = Object.assign({}, det);
// console.log(copy);
for (let val in copy) {
  // // console.log(copy[val])
}

var o1 = { a: 10 };
var o2 = { b: 20 };
var o3 = { c: 30 };
var obj = Object.assign(o1, o2, o3);
//// console.log(obj);
//// console.log(o1);

var emp = { name: 'John', Id: 3 }
var {name, Id} = emp
//// console.log(name)
//// console.log(Id)

var array = [2];
var p = array.push(3);
//// console.log(`p is ${p}`)

var array2 = [3,6,12,9,15]
var bigger6 = array2.filter( i => i>6)
//// console.log(bigger6)

var myMap = new Map();
myMap.set("id", "admin");
myMap.set("pass", "admin@123");
myMap.forEach((val, index )=> // console.log(`${index} ${val}`));


function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });
// console.log(Teacher.prototype.constructor)



var main = document.querySelector('#container');
var url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request =  new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json'
request.send();


request.onload = function(){
  /*// console.log(request.response);

  var p1 = document.createElement('p');
  p1.textContent = JSON.stringify(request.response);
  p1.style.zIndex = 2;
  // console.log(main)
  main.appendChild(p1);*/
}

fetch(url)
.then(function (response){
  //// console.log( response.json());
  return response.json();
})
.then(function(data){
  //// console.log(data)
  var heroKeys = Object.keys(data);
  for( let entry of heroKeys) {
    let hero = document.createElement('p')
    hero.textContent = JSON.stringify(data[entry]);
    //main.appendChild(hero)
  }
})

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

document.getElementById('size-12').onclick = makeSizer(12);
document.getElementById('size-14').onclick = makeSizer(14);
document.getElementById('size-16').onclick = makeSizer(16);

var arr2 = [1, 2, [3, 4, [5, 6]]];
var r = arr2.flat(2);
arr2.shift();
//// console.log(arr2)
