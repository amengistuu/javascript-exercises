const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if ((num === 0)) return num;
    let input = num;
    // converts num to an int if it is a string value
    if (typeof(num) === "string") {
        input = parseInt(num);
    }
    let previous = 0;
    let current = 1;
    for (let i = 1; i < input; i++) {
        let temp = current;
        current = previous + current;
        previous = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
