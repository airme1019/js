var nextLargerNodes = function(head) {
    let cur = head
    let res = []
    let i = 0
    while (cur) {
        let curNext = cur.next
        res[i] = 0
        while(curNext) {
            if (curNext.val > cur.val) {
                res[i] = curNext.val
                break
            }
            curNext = curNext.next
        }
        i ++
        cur = cur.next
    }
    return res

};
