const convertToCelsius = function(fahrenheit) {
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return round(((5/9) * (fahrenheit - 32)), 1);
};

const convertToFahrenheit = function(celsius) {
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return round((((9/5) * celsius) + 32), 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
