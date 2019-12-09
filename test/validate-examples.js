const validate = require('../validate');
const expect = require('chai').expect;

const barSchema = {
    name: 'string',
    address: 'string',
    drinks: 'object',
};

const barObj = {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
};

const barObjFalse = {
    name: 'Sjonnies',
    address: 'Centrum 001',
    drinks: [ // < No object
        'Heineken', 
    ]
};

const carSchema = {
    brand: 'string',
    type: 'string',
    milage: 'number',
    extras: 'array',
};

const carObj = {
    brand: 'Mazda',
    type: 'MX5 NB 1.8',
    milage: 199999.99,
    extras: [
        '2001 Special Edition'
    ],
};

const carObjFalse = {
    brand: 'BMW',
    type: '335',
    milage: '100000', // < No number
    extras: [
        'LCI',
        'KW Coilovers',
    ],
};


const personSchema = {
    name: 'string',
    age: 'number',
    siblings: 'array',
    metaData: 'object',
    active: 'boolean',
 };

// Validates true
const personObj = {
    name: 'James',
    age: 25,
    siblings: ['Johnnathan'],
    metaData: {},
    active: true,
};

// Validates false
const personObjFalse = {
    name: 'James',
    age: 25,
    active: true,
};

describe('Validate examples', function() {
    context('Valid bar', function() {
        it("should not throw an error", function() {
            expect(function() {
                validate(barSchema, barObj)
                }).to.not.throw()
        })
    })

    context('Bar with no object', function() {
        it("should throw 'Type mismatch'", function() {
            expect(function() {
                validate(barSchema, barObjFalse)
                }).to.throw('Type mismatch')
        })
    })

    context('Valid car', function() {
        it("should not throw an error", function() {
            expect(function() {
                validate(carSchema, carObj)
                }).to.not.throw()
        })
    })

    context('Car with no number', function() {
        it("should throw 'Type mismatch'", function() {
            expect(function() {
                validate(carSchema, carObjFalse)
                }).to.throw('Type mismatch')
        })
    })

    context('Valid person', function() {
        it("should not throw an error", function() {
            expect(function() {
                validate(personSchema, personObj)
                }).to.not.throw()
        })
    })

    context('Person with wrong number of fields', function() {
        it("should throw 'Wrong number of fields'", function() {
            expect(function() {
                validate(personSchema, personObjFalse)
                }).to.throw('Wrong number of fields')
        })
    })
})