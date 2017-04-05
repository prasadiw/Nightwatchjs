var conf = require('../nightwatch.conf.js');
var loadHomePage = require('../utils/imgurPageLoad.js');
const IMGPATH = '/images/image2.jpg'; // change if required.

module.exports = {
	'Test Image Upload': function (browser) {
		loadHomePage(browser);
		browser
			.waitForElementVisible('.upload-button', 1000)
			.click('.upload-button')//click on image upload button
			.waitForElementVisible('#upload-modal', 1000)//waits for the image upload control to be loaded
			.waitForElementVisible('.browse-btn', 1000)
			//.waitForElementVisible('#global-files-button', 1000)
			.setValue('#global-files-button', require('path').resolve(__dirname + IMGPATH))//upload the specified image
			//assert the new post title header
			.waitForElementVisible('#upload-global > div > span:nth-child(3) > div > div.left.post-pad > div > div.post-header.is-owner > div > div.post-title-container > h1', 10000)
			//assert the image holder
			.waitForElementVisible('div[class="image post-image"]', 5000)
			.end();
	}
};