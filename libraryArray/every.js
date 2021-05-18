const validator = require('./validator');
function every(arr, f) {
    validator(arr);
    for (let i = 0; i < arr.length; ++i) {
        if (!f(arr[i])) return false;
    }
    return true;
}

module.exports = every;