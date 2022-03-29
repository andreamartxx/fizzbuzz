function fizzbuzz(number) {
    
    return (`${number % 3 ? '' : 'Fizz'}${number % 5 ? '' : 'Buzz'}${number % 7 ? '':'Bang'}` || number.toString());

};

module.exports = fizzbuzz;





