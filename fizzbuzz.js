function fizzbuzz(number) {
    
    return (`${number % 3 ? '' : 'Fizz'}${number % 5 ? '' : 'Buzz'}${number % 7 ? '':'Bang'}` || number.toString());

};

function print(){

    const prompt = require("prompt-sync")();

    num = prompt("Enter a number: ");

    console.log(fizzbuzz(num));
    
}

print();

module.exports = fizzbuzz();


