const validator = require('./validator');
function contains(arr, element) {
    validator(arr);
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false
}
module.exports = contains;