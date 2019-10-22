/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.rSet = new Set()
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(!this.rSet.has(val)){
    this.rSet.add(val)
    console.log(this.rSet)
    return true
  } else return false
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(this.rSet.has(val)) {
    this.rSet.delete(val)
    console.log(this.rSet)
    return true
  } else {
    return false
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let random = Math.floor(Math.random() * this.rSet.size)
  console.log('random '+ random)
  let values = this.rSet.values()
  let n = 0, randomVal
  while(n <= random){
    randomVal = values.next().value
    n++
  }
  return randomVal
};


 var obj = new RandomizedSet()
 var param_1 = obj.insert('10')
 console.log(param_1)
 obj.insert('20')
 obj.insert('30')
 obj.insert('40')
 obj.insert('140')
 obj.insert('50')
 obj.insert('70')
 obj.insert('90')
 //var param_2 = obj.remove('10')
 //console.log(param_2)
 var param_3 = obj.getRandom()
 console.log(param_3)
