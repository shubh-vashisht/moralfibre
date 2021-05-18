const validator = require('./validator');
function filter(arr, f) {
    validator(arr);
    let ans = [];
    for (let i = 0; i < arr.length; ++i) {
        if (f(arr[i])) ans.push(arr[i]);
    }
    return ans;
}
module.exports = filter;