class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        this.head = new Node(data, this.head);
    }
    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        if (!this.head) return null;

        let node = this.head;
        while (node) {
            if (!node.next) return node;
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeHead() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeTail() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertTail(data) {
        const last = this.getTail();
        if (last) last.next = new Node(data);
        else this.head = new Node(data);
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) return node;
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) return;
        previous.next = previous.next.next;
    }

    insertAt(index, data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let index = 0;
        while (node) {
            fn(node, index);
            node = node.next;
            index++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

function fromTail(list, step) {
    let moveByOne = list.head;
    let aheadByStep = list.head;

    while (step > 0) {
        aheadByStep = aheadByStep.next;
        step--;
    }

    while (aheadByStep.next) {
        moveByOne = moveByOne.next;
        aheadByStep = aheadByStep.next;
    }

    return moveByOne;
}
const chain = new LinkedList();
chain.insertHead(1);
chain.insertHead(2);
chain.insertHead(3);
chain.insertHead(4);
chain.insertHead(5);
chain.insertHead(6);
//console.log(chain.forEach(console.log))
console.log(chain.getHead())
console.log(fromTail(chain,3).data)
