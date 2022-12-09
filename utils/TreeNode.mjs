import { isDefined } from './isDefined.mjs'

export function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {(number|null)[]} array
 * @returns {TreeNode}
 */

export const postOrder = (array, index = 0) => {
    const value = array[index]

    if (!isDefined(value)) return null

    const left = postOrder(array, index * 2 + 1);
    const right = postOrder(array, index * 2 + 2);

    const node = new TreeNode(value, left, right);

    return node
}