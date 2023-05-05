/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //Handle the obvious cases beforehand
    if (nums.length === 2) {
        return [0, 1]
    }

    for (var i = 0; i < nums.length; i++) {
        //Start scanning from the next element in the next cycle
        for (var j = (i + 1); j < nums.length; j++) {
            //Exact comparators are faster than loose comparators
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    //Still, lets handle any unforeseen cases
    return false;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('two_sums.js');

    test_calls = [
        {
            "input": [[2,7,11,15], 9],
            "output": [0,1]
        },
        {
            "input": [[3,2,4], 6],
            "output": [1,2]
        },
        {
            "input": [[3,3], 6],
            "output": [0, 1]
        },
    ];
    
    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = twoSum(test_parameters["input"][0], test_parameters["input"][1]);
            console.log(
                `${result.toString() === test_parameters["output"].toString() ? 'Passed' : 'FAILED'} -- ${test_parameters["input"][0]}, ${test_parameters["input"][1]} -- Expected: ${test_parameters["output"]}, Actual: ${result}`
            );
            
        }
    );
});