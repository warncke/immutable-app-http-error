'use strict'

const chai = require('chai')
const assert = chai.assert

const httpError = require('../lib/immutable-app-http-error')

describe('immutable-app-http-error', function () {

    it('should throw 400 error by default', function () {
        try {
            httpError()
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.code, 400)
        assert.strictEqual(threw.message, 'Application Error')
    })

    it('should throw 403 with default message', function () {
        try {
            httpError(403)
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.code, 403)
        assert.strictEqual(threw.message, 'Access Denied')
    })

    it('should throw 404 with default message', function () {
        try {
            httpError(404)
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.code, 404)
        assert.strictEqual(threw.message, 'Not Found')
    })

    it('should throw 409 with default message', function () {
        try {
            httpError(409)
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.code, 409)
        assert.strictEqual(threw.message, 'Conflict')
    })

    it('should throw 500 with default message', function () {
        try {
            httpError(500)
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.code, 500)
        assert.strictEqual(threw.message, 'Internal Server Error')
    })

    it('should throw unrecognized code with default message', function () {
        try {
            httpError(486)
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.code, 486)
        assert.strictEqual(threw.message, 'Unspecified Error')
    })

    it('should throw error with known code and custom message', function () {
        try {
            httpError(404, 'foobar')
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.code, 404)
        assert.strictEqual(threw.message, 'foobar')
    })

    it('should throw error with data', function () {
        try {
            httpError(400, undefined, 'test')
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.data, 'test')
    })

    it('should throw error with cookies', function () {
        try {
            httpError(400, undefined, undefined, 'test')
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.cookies, 'test')
    })

    it('should throw error with headers', function () {
        try {
            httpError(400, undefined, undefined, undefined, 'test')
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.headers, 'test')
    })
})