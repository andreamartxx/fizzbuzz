const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    test('returns 1 for 1', () => {
        expect(fizzbuzz(1)).toEqual('1');
    });

    test('returns 2 for 2', () => {
        expect(fizzbuzz(2)).toEqual('2');
    });

    test('returns 4 for 4', () => {
        expect(fizzbuzz(4)).toEqual('4');
    });

    test('return Fizz for 3', () => {
        expect(fizzbuzz(3)).toEqual('Fizz');
    });
});