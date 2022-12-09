// https://leetcode.com/problems/leaf-similar-trees/
// node problems/leaf-similar-trees/index.mjs

import { expect } from 'chai';
import { TreeNode, postOrder } from '../TreeNode.mjs'
import { testData } from './testData.mjs'

const isDefined = (value) => value !== undefined && value !== null;

/**
 * @param {TreeNode} root
 */
const getLeaves = ({ val, left, right }, leaves = []) => {
    if (isDefined(left)) getLeaves(left, leaves);
    if (isDefined(right)) getLeaves(right, leaves);

    if (!isDefined(left) && !isDefined(right)) {
        leaves.push(val)
    }

    return leaves
}

const isEqual = (array1, array2) => {
    if (array1.length !== array2.length) return false
    
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false
    }

    return true
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaves1 = getLeaves(root1);
    const leaves2 = getLeaves(root2);

    return isEqual(leaves1, leaves2)
};

// Tests

testData.forEach(({ root1, root2, expectedResult, log }) => {
    const root1Tree = postOrder(root1)
    const root2Tree = postOrder(root2)

    if (log) {
        console.log({ root1Tree, root2Tree })
    }

    expect(leafSimilar(root1Tree, root2Tree)).to.equal(expectedResult)
})

