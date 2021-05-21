const validator = require('/Users/shubh/Desktop/Projects/PP/Node/ArrayFunctions/libraryArray/validator')
class classname {
    overloadableFunction() {
        var function1 = function (arg1) {
            validator(arg1);
            let answer = [];
            for (let i = 1; i < arg1.length; ++i) {
                answer.push(arg1[i]);
            }
            return answer;
        }
        var function2 = function (arg1, arg2) {
            validator(arg1)
            let index = arg2;
            if (index >= arg1.length) {
                return [];
            } else {
                let answer = [];
                for (let i = arg2; i < arg1.length; ++i) {
                    answer.push(arg1[i]);
                }
                return answer;
            }
        }

        if (arguments.length === 1) {
            return function1(arguments[0]);
        } else if (arguments.length === 2) {
            return function2(arguments[0], arguments[1]);
        } else if (arguments.length < 1) {
            throw new Error('Expected atleast one argument');
        } else {
            throw new Error('Expected atmost two arguments')
        }
    }
}

let object = new classname();
module.exports = object.overloadableFunction;