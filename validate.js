module.exports = function(personSchema, personObj) {
    const schemaMap = new Map(Object.entries(personSchema))
    const responseMap = new Map(Object.entries(personObj))

    if (schemaMap.size !== responseMap.size) { throw Error('Wrong number of fields')}

    schemaMap.forEach(function validateMap(value, key, map) {
            const responseValue = responseMap.get(key)
            if(responseValue === undefined) { throw 'Missing key' }
            const responseType = Array.isArray(responseValue) ? 'array' : typeof responseValue
            if(value !== responseType) { throw 'Type mismatch'}
        }
    );
}