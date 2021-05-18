const validator = require('./validator');

function partition(list, f) {
    validator(list);
    let acc = [];
    let rej = [];
    for (let i = 0; i < list.length; ++i) {
        if (f(list[i])) {
            acc.push(list[i]);
        } else {
            rej.push(list[i]);
        }
    }
    return [acc, rej];
}

module.exports = partition;