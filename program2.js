/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {

    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

let result = 0;
for (let i = 0; i < s.length; i++) {
    const currentValue = roman[s[i]];
    const nextValue = (i < s.length - 1) ? roman[s[i + 1]] : 0;
    if (currentValue < nextValue) {
        result -= currentValue; 
    } else {
        result += currentValue; 
    }
}

return result; 
};


module.exports={romanToInt}