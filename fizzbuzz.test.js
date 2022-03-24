const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    test('returns 1 for 1', () => {
        expect(fizzbuzz(1)).toEqual(1);
    });

    test('returns 2 for 2', () => {
        expect(fizzbuzz(2)).toEqual(2);
    });
});