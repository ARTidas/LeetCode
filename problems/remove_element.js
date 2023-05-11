/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    number_of_elements = nums.length;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            number_of_elements--;
            for (j = i; j < nums.length; j++) {
                nums[j] = nums[j + 1];
            }
            i--;
        }
    }

    return number_of_elements;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('remove_element.js');

    //TODO: finish...
    test_calls = [
        {
            "input": [3, [3,2,2,3]],
            "output": 2
        },
        {
            "input": [2, [0,1,2,2,3,0,4,2]],
            "output": 5
        },
    ];
    
    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = removeElement(test_parameters["input"][1], test_parameters["input"][0]);
            console.log(
                `${result.toString() === test_parameters["output"].toString() ? 'Passed' : 'FAILED'} -- ${test_parameters["input"][0].toString()}, ${test_parameters["input"][1].toString()} -- Expected: ${test_parameters["output"].toString()}, Actual: ${result.toString()}`
            );
            
        }
    );
});