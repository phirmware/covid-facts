'use strict';

const facts = require('./covid-facts.json');
const tips = require('./covid-home.json');
const uniqueRandomArray = require('unique-random-array');



function returnNumber(number) {
    const shuffled = facts.sort(function(){return 0.5 - Math.random()});
    const selected = shuffled.slice(0,number);
    return selected;
}

module.exports = {
    random: uniqueRandomArray(facts),
    randomTips: uniqueRandomArray(tips), 
    all: facts, 
    allTips: tips,
    some: returnNumber,
    someTips: returnNumber
}