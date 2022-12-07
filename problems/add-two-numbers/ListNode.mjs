/**
 * @param {number} val
 * @param {ListNode} next 
 */
export function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next
}

ListNode.prototype.toString = function() {
    const array = [];
    let node = this;
    while (node) {
        array.push(node.val)
        node = node.next
    }
    return array.toString()
}