/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let translate_table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    result = translate_table[s[s.length - 1]];
    for (i = s.length - 1; i > 0; i--) {
        if (translate_table[s[i - 1]] >= translate_table[s[i]]) {
            result += translate_table[s[i - 1]];
        }
        else {
            result -= translate_table[s[i - 1]];
        }
    }

    return result;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('roman_to_integer.js');

    test_calls = [
        {
            "input": 'III',
            "output": 3
        },
        {
            "input": 'LVIII',
            "output": 58
        },
        {
            "input": 'MCMXCIV',
            "output": 1994
        },
    ];
    
    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = romanToInt(test_parameters["input"]);
            console.log(
                `${result === test_parameters["output"] ? 'Passed' : 'FAILED'} -- ${test_parameters["input"]} -- Expected: ${test_parameters["output"]}, Actual: ${result}`
            );
            
        }
    );
});