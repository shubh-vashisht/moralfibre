const validator = require('./validator');
function countBy(arr, f) {
    validator(arr);
    let ans = {};
    for (let i = 0; i < arr.length; ++i) {
        if (ans.hasOwnProperty(f(arr[i]))) {
            ans[f(arr[i]).toString()] += 1;
        } else {
            ans[f(arr[i]).toString()] = 1;
        }
    }
    return ans;
}

module.exports = countBy;