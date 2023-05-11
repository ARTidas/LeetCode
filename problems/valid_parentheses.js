/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //If the parentheses are not in pair, lets fail it fast
    if (s.length % 2 === 1) {
        return false;
    }

    var stack = [];
    var translator = {
        '(':')',
        '[':']',
        '{':'}',
    };

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
            case '[':
            case '{':
                stack.push(
                    translator[s[i]]
                );
                break;
            default:
                if (stack.pop(s[i]) !== s[i]) {
                    return false;
                }
        }
    }

    return stack.length === 0;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('valid_parentheses.js');

    test_calls = [
        {
            "input": "()",
            "output": true
        },
        {
            "input": "()[]{}",
            "output": true
        },
        {
            "input": "(]",
            "output": false
        },
        {
            "input": "[",
            "output": false
        },
        {
            "input": "((",
            "output": false
        },
    ];
    
    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = isValid(test_parameters["input"]);
            console.log(
                `${result === test_parameters["output"] ? 'Passed' : 'FAILED'} -- ${test_parameters["input"]} -- Expected: ${test_parameters["output"]}, Actual: ${result}`
            );
            
        }
    );
});