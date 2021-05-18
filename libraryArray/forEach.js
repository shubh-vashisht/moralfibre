const validator = require('./validator');
function forEach(arr, f) {
    validator(arr);
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = f(arr[i]);
    }
    return arr;
}

module.exports = forEach;