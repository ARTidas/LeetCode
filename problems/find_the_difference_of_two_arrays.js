/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    diff_1 = [];
    diff_2 = [];

    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            if (!diff_1.includes(nums1[i])) {
                diff_1.push(nums1[i]);
            }
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i])) {
            if (!diff_2.includes(nums2[i])) {
                diff_2.push(nums2[i]);
            }
        }
    }

    return [diff_1, diff_2];
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('find_the_difference_of_two_arrays.js');
    
    test_calls = [
        {
            "input": [[1,2,3], [2,4,6]],
            "output": [[1,3],[4,6]]
        },
        {
            "input": [[1,2,3,3], [1,1,2,2]],
            "output": [[3],[]]
        },
    ];

    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = findDifference(test_parameters["input"][0], test_parameters["input"][1]);
            console.log(
                `${result.toString() === test_parameters["output"].toString() ? 'Passed' : 'FAILED'} -- ${test_parameters["input"][0]}, ${test_parameters["input"][1]} -- Expected: ${test_parameters["output"]}, Actual: ${result}`
            );
            
        }
    );
});