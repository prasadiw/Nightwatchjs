var conf = require('../nightwatch.conf.js');
var loadHomePage = require('../utils/imgurPageLoad.js');
const IMG1 = '/images/image2.jpg'; // image for 'Image Upload Test'
const IMG2 = '/images/image3.jpg'; // image for 'Add Another Image Test'
const IMG3 = '/images/image4.jpg'; //'Add More Images Test'

module.exports = {
	'Image Upload Test': function (browser) {
	    loadHomePage(browser);
		browser
			.click('.upload-button')//click on image upload button
			.waitForElementVisible('#upload-modal', 10000)//waits for the image upload control to be loaded
			.waitForElementVisible('.browse-btn', 1000)
			.setValue('#global-files-button', require('path').resolve(__dirname + IMG1))//upload the specified image
			//assert the new post title header
			.waitForElementVisible('#upload-global > div > span:nth-child(3) > div > div.left.post-pad > div > div.post-header.is-owner > div > div.post-title-container > h1', 5000)
			//assert the first image holder
			.waitForElementVisible('.upload-global-post > div.left.post-pad > div > div.post-images.is-owner>div:nth-child(1) > div:nth-child(2) > div.image.post-image', 1000)
			//.end(); uncomment this line if you want to run only this test
	},

	'Add Another Image Test': function (browser) {
		browser
			.waitForElementVisible('.post-add-image.end', 10000)
			.click('.post-add-image.end')//click on Add another image button
			.waitForElementVisible('#upload-modal', 10000)
			.waitForElementVisible('.browse-btn', 1000)
			.setValue('#global-files-button', require('path').resolve(__dirname + IMG2))//upload the specified image
			//assert the image holder which keeps images uploaded by 'Add another image' button. location whould be the next div from the existing div
			.waitForElementVisible('.upload-global-post > div.left.post-pad > div > div.post-images.is-owner>div:nth-child(1) > div:nth-child(4) > div.image.post-image', 1000)
			//.end();uncomment this line if you want to run up to this test
	},

	'Add More Images Test': function (browser) {
		browser
			//waiting for load the post-options-extra list when the post has multiple uploaded images
			.waitForElementVisible('#post-options > div > ul > li:nth-child(2)', 5000)
			.pause(1000)//use/change this according to the internet bandwidth
			.click('#post-options > div > ul > li:nth-child(2)')//click on 'Add another image' button
			.waitForElementVisible('#upload-modal', 10000)
			.waitForElementVisible('.browse-btn', 1000)
			.setValue('#global-files-button', require('path').resolve(__dirname + IMG3))//upload the specified image
			//assert the image uploaded by 'Add more images' button. images should be placed in to the first div from the list of div s.
			.waitForElementVisible('.upload-global-post > div.left.post-pad > div > div.post-images.is-owner>div:nth-child(1) > div:nth-child(2) > div.image.post-image', 1000)
			.end();
	}
};