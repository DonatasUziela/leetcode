export const testData = [
    {
        root1: [3,5,1,6,2,9,8,null,null,7,4],
        root2: [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8],
        expectedResult: true
    },
    {
        root1: [1,2,3],
        root2: [1,3,2],
        expectedResult: false
    },
    {
        root1: [3,5,1,6,2,9,8,null,null,7,4],
        root2: [3,5,1,6,7,4,2,null,null,null,null,null,null,9,11,null,null,8,10],
        expectedResult: false
    }
]