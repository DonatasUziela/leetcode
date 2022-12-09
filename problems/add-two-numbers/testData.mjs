import { ListNode } from "../ListNode.mjs";

export const testCases = [
    {
        l1: new ListNode(2, new ListNode(4, new ListNode(3))),
        l2: new ListNode(5, new ListNode(6, new ListNode(4))),
        expectedResult: new ListNode(7, new ListNode(0, new ListNode(8)))
    },
    {
        l1: new ListNode(0),
        l2: new ListNode(0),
        expectedResult: new ListNode(0)
    },
    {
        l1: new ListNode(0),
        l2: new ListNode(1),
        expectedResult: new ListNode(1)
    },
    {
        l1: new ListNode(0),
        l2: new ListNode(1),
        expectedResult: new ListNode(1)
    },
    {
        l1: new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))),
        l2: new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
        expectedResult: new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))),
    }
]