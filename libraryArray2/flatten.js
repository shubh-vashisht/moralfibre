const validator = require('/Users/shubh/Desktop/Projects/PP/Node/ArrayFunctions/libraryArray/validator')
class classname {
    overloadableFunction() {
        var function1 = function (arg1) {
            validator(arg1);
            let answer = [];
            function recursive(arr) {
                for (let i = 0; i < arr.length; ++i) {
                    if (Array.isArray(arr[i])) {
                        recursive(arr[i]);
                    } else {
                        answer.push(arr[i]);
                    }
                }
            }
            recursive(arg1);
            return answer;
        }
        var function2 = function (arg1, arg2) {
            validator(arg1)
            let answer = [];
            if (arg2 == true) {
                arg2 = 1;
            }
            if (arg2 == false) {
                arg2 = Infinity
            }
            function recursive(arr, num) {
                if (num > arg2) {
                    answer.push(arr);
                    return;
                }
                for (let i = 0; i < arr.length; ++i) {
                    if (Array.isArray(arr[i])) {
                        recursive(arr[i], num + 1);
                    } else {
                        answer.push(arr[i]);
                    }
                }
            }
            recursive(arg1, 0);
            return answer;

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