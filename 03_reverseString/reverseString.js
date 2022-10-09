const reverseString = function(word) {
    let string = '';

    let sentence = word;

    let reversed= sentence.split('').reverse().join('');

    string += reversed;

    return string;
};

// Do not edit below this line
module.exports = reverseString;

//Solution
//const reverseString = function(string) {
// return string.split('').reverse().join('');
//};
