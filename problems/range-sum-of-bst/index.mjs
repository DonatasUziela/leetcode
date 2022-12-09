// https://leetcode.com/problems/range-sum-of-bst/
// node problems/range-sum-of-bst/index.mjs

import { expect } from 'chai'
import { testData } from './testData.mjs'
import { TreeNode } from '../../utils/TreeNode.mjs'

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function(root, low, high) {
    const queue = [root]
    const values = [];
    do {
        const { val, left, right } = queue.shift();
        values.push(val)
        if (left) queue.push(left)
        if (right) queue.push(right)
    } while (queue.length);

    const sum = values
        .filter(val => val >= low && val <= high)
        .reduce((result, val) => result += val, 0)

    return sum
};

testData.forEach(({ root, low, high, expectedResult }) => {
    expect(rangeSumBST(root, low, high)).to.equal(expectedResult)
})