'use strict';

const expect = require('chai').expect;
const facts = require('./covid-facts.json');
const lib = require('./index');

// should have a list of all available names
// should get random name from list
// return some facts with number n

function checkType(array) {
    return array.every(function(item) {
        return typeof item === 'string';
    });
}

describe('covid-facts', function() {
    it('should work', function() {
        expect(true).to.be.true
    });

    it('gets all facts and tips', function() {
        const testfacts = lib.all;
        expect(testfacts).to.equal(facts)
    });

    it('should return all strings', function() {
        expect(checkType(lib.all)).to.be.true;
    })

    it('returns a random fact from facts and tips', function() {
        const random = lib.random();
        expect(facts).to.contain(random)
    })

    it('should return n number of facts', function() {
        const n = 3;
        const testfacts = lib.some(n);
        expect(testfacts.length).to.equal(n)
    })
});

