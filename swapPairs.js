function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let prev = head;
  let next = head.next;
  head = next;
  while (next) {
    let other = next.next;
    next.next = prev;
    if (!other || !other.next) {
      prev.next = other;
      break;
    }
    prev.next = other.next;
    prev = other;
    next = prev.next;
  }
  return head;
};