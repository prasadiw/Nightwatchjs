var conf = require('../nightwatch.conf.js');

module.exports = function(browser) {//Navigate to home page
		return browser
				.click('div#topbar>div.header-center>a[href="//imgur.com"]')
				.waitForElementVisible('body', 10000)
				.pause(2000)
				.assert.title('Imgur: The most awesome images on the Internet')
};