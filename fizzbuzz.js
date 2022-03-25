function fizzbuzz(number) {
    
    return (`${number % 3 ? '' : 'Fizz'}${number % 5 ? '' : 'Buzz'}${number % 7 ? '':'Bang'}` || number.toString());

};

function print(){

    const prompt = require("prompt-sync")();

    num = prompt("Enter a number: ");

    console.log(`${num % 3 ? '' : 'Fizz'}${num % 5 ? '' : 'Buzz'}${num % 7 ? '':'Bang'}` || num.toString());
    
}

print();

module.exports = fizzbuzz();


