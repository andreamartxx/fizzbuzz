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

    test('return Fizz for 6', () => {
        expect(fizzbuzz(6)).toEqual('Fizz');
    });

    test('return Fizz for 9', () => {
        expect(fizzbuzz(9)).toEqual('Fizz');
    });

    test('return Buzz for 5', () => {
        expect(fizzbuzz(5)).toEqual('Buzz');
    });
    test('return Buzz for 10', () => {
        expect(fizzbuzz(10)).toEqual('Buzz');
    });

    test('return Buzz for 20', () => {
        expect(fizzbuzz(20)).toEqual('Buzz');
    });

    test('return FizzBuzz for 15', () => {
        expect(fizzbuzz(15)).toEqual('FizzBuzz');
    });

    test('return FizzBuzz for 45', () => {
        expect(fizzbuzz(45)).toEqual('FizzBuzz');
    });
});