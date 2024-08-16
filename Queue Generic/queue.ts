class Queue<T> {
    private readonly _queue: T[] = [];
  
    enqueue(item: T) {
      this._queue.push(item);
    }
  
    dequeue(): T | undefined {
      return this._queue.shift();
    }
  
    get size(): number {
      return this._queue.length;
    }
  
  }
  
  const queue = new Queue<number>();
  
  queue.enqueue(100);
  queue.enqueue(200);
  queue.enqueue(300);
  
  console.log(queue.size); // 3
  
  queue.dequeue();
  
  console.log(queue.size); // 2
  