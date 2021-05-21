const find = require('../libraryArray/find');
const validator = require('/Users/shubh/Desktop/Projects/PP/Node/ArrayFunctions/libraryArray/validator')
class classname {
    overloadableFunction() {

        let arr = [];
        let argArray = [];
        for (let i = 0; i < arguments.length; ++i) {
            if (i == 0) {
                arr = arguments[0];
            } else {
                argArray.push(arguments[i]);
            }
        }
        let answer = []
        function finder(elem, arr) {
            for (let i = 0; i < arr.length; ++i) {
                if (elem === arr[i]) {
                    return true;
                }
            }
            return false;
        }
        for (let i = 0; i < arr.length; ++i) {
            if (!finder(arr[i], argArray)) {
                answer.push(arr[i]);
            }
        }
        return answer;
    }
}

let object = new classname();
module.exports = object.overloadableFunction;