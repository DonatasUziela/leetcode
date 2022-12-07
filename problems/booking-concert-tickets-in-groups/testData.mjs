export const testData = [
    [
        ["BookMyShow","gather","gather","scatter","scatter"],
        [[2,5],[4,0],[2,0],[5,1],[5,1]],
        [null, [0, 0], [], true, false]
    ],
    [
        ["BookMyShow","gather","scatter"],
        [[2,5],[6,1],[6,1]],
        [null, [], true]
    ],
    [
        ["BookMyShow","scatter","gather","gather","gather"],
        [[3,999999999],[1000000000,2],[999999999,2],[999999999,2],[999999999,2]],
        // don't know what is the expected result, but it should at least not fail due to memory exc
        [null, true, [], []]
    ]
]
    