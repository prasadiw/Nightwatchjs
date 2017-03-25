var config = require('../nightwatch.conf.js');

module.exports = {
  'Load Imgur web site': function (browser) {
    browser
      .url('http://imgur.com/')//load url
      .waitForElementVisible('body', 1000)
      .assert.title('Imgur: The most awesome images on the Internet')//verify the page title
  },

  'Load Random Mode Test': function (browser) {
    browser
      .waitForElementVisible('.sort-options > ul >li > a#random-button', 1000)
      .click('.sort-options > ul >li > a#random-button')
      .waitForElementVisible('body', 1000)
      //assert url for new page navigation with posts
      .assert.urlContains('imgur.com/gallery/')
      .waitForElementVisible('.post-title-container > h1.post-title', 1000)
      //assert post header for the random post
      .assert.elementPresent('.post-title-container > h1.post-title')
      //assert random post
      .assert.elementPresent('.post-container > div.post-images')
      .waitForElementVisible('#side-gallery > div > div.sg-header > a > h2.sg-title', 1000)
      //assert page by header text:'Random'
      .assert.containsText('#side-gallery > div > div.sg-header > a > h2.sg-title', 'RANDOM')
      .end();
  }
};