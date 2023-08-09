const maxSubArraySum = require('../MaxSubArraySum');

describe('MaxSubArraySum function', () => {
    it('should return maximum subarray sum correctly', () => {
        // Arrange
        const array1 = [100, 200, 300, 400];
        const n1 = 2;
        const array2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
        const n2 = 4;
        const array3 = [-3, 4, 0, -2, 6, -1];
        const n3 = 2;

        // Action and Assert
        expect(maxSubArraySum(array1, n1)).toBe(700);
        expect(maxSubArraySum(array2, n2)).toBe(39);
        expect(maxSubArraySum(array3, n3)).toBe(5);
    });
});