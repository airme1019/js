function ListNode (val) {
  this.val = val
  this.next = null
}

var isPalindrome = function(head) {
    let cur = head
    let arr = []
    if ( head == null ) return false
    if ( head.next == null) return true
    while(cur) {
      arr.push(cur.val)
      cur = cur.next
    }
    let i = 0
    while (i < Math.floor(a.length/2)) {
      if ( arr[i] !== arr[arr.length - 1 - i]){ return false}
        i++
    }
    return true
};

const a = [1,2,3,1,2,3]
let i = 0
let res = true
while (i < a.length) {
  if ( a[i] !== a[a.length - 1 - i]){res =false}
    i++
}
console.log(res)
