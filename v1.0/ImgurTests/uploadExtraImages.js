var conf = require('../nightwatch.conf.js');

module.exports = {
	'Load Imgur url Test': function (browser) {
		browser
			.url('http://imgur.com/')//load url
			.waitForElementVisible('body', 1000)
			.assert.title('Imgur: The most awesome images on the Internet')//verify the page title
			.waitForElementVisible('.upload-button', 1000)
	},

	'Image Upload Test': function (browser) {
		browser
			.click('.upload-button')//click on image upload button
			.waitForElementVisible('#upload-modal', 10000)//waits for the image upload control to be loaded
			.waitForElementVisible('.browse-btn', 1000)
			.setValue('#global-files-button', require('path').resolve(__dirname + '/images/images.jpg'))//upload the specified image
			//assert the new post title header
			.waitForElementVisible('#upload-global > div > span:nth-child(3) > div > div.left.post-pad > div > div.post-header.is-owner > div > div.post-title-container > h1', 1000)
			//assert the first image holder
			.waitForElementVisible('.upload-global-post > div.left.post-pad > div > div.post-images.is-owner>div:nth-child(1) > div:nth-child(2) > div.image.post-image', 1000)
			//.end();
	},

	'Add Another Image Test': function (browser) {
		browser
			.waitForElementVisible('.post-add-image.end', 10000)
			.click('.post-add-image.end')//click on Add another image button
			.waitForElementVisible('#upload-modal', 10000)
			.waitForElementVisible('.browse-btn', 1000)
			.setValue('#global-files-button', require('path').resolve(__dirname + '/images/nature2.jpg'))//upload the specified image
			//assert the image holder which keeps images uploaded by 'Add another image' button. location whould be the next div from the existing div
			.waitForElementVisible('.upload-global-post > div.left.post-pad > div > div.post-images.is-owner>div:nth-child(1) > div:nth-child(4) > div.image.post-image', 1000)
			//.end();
	},

	'Add More Images Test': function (browser) {
		browser
			.waitForElementVisible('#post-options > div > ul > li:nth-child(2)', 1000)
			.click('#post-options > div > ul > li:nth-child(2) > span')//click on 'Add another image' button
			.waitForElementVisible('#upload-modal', 10000)
			.waitForElementVisible('.browse-btn', 1000)
			.setValue('#global-files-button', require('path').resolve(__dirname + '/images/nature3.jpg'))//upload the specified image
			//assert the image uploaded by 'Add more images' button. images should be placed in to the first div from the list of div s.
			.waitForElementVisible('.upload-global-post > div.left.post-pad > div > div.post-images.is-owner>div:nth-child(1) > div:nth-child(2) > div.image.post-image', 1000)
			.pause(2000)
			.end();
	}
};