/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    max_dist_between_same_character = 0;
    found_duplicated_character = false;
    unduplicated_next_character_occurence_distance = 0;
    unduplicated_max_dist_between_same_character = 0;

    for (i = 0; i < s.length; i++) {
        
        next_character_occurence_index = s.indexOf(s[i], i + 1);

        if (next_character_occurence_index === -1) {
            unduplicated_next_character_occurence_distance = s.length - i;
        }
        else {
            found_duplicated_character = true;
            next_character_occurence_distance = next_character_occurence_index - i;
        }

        if (max_dist_between_same_character < next_character_occurence_distance) {
            max_dist_between_same_character = next_character_occurence_distance
        }
        if (unduplicated_max_dist_between_same_character < unduplicated_next_character_occurence_distance) {
            unduplicated_max_dist_between_same_character = unduplicated_next_character_occurence_distance
        }
    }

    return found_duplicated_character ? max_dist_between_same_character : unduplicated_max_dist_between_same_character;
};
/* ********************************************************
 * ********************************************************
 * ********************************************************/
test_calls = {
    "abcabcbb": 3,
    "bbbbb": 1,
    "pwwkew": 3,
    "au": 2,
    " ": 1,
    "": 0,
    "aab": 2,
};

Object.entries(test_calls).forEach(
    entry => {
        const [string, expected_count] = entry;
        let result = lengthOfLongestSubstring(string);
        console.log(
            `${expected_count === result ? 'Passed' : 'FAILED'} -- ${string} -- Expected: ${expected_count}, Actual: ${result}`
        );
    }
);