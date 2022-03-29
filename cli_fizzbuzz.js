const fizzbuzz = require('./fizzbuzz');

function print(){

    const prompt = require("prompt-sync")();

    num = prompt("Enter a number: ");

    console.log(fizzbuzz(num));
    
}

print();