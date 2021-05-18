const validator = require('./validator')

class sample {
    overloadableFunction() {
        var function1 = function (arg1) {
            validator(arg1);
            let index = randomizer(arg1.length);
            return arg1[index];
        };

        var function2 = function (arg1, arg2) {
            let copy = [];
            let answer = [];
            for (let i = 0; i < arg1.length; ++i) {
                copy.push(arg1[i]);
            }
            for (let i = 0; i < arg2; ++i) {
                let index = randomizer(copy.length);
                answer.push(copy[index]);
                copy.splice(index, 1);
            }
            return answer;
        };

        function randomizer(x) {
            return Math.floor(Math.random() * x);
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

let object = new sample();
module.exports = object.overloadableFunction;


