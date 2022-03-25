module.exports = function(number) {
    
    return (`${number % 3 ? '' : 'Fizz'}${number % 5 ? '' : 'Buzz'}` || number.toString());

};