const intersection = require('./intersection');
const flatten = require('./flatten')
const finder = require('./finder')
class classname {
    overloadableFunction() {
        let ra = [];
        let arr = [];
        for (let i = 0; i < arguments.length; ++i) {
            if (i == 0) {
                ra = arguments[i];
            } else {
                arr.push(arguments[i]);
            }
        }
        let flat = flatten(arr);
        let inter = intersection(ra, flat);
        let answer = []
        for (let i = 0; i < ra.length; ++i) {
            if (!finder(ra[i], inter)) {
                answer.push(ra[i]);
            }
        }
        return answer;
    }
}

let object = new classname();
module.exports = object.overloadableFunction;