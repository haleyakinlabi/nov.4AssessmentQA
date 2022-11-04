const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4]
describe('shuffleArray should', () => {
    test('should return arrays of equal length', () => {
    let results = shuffleArray(testArr)
    expect(testArr.length).toEqual(results.length)
    })
    test('should return an array', () =>{
        let results = shuffleArray(testArr)
        expect(results).toEqual(expect.arrayContaining(testArr))
    })
    })