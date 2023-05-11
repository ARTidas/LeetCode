/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var number_of_unique_elements = nums.length;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1] && nums[i + 1] !== undefined) {
            number_of_unique_elements--;
            for (j = i + 1; j < nums.length; j++) {
                nums[j] = nums[j + 1];
            }

            i--;
        }
    }

    return number_of_unique_elements;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('remove_duplicates_from_sorted_array.js');

    test_calls = [
        {
            "input": [1,1,2],
            "output": 2
        },
        {
            "input": [0,0,1,1,1,2,2,3,3,4],
            "output": 5
        },
    ];
    
    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = removeDuplicates(test_parameters["input"]);
            console.log(
                `${result.toString() === test_parameters["output"].toString() ? 'Passed' : 'FAILED'} -- ${test_parameters["input"].toString()} -- Expected: ${test_parameters["output"].toString()}, Actual: ${result.toString()}`
            );
            
        }
    );
});