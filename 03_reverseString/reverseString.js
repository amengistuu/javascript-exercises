const reverseString = function(string) {
    // let splitString = string.split("");
    // let reverseString = "";
    // for (i=1; i <= splitString.length; i++) {
    //     reverseString += splitString[splitString.length - i];
    // }
    // return reverseString;
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
