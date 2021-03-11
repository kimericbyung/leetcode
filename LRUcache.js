class Node {
  constructor(value, key, next = null, prev = null) {
    this.value = value;
    this.key = key;
    this.next = next;
    this.prev = prev;
  }
}

class LRUCache {
  constructor(capacity) {
    this.size = 0;
    this.limit = capacity;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  get(key) {
    if (this.cache[key]) {
      console.log(this.cache[key])
      let temp = this.cache[key];
      temp.prev.next = temp.next;
      temp.next = this.head;
      this.head = temp;
      return [this.head.key, this.head.value];
    }
  }

  put(key, value) {
    if (!this.head) {
      this.head = new Node(value, key);
    }
    if (this.cache[key]) {
      this.cache[key].prev.next = this.cache[key].next;
      this.cache[key].next.prev = this.cache[key].prev;
      let newNode = new Node(value, key, this.head)
      this.cache[key] = newNode;
      this.head = newNode;
    } else {
      if (this.size === this.limit) {
        this.tail.prev.next = null;
        let newNode = new Node(value, key, this.head);
        this.head.prev = newNode;
        this.cache[key] = newNode;
        this.head = newNode;
      } else {
        let newNode = new Node(value, key, this.head);
        this.head.prev = newNode;
        this.cache[key] = newNode;
        this.head = newNode;
      }
    }
  }
};

let cache = new LRUCache(6);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));
cache.put(3,3);
console.log(cache.get(3));
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */