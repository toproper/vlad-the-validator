const validate = require('../validate');
const expect = require('chai').expect;

describe('#validate()', function() {
    context('with too few fields', function() {
        it("should throw 'Wrong number of fields'", function() {
            expect(function() {
                validate({name: 'string',age: 'number'}, {name: 'James'})
                }).to.throw('Wrong number of fields')
        })
    })

    context('with too many fields', function() {
        it("should throw 'Wrong number of fields'", function() {
            expect(function() {
                validate({name: 'string'}, {name: 'James', age: 22})
                }).to.throw('Wrong number of fields')
        })
    })

    context('with a missing key', function() {
        it("should throw 'Missing key'", function() {
            expect(function() {
                validate({name: 'string'}, {nombre: 'James'})
                }).to.throw('Missing key')
        })
    })

    context('with a number when expecting a string', function() {
        it("should throw 'Type mismatch'", function() {
            expect(function() {
                validate({name: 'string'}, {name: 22})
                }).to.throw('Type mismatch')
        })
    })

    context('with a array when expecting a object', function() {
        it("should throw 'Type mismatch'", function() {
            expect(function() {
                validate({name: 'array'}, {name: {}})
                }).to.throw('Type mismatch')
        })
    })

    context('with a object when expecting an array', function() {
        it("should throw 'Type mismatch'", function() {
            expect(function() {
                validate({name: 'object'}, {name: []})
                }).to.throw('Type mismatch')
        })
    })
})