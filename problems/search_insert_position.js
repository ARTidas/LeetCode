/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var lower_index = 0;
    var upper_index = nums.length;

    while (lower_index < upper_index) {        
        middle_index = lower_index + Math.floor((upper_index - lower_index) / 2);
        if (nums[middle_index] < target) {
            lower_index = middle_index + 1;
        }
        else {
            upper_index = middle_index;
        }
    }

    return lower_index;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('search_insert_position.js');

    test_calls = [
        {
            "input": [[1,3,5,6], 5],
            "output": 2
        },
        {
            "input": [[1,3,5,6], 2],
            "output": 1
        },
        {
            "input": [[1,3,5,6], 7],
            "output": 4
        },
    ];
    
    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = searchInsert(test_parameters["input"][0], test_parameters["input"][1]);
            console.log(
                `${result.toString() === test_parameters["output"].toString() ? 'Passed' : 'FAILED'} -- ${test_parameters["input"][0].toString()}, ${test_parameters["input"][1].toString()} -- Expected: ${test_parameters["output"]}, Actual: ${result}`
            );
            
        }
    );
});