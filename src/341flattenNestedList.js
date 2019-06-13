var NestedIterator = function(nestedList) {
    this.flatten = flatten(nestedList)
    function flatten (a) {
      return a.reduce( (acc,cur) => Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur),[])
    }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this.flatten.length > 0
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  return this.hasNext? this.flatten.shift() : null
};

/**
 * Your NestedIterator will be called like this:
 */
 const nestedList = [[1,1],2,[1,1]]
  var i = new NestedIterator(nestedList), a = [];
  console.log(i)
  while (i.hasNext()){ a.push(i.next());}
  console.log(a)
