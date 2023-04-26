const sumAll = function(num1, num2) {
    if (
        Number.isInteger(num1) === false || Number.isInteger(num2) === false ||
        num1 < 0 || num2 < 0
        ) {
        return 'ERROR';
    } else {
        let sum = 0;
        let lowestNum = 0;
        let highestNum = 0;
        if (num2 > num1) {
            lowestNum = num1;
            highestNum = num2;
        } else {
            lowestNum = num2;
            highestNum = num1;
        }
        for (let i = lowestNum; i <= highestNum; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
