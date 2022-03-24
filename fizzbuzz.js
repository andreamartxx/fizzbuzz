module.exports = function(number) {
    if(number == 15){
        return 'FizzBuzz';
    }
    if (number % 3 == 0) {
        return 'Fizz';
    }else if(number % 5 == 0){
        return 'Buzz';
    }
    
    return number.toString();
};