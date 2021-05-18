const validator = require('./validator');
function some(arr, f) {
    validator(arr);
    for (let i = 0; i < arr.length; ++i) {
        if (f(arr[i])) return true;
    }
    return false;
}
module.exports = some;