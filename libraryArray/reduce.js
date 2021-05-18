const validator = require('./validator');
function reduce(arr, f, init) {
    validator(arr);
    let acc = init;
    for (let i = 0; i < arr.length; ++i) {
        acc = f(acc, arr[i]);
    }
    return acc;
}
module.exports = reduce;