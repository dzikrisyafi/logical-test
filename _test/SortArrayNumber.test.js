const sortArrayNumber = require('../SortArrayNumber');

describe('sortArrayNumber function', () => {
    it('should return array of number from largest to smaller', () => {
        // Arrange
        const array = [1, 2, 4, 3, 5, 3, 2, 1];

        // Action and Assert
        expect(sortArrayNumber(array)).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
    });
});