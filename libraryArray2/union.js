const validator = require('/Users/shubh/Desktop/Projects/PP/Node/ArrayFunctions/libraryArray/validator')
class classname {
    overloadableFunction() {
        let answer = [];
        for (let i = 0; i < arguments.length; ++i) {
            for (let j = 0; j < arguments[i].length; ++j) {
                if (!finder(arguments[i][j], answer)) {
                    answer.push(arguments[i][j]);
                }
            }
        }
        function finder(elem, arr) {
            for (let i = 0; i < arr.length; ++i) {
                if (elem === arr[i]) {
                    return true;
                }
            }
            return false;
        }
        return answer;
    }
}

let object = new classname();
module.exports = object.overloadableFunction;