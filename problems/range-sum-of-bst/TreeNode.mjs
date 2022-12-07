/**
* @param {number} val
* @param {TreeNode} low
* @param {TreeNode} high
*/
export function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}