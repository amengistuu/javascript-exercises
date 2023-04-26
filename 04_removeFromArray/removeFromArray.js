const removeFromArray = function(array, ...args) {
    const newArray = [];
    // checks each item in the array
    array.forEach((item) => {
        // if the item in the array does not match the argument
        // push the item into a new array
        if (!args.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
