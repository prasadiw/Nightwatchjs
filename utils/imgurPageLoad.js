var conf = require('../nightwatch.conf.js');

module.exports = function(browser) {
		return browser
			.url('http://imgur.com/')//load url
			.waitForElementVisible('body', 1000)
			.assert.title('Imgur: The most awesome images on the Internet')//verify the page title
};