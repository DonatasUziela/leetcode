export const testData = [
    {
        rows: 2,
        seats: 5,
        gather: [[4, 0], [2, 0]],
        scatter: [[5, 1], [5, 1]],
        expectedResult: {
            gather: [[0, 0], []],
            scatter: [true, false]
        }
    },
    {
        rows: 2,
        seats: 5,
        gather: [[6, 1]],
        scatter: [[6, 1]],
        expectedResult: {
            gather: [[]],
            scatter: [true]
        }
    }
]

export const testData2 = [
    [
        ["BookMyShow","gather","gather","scatter","scatter"],
        [[2,5],[4,0],[2,0],[5,1],[5,1]]
    ],
    [
        ["BookMyShow","gather","scatter"],
        [[2,5],[6,1],[6,1]]
    ],
    [
        ["BookMyShow","scatter","gather","gather","gather"],
        [[3,999999999],[1000000000,2],[999999999,2],[999999999,2],[999999999,2]]
    ]
]
    