var config = require('../nightwatch.conf.js');
var loadHomePage = require('../utils/imgurPageLoad.js');

module.exports = {
  'Load Random Mode Test': function (browser) {
    loadHomePage(browser);
    browser
      .waitForElementVisible('.sort-options > ul >li:nth-child(1) > a#random-button', 5000)
      .click('.sort-options > ul >li > a#random-button')
      .waitForElementVisible('body', 10000)
      .pause(2000)//This only requires for firefox browser
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