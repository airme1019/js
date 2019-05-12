/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.used = {}
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.cache.has(key)) {
  let value = map.get(key)
  map.delete(key)
  map.set(key, value)
  return map.get(key)
} else return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.cache
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
