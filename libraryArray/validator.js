function validator(arr) {
    if (arr.length === 0) {
        throw new Error('You must enter an array of with some elements');
    }
    if (!Array.isArray(arr)) {
        throw new Error('Argument 1 must of type array');
    }
}

module.exports = validator;