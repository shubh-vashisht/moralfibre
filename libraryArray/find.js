const validator = require('./validator');
function find(arr, f) {
    validator(arr);
    for (let i = 0; i < arr.length; ++i) {
        if (f(arr[i])) return arr[i];
    }
    return undefined;
}
module.exports = find;