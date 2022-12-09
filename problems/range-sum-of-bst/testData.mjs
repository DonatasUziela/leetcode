import { TreeNode } from '../../utils/TreeNode.mjs'

export const testData = [
    {
        root: new TreeNode(10,
            new TreeNode(5,
                new TreeNode(3),
                new TreeNode(7)
            ),
            new TreeNode(15,
                null,
                new TreeNode(18)
            )
        ),
        low: 7,
        high: 15,
        expectedResult: 32
    },
    {
        root: new TreeNode(10,
            new TreeNode(5,
                new TreeNode(3,
                    new TreeNode(1)
                ),
                new TreeNode(7,
                    new TreeNode(6)
                )
            ),
            new TreeNode(15,
                new TreeNode(13),
                new TreeNode(18)
            )
        ),
        low: 6,
        high: 10,
        expectedResult: 23
    }
]