var test = require('tape');
var safeError = require('./index.js');

test('returns a safe error object', function(t) {
	var fixtureMessage = 'arbitrary error message';
	var err = safeError(fixtureMessage);

	t.equal(err.message, fixtureMessage, 'error message does not match');
	t.ok(err.safe, 'error object is not safe');
	t.end();
});
