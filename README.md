# immutable-app-http-error

Throws an error object that will be used by the
[immutable-app](https://www.npmjs.com/package/immutable-app) framework to
generate the appropriate HTTP response.

## Throwing a supported error with default message

    const httpError = require('immutable-app-http-error')

    httpError(404)

## Supported error codes and default messages

Error Code  | Default Message       |
------------|-----------------------|
400         | Application Error     |
403         | Access Denied         |
404         | Not Found             |
409         | Conflict              |
500         | Internal Server Error |

## httpError arguments

    httpError(code, message, data, cookies, headers)

## Throwing an error with a custom message

    httpError(123, 'FOOBAR')

## Throwing an error with data attached

    httpError(409, null, {...})

Any error can have data attached. In the case of 409 Conflict errors the data
will be returned as the response body along with the 409 status code.

## Throwing an error that sets cookies with response

    httpError(400, null, null, {foo: bar})

The cookies aregument must be an object. Each property will be used as the
cookie name and the value will be used to set/clear the cookie.

If the value is false the cookie is cleared.

If the value is a string the cookie will be set with default options.

If the value is an object the value property of the object will be used as the
cookie value and the rest of the properties will be used to set the cookie
options.

## Throwing an error that sets http headers with response

    httpError(400, null, null, null, {foo: bar})

The headers argument must be an object. The properties and values will be used
to set http headers for the response.