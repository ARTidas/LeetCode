/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (var i = 0; i < (haystack.length - needle.length + 1); i++) {
        for (var j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }

            if (j === needle.length - 1) {
                return i;
            }
        }
    }

    return -1;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('find_the_index_of_the_first_occurrence_in_a_string.js');

    test_calls = [
        {
            "input": ["sadbutsad", "sad"],
            "output": 0
        },
        {
            "input": ["leetcode", "leeto"],
            "output": -1
        },
        {
            "input": ["hello", "ll"],
            "output": 2
        },
        {
            "input": ["a", "a"],
            "output": 0
        },
        {
            "input": ["abc", "c"],
            "output": 2
        },
    ];
    
    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = strStr(test_parameters["input"][0], test_parameters["input"][1]);
            console.log(
                `${result.toString() === test_parameters["output"].toString() ? 'Passed' : 'FAILED'} -- ${test_parameters["input"][0].toString()}, ${test_parameters["input"][1].toString()} -- Expected: ${test_parameters["output"]}, Actual: ${result}`
            );
            
        }
    );
});