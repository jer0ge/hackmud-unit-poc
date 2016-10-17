var assert = require('chai').assert;
var fs = require('fs')
var code = fs.readFileSync('sample.js').toString().replace('function', 'function main').replace(/#s/, 'scriptor')
eval(code)
var scriptor = {
    accts: {
        balance: () => {
            return '1M2GC'
        }
    }
}

describe('sample', () => {
    it ('returns a hello world message with the value of accts.balance', () => {
        var res = main()
        assert.equal('hello, world! You have 1M2GC', res)
    })
})