function finder(ele, arr) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === ele) {
            return true;
        }
        else {
            false;
        }
    }
}

module.exports = finder;