// https://leetcode.com/problems/add-two-numbers
// node problems/add-two-numbers/index.mjs

import { testCases } from './testData.mjs';
import { ListNode } from '../../utils/ListNode.mjs'

/**
 * @param {ListNode} node
 */
const listToArray = (node) => {
    const result = [];
    while (node) {
        result.push(node.val)
        node = node.next
    }
    return result
}

const arrayToList = (array) => {
    let first = new ListNode(array.pop());
    let val;
    let result = first;

    while ((val = array.pop()) !== undefined) {
        result.next = new ListNode(val)
        result = result.next;
    }

    return first
}

/**
 * @param {ListNode} node
 */
const toNumber = (node) => BigInt(listToArray(node).reverse().join(''))

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const number1 = toNumber(l1)
    const number2 = toNumber(l2)

    const answer = (number1 + number2).toString().split('')

    return arrayToList(answer)
};

testCases.forEach(({ l1, l2, expectedResult }) => {
    const result = addTwoNumbers(l1, l2);
    if (result.toString() !== expectedResult.toString()) {
        throw new Error(`Test failed! l1: ${l1} | l2: ${l2} | expectedResult ${expectedResult} | result: ${result}`)
    }
});
