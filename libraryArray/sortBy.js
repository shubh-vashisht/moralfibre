const validator = require('./validator')
function sortByFunction(arr, f) {
    validator(arr);
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (f(arr[j]) > f(arr[j + 1])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function sortByKey(arr, string) {
    validator(arr);
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if ((arr[j][string]) > (arr[j + 1][string])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function sortBy(arr, string) {
    if (typeof string === 'function') {
        return sortByFunction(arr, string);
    } else {
        return sortByKey(arr, string);
    }
}

module.exports = sortBy;