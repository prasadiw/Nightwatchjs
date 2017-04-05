var config = require('../nightwatch.conf.js');
var loadHomePage = require('../utils/imgurPageLoad.js');
var searchtext = 'NIGHTwatch';

module.exports = {
	'Search Text Test': function (browser) {
	    loadHomePage(browser);
		browser
			.waitForElementVisible('body', 1000)
			.waitForElementVisible('#global-search-container', 1000)
			.click('#global-search-container > div.search-container.search-closed > form.search-form > div.search-icon-container > div.icon-search')//click on search control
			.setValue('#global-search-container > div.search-container.search-focused > form > input', searchtext)//set the search value manually
			.click('#global-search-container > div.search-container.search-focused > form > div > div.icon-search')
			.waitForElementVisible('#content > div.sentence-sorting.search-sentence', 3000)//wait for header
			//verify header for the search text
			.assert.containsText('div.sentence-sorting.search-sentence > span.search-term-text.sorting-text-align', searchtext)
			//verify loading of the result panel. this have to be passed even when no results found for the search criteria.
			.waitForElementVisible('div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child', 2000)

			.element('css selector', 'div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child > div.cards >  div.post', function (result) {
				if (result.status != -1) { //If images results are found, click on first image and verify image title for the search text
						browser.waitForElementVisible('div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child > div.cards >  div:nth-child(1) > a > img', 3000)
						browser.click('div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child > div.cards >  div:nth-child(1) > a > img')
						browser.waitForElementVisible('div.post-container > div.post-header>div>div.post-title-container',5000)
						//assert header text of the post page for the search text. Ignoring the case of the text when comparing.
						browser.assert.containsText('div.post-container > div.post-header>div>div.post-title-container>h1.post-title'.toLowerCase(), searchtext.toLowerCase())
					    browser.end();
				}
				browser.end();
			});
	}
};
