const validator = require('./validator');
function pluck(arr, propertyName) {
    validator(arr);
    let ans = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i].hasOwnProperty(propertyName)) {
            ans.push(arr[i][propertyName]);
        }
    }
    return ans;
}
module.exports = pluck;