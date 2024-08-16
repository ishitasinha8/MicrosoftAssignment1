"use strict";
class Queue {
    constructor() {
        this._queue = [];
    }
    enqueue(item) {
        this._queue.push(item);
    }
    dequeue() {
        return this._queue.shift();
    }
    display() {
        console.log(this)
    }
    get size() {
        return this._queue.length;
    }
}
const queue = new Queue();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);

queue.display()
console.log(queue.size); // 3

queue.dequeue();
queue.display()

console.log(queue.size); // 2
