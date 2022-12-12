// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
// node problems/maximum-difference-between-node-and-ancestor/index.mjs

import { expect } from "chai";
import { TreeNode, postOrder } from "../../utils/TreeNode.mjs";
import { testData } from './testData.mjs'

const isDefined = (value) => value !== undefined && value !== null;

/**
 * @param {TreeNode} root
 */
 const getSubtree = ({ val, left, right }, subTrees = []) => {
    const subTree = [];

    const l = isDefined(left) ? getSubtree(left, subTrees) : null;
    const r = isDefined(right) ? getSubtree(right, subTrees) : null;

    if (l) subTree.push(...l)
    if (r) subTree.push(...r)

    subTree.push(val);
    subTrees.push(subTree);

    return subTree
}

const reduceDiff = (result, item, array) => {

} 

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    const subtrees = [];
    getSubtree(root, subtrees);
    const result = subtrees
        .map(s => s.slice(0, -1))
        .filter(s => s.length)
        .map(s => s.reduce((reduceDiff, [])))
    console.log({ result })
    return Math.max(result)
};

testData.forEach(({ root, expectedResult }) => {
    const node = postOrder(root);
    console.log(node)
    expect(maxAncestorDiff(node)).to.equal(expectedResult);
})