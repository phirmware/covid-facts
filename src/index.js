'use strict';

const facts = require('./covid-facts.json');
const uniqueRandomArray = require('unique-random-array');

module.exports = {
    random: uniqueRandomArray(facts),
    all: facts
}