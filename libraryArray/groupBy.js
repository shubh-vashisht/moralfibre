const validator = require('./validator');
function groupBy(arr, f) {
    validator(arr);
    let ans = {};
    for (let i = 0; i < arr.length; ++i) {
        if (ans.hasOwnProperty(f(arr[i]))) {
            ans[f(arr[i]).toString()].push(arr[i]);
        } else {
            ans[f(arr[i]).toString()] = [arr[i]];
        }
    }
    return ans;
}

module.exports = groupBy;