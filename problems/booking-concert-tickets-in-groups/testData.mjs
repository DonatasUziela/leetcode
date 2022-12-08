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
        ["BookMyShow","scatter","gather","gather"],
        [[3,7],[9,0],[2,2],[8,2]],
        [null,false,[0,0],[]]
    ],
    [
        ["BookMyShow","scatter","gather","gather","gather"],
        [[3,999999999],[1000000000,2],[999999999,2],[999999999,2],[999999999,2]],
        [null, true, [2, 0], [], []]
    ],
]
    