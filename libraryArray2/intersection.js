const flatten = require('./flatten');
class classname {
    overloadableFunction() {
        let num = arguments.length;
        let array = [];
        for (let i = 0; i < arguments.length; ++i) {
            array.push(arguments[i]);
        }
        let full = flatten(array);
        let answer = [];
        for (let i = 0; i < full.length; ++i) {
            let elem = full[i];
            let count = 0;
            for (let j = i; j < full.length; ++j) {
                if (full[j] === elem) {
                    count = count + 1;
                }
            }
            if (count === num) {
                answer.push(full[i]);
            }
        }
        return answer;
    }
}


let object = new classname();
module.exports = object.overloadableFunction;