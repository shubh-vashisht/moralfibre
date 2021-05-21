const validator = require('/Users/shubh/Desktop/Projects/PP/Node/ArrayFunctions/libraryArray/validator')
class classname {
    overloadableFunction() {
        var function1 = function (arg1) {
            validator(arg1);
            return arg1[arg1.length - 1];
        }
        var function2 = function (arg1, arg2) {
            validator(arg1)
            if (arg2 > arg1.length) {
                return arg1;
            } else {
                let ans = []
                let index = arg1.length - arg2;
                while (arg2 != 0) {
                    ans.push(arg1[index]);
                    index = index + 1;
                    arg2 = arg2 - 1;
                }
                return ans;
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