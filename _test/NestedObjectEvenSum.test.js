const nestedObjectEvenSum = require('../NestedObjectEvenSum');

describe('nestedObjectEvenSum function', () => {
    it('should return sum of even numbers from nested object correctly', () => {
        // Arrange
        const obj1 = {
            outer: 2,
            obj: {
                inner: 2,
                otherObj: {
                    superInner: 2,
                    notANumber: true,
                    alsoNotANumber: "yup"
                }
            }
        };
        const obj2 = {
            a: 2,
            b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
            c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
            d: 1,
            e: { e: { e: 4 }, ee: 'car' }
        };

        // Action and Assert
        expect(nestedObjectEvenSum(obj1)).toBe(6);
        expect(nestedObjectEvenSum(obj2)).toBe(12);
    });
});