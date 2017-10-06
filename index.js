'use strict';

module.exports = function safeError(message) {
	var err = new Error(message);

	err.safe = true;

	return err;
};
