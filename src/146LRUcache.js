/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
 };

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.cache.has(key)) {
  let value = this.cache.get(key)
  this.cache.delete(key)
  this.cache.set(key, value)
  return this.cache.get(key)
} else{ return -1}
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(!this.cache.has(key)){
        if(this.cache.size >= this.capacity){
            this.cache.delete(this.cache.keys().next().value)
        }
    }
    this.cache.delete(key)
    this.cache.set(key,value)
 };

let cache1 = new LRUCache(2)

cache1.put(1, 1);
cache1.put(2, 2);
console.log(cache1.cache.keys().next())
console.log(cache1.cache.keys().next())

console.log(cache1.get(1));       // returns 1
cache1.put(3, 3);    // evicts key 2
console.log(cache1.get(2));       // returns -1 (not found)
cache1.put(4, 4);    // evicts key 1
console.log(cache1.get(1));       // returns -1 (not found)
console.log(cache1.get(3));       // returns 3
console.log(cache1.get(4));       // returns 4
