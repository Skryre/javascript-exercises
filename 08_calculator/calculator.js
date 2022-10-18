const add = function(number1, number2) {
  let results = number1 + number2;
  return results
};

const subtract = function(number1, number2) {
	let results = number1 - number2;
  return results
};

const sum = function(array) {
	return array.reduce((sum, numbers) => {
    return sum + numbers;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((mult, numbers) => {
    return mult * numbers;
  }, 1);
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
	else {
    return (number * factorial(number - 1))
  }
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
