var conf = require('../nightwatch.conf.js');

module.exports = {
	'Test Load Imgur web site': function (browser) {
		browser
			.url('http://imgur.com/')//load url
			.waitForElementVisible('body', 1000)
			.assert.title('Imgur: The most awesome images on the Internet')//verify the page title
	},

	'Test Image Upload': function (browser) {
		browser
			.waitForElementVisible('.upload-button', 1000)
			.click('.upload-button')//click on image upload button
			.waitForElementVisible('#upload-modal', 1000)//waits for the image upload control to be loaded
			.waitForElementVisible('.browse-btn', 1000)
			//.waitForElementVisible('#global-files-button', 1000)
			.setValue('#global-files-button', require('path').resolve(__dirname + '/images/image1.jpg'))//upload the specified image
			//assert the new post title header
			.waitForElementVisible('#upload-global > div > span:nth-child(3) > div > div.left.post-pad > div > div.post-header.is-owner > div > div.post-title-container > h1', 10000)
			//assert the image holder
			.waitForElementVisible('div[class="image post-image"]', 5000)
			//.pause(2000)
			.end();
	}
};