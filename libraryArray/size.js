const validator = require('./validator');
function size(list) {
    if (Array.isArray(list)) {
        validator(list);
        return list.length;
    } else {
        return Object.keys(list).length;
    }

}

module.exports = size;