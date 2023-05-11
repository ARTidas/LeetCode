/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*var plusOne = function(digits) {
    carry = 1;

    for (var i = digits.length - 1; i > -1; i--) {
        if (carry !== 0) {
            digits[i] = digits[i] + carry;
            carry = 0;
        }
        if (digits[i] > 9) {
            carry = digits[i] - 9;
            digits[i] = digits[i] % 10;
        }
        while (i === 0 && carry > 0) {
            digits.unshift(carry % 10);
            carry -= 10;
        }
    }

    return digits;
};*/
var plusOne = function(digits) {
    carry = 1;

    for (var i = digits.length - 1; i > -1; i--) {
        if (carry === 1) {
            digits[i] += carry;
            carry = 0;
        }
        if (digits[i] > 9) {
            carry = 1;
            digits[i] = 0;
        }
        if (i === 0 && carry === 1) {
            digits.unshift(1);
        }
    }

    return digits;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('plus_one.js');

    test_calls = [
        {
            "input": [1,2,3],
            "output": [1,2,4]
        },
        {
            "input": [4,3,2,1],
            "output": [4,3,2,2]
        },
        {
            "input": [9],
            "output": [1,0]
        },
        {
            "input":    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
            "output": [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
    ];
    
    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = plusOne(test_parameters["input"]);
            console.log(
                `${result.toString() === test_parameters["output"].toString() ? 'Passed' : 'FAILED'} -- ${test_parameters["input"]} -- Expected: ${test_parameters["output"]}, Actual: ${result}`
            );
            
        }
    );
});