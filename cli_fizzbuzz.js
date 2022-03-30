const fizzbuzz = require('./fizzbuzz');

function print(prompt, console){

    num = prompt("Enter a number: ");

    console.log(fizzbuzz(num));
    
}

print(require("prompt-sync")(), console);