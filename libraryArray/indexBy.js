const sortBy = require('./sortBy');
function indexBy(arr, key) {
    let ans = sortBy(arr, key);
    let answer = {};
    for (let i = 0; i < ans.length; ++i) {
        answer[ans[i][key].toString()] = ans[i];
    }
    return answer;
}

module.exports = indexBy;