/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascal_triangle = [[1]];

    for (i = 1; i < numRows; i++) {
        let row = [];

        for (j = 0; j < i + 1; j++) {
            row[j] = 
                (pascal_triangle[i - 1][j - 1] || 0) +
                (pascal_triangle[i - 1][j] || 0)
            ;
        }

        pascal_triangle[i] = row;
    }

    return pascal_triangle;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('-----------------------------------------------------------------------');
    console.log('pascals_triangle.js');
    
    test_calls = [
        {
            "input": 5,
            "output": [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
        },
        {
            "input": 1,
            "output": [[1]]
        },
    ];

    Object.entries(test_calls).forEach(
        test_call => {
            const [index, test_parameters] = test_call;
    
            let result = generate(test_parameters["input"]);
            console.log(
                `${result.toString() === test_parameters["output"].toString() ? 'Passed' : 'FAILED'} -- ${test_parameters["input"]} -- Expected: ${test_parameters["output"]}, Actual: ${result}`
            );
            
        }
    );
});