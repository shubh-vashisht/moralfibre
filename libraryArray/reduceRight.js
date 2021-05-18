const validator = require('./validator');
function reduceRight(arr, f, init) {
    validator(arr);
    let acc = init;
    for (let i = arr.length - 1; i >= 0; --i) {
        acc = f(acc, arr[i]);
    }
    return acc;
}
module.exports = reduceRight;