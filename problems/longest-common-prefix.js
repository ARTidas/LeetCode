/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var longest_common_prefix = strs[0];

    for (var i = 1; i < strs.length; i++) {
        for (var j = 0; j < longest_common_prefix.length; j++) {
            if (longest_common_prefix[j] != strs[i][j]) {
                longest_common_prefix = longest_common_prefix.slice(0, j);
                
                continue;
            }
        }
    }

    return longest_common_prefix;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('longest-common-prefix.js');

    test_calls = [
        {
            "input": ["flower","flow","flight"],
            "output": "fl"
        },
        {
            "input": ["dog","racecar","car"],
            "output": ""
        },
    ];
    
    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = longestCommonPrefix(test_parameters["input"]);
            console.log(
                `${result === test_parameters["output"] ? 'Passed' : 'FAILED'} -- ${test_parameters["input"]} -- Expected: ${test_parameters["output"]}, Actual: ${result}`
            );
            
        }
    );
});