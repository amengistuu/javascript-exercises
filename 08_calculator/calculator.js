const add = function() {
	let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

const subtract = function() {
	let sum = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    sum -= arguments[i];
  }
  return sum;
};

const sum = function(array) {
  if (array.length == 0) return array.length;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  if (array.length == 0) return array.length;
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
};

const power = function() {
	let sum = 1;
  for (let i = 0; i < arguments[1]; i++) {
    sum *= arguments[0];
  }
  return sum;
};

const factorial = function() {
	// initialize sum variable
  // create an array
  // loop from the number all the way to 1 and push each of those numbers into array
  // create another loop that multiplies each value in the array and makes it = sum
  // return sum
  if (arguments[0] == 0) return 1;
  let sum = 1;
  let array = []
  for (let i = arguments[0]; i >= 1; i--) {
    array.push(i);
  }
  for (let i = 0; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
