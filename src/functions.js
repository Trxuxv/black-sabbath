// Function which displays all the persons with nick name >Smith<

const data = require('../data.json');

function isChild() {
    return data.filter(x => x.age < 13)
}

function isTeenager(data) {
    return data.filter(x => x.age > 13 && x.age < 19)
}

function isAdult() {
    return data.filter(x => x.age > 19)
}

console.log(" Teenagers:", isTeenager(data));

console.log(" Children:", isChild(data));

console.log(" Adults:", isAdult(data));