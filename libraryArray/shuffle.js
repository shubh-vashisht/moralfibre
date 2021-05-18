const validator = require('./validator');
function shuffle(list) {
    let copy = [];
    for (let i = 0; i < list.length; ++i) {
        copy.push(list[i]);
    }
    function randomizer(x) {
        return Math.floor(Math.random() * x);
    }
    validator(list);
    for (let i = 0; i < list.length; ++i) {
        let index = randomizer(copy.length);
        list[i] = copy[index];
        copy.splice(index, 1);
    }
    return list;
}

module.exports = shuffle;
