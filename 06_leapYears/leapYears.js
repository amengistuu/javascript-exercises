const leapYears = function(year) {
    // Leap years are years divisible by four (like 1984 and 2004). 
    // However, years divisible by 100 are not leap years (such as 1800 and 1900) 
    // unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 
    // (Yes, it's all pretty confusing)


    // LOGIC
    // if it IS divisible by 4 --> not a leap year
    // if it IS divisble by 4 AND 400 --> leap year
    // if it IS NOT divisible by 4 AND 400, but it IS divisble by 4 AND it is NOT divisible by 100 --> leap year

    // MY ORIGINAL CODE
    // if (!(year % 4 == 0)) return false;
    // if (year % 4 == 0 && year % 400 == 0) { // checks leap years that can be divided by 400
    //     return true;
    // } else if (year % 4 == 0 && year % 100 != 0) { // checks for leap years that are not divisble by 100
    //     return true;
    // } else {
    //     return false;
    // }

    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

    
};

// Do not edit below this line
module.exports = leapYears;
