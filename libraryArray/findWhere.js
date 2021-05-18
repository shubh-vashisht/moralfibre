const validator = require('./validator');
function findWhere(arr, prop) {
    validator(arr);
    if (typeof prop !== "object" || Array.isArray(prop)) {
        throw new Error('You must enter an object as the property parameter');
    }
    let key = Object.keys(prop)[0];
    let value = Object.values(prop)[0];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i].hasOwnProperty(key)) {
            if (arr[i][key] === value) {
                return arr[i];
            }
        }
    }
    return undefined;
}
module.exports = findWhere;