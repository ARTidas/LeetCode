/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return true;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
test_calls = [
    {
        "input": 121,
        "output": true
    },
    {
        "input": -121,
        "output": false
    },
    {
        "input": 10,
        "output": false
    },
];

Object.entries(test_calls).forEach(
    test_call => {
        const [index, test_parameters] = test_call;

        let result = isPalindrome(test_parameters["input"]);
        console.log(
            `${result === test_parameters["output"] ? 'Passed' : 'FAILED'} -- ${test_parameters["input"]} -- Expected: ${test_parameters["output"]}, Actual: ${result}`
        );
        
    }
);