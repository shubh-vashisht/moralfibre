const validator = require('./validator');
function compact(list) {
    validator(list);
    for (let i = 0; i < list.length; ++i) {
        if (!list[i]) {
            list.splice(i, 1);
        }
    }
    return list;
}

module.exports = compact;
