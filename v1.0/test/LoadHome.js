module.exports = {
	'Load Imgur Home Test': function (browser) {
		browser
			.click('a[href="//imgur.com"]')
			.waitForElementVisible('body', 1000)
			.assert.title('Imgur: The most awesome images on the Internet')
	}
};