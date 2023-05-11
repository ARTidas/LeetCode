/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    result_list = list1;

    

    return result_list;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('merge_two_sorted_lists.js');

    test_calls = [
        {
            "input": [[1,2,4], [1,3,4]],
            "output": [1,1,2,3,4,4]
        },
        {
            "input": [[], []],
            "output": []
        },
        {
            "input": [[], [0]],
            "output": [[0]]
        },
    ];
    
    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = mergeTwoLists(test_parameters["input"][0], test_parameters["input"][1]);
            console.log(
                `${result.toString() === test_parameters["output"].toString() ? 'Passed' : 'FAILED'} -- ${test_parameters["input"][0].toString()},${test_parameters["input"][1].toString()} -- Expected: ${test_parameters["output"].toString()}, Actual: ${result.toString()}`
            );
            
        }
    );
});