const validator = require('./validator');
function toArray(list) {
    if (Array.isArray(list)) {
        validator(list);
        return list;
    } else {
        let a = Object.keys(list);
        let answer = [];
        for (let i = 0; i < a.length; ++i) {
            let obj = {};
            let string = a[i];
            obj[string] = list[a[i]]
            answer.push(obj);
        }
        return answer;
    }
}

module.exports = toArray;