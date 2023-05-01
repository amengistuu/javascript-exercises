const palindromes = function (string) {
    // process string by making it all lowercase and removing non-alphabetic characters
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "")
    // compare reversed processedString to the processedString
    return processedString.split("").reverse().join("") === processedString;
};

// Do not edit below this line
module.exports = palindromes;
