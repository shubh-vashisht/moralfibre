const validator = require('./validator');
function invoke(arr, funcName) {
    validator(arr);
    if (module.exports.hasOwnProperty(funcName)) {
        return map(arr, module.exports[funcName]);
    }
    return arr;
}

module.exports = invoke;