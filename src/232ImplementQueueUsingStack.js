/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.queue = []
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.queue.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.queue.splice(0, 1)
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.queue[0] || null
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.queue.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 */
var obj = new MyQueue()
obj.push(1)
console.log("obj", obj)
var param_2 = obj.pop()
console.log("param_2", param_2)
var param_3 = obj.peek()
console.log("param_3", param_3)
var param_4 = obj.empty()
console.log("param_4", param_4)
