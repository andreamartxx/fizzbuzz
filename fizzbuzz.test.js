const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    test('returns 1 for 1', () => {
        expect(fizzbuzz(1)).toEqual(1);
    });
});