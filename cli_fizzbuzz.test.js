const printFunction = require('./cli_fizzbuzz');

describe('cli fizzbuzz kata', ()=>{

    test('num test', ()=>{
        const prompt = jest.fn();
        const log = jest.fn();
        const console = {log: log};
        prompt.mockReturnValueOnce(3);
        printFunction(prompt, console);
        expect(prompt).toHaveBeenCalledWith('Enter a number: ');
        expect(log).toHaveBeenCalledWith('Fizz');
    });
});