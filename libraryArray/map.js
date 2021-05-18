const validator = require('./validator');
function map(arr, f) {
    validator(arr);
    let answer = [];
    for (let i = 0; i < arr.length; ++i) {
        answer.push(f(arr[i]));
    }
    return answer;
}
module.exports = map;