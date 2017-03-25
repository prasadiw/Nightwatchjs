var config = require('../nightwatch.conf.js');
var searchtext = 'nightwatch'

module.exports = {
	'Load Imgur web site': function (browser) {
		browser
			.url('http://imgur.com/')//load url
			.waitForElementVisible('body', 1000)
			.assert.title('Imgur: The most awesome images on the Internet')//verify the page title
			.waitForElementVisible('.upload-button', 1000)
	},

	'Search Text Test': function (browser) {
		browser
			.waitForElementVisible('body', 1000)
			.waitForElementVisible('#global-search-container', 1000)
			.click('#global-search-container > div.search-container.search-closed > form > input')//click on search control
			.setValue('#global-search-container > div.search-container.search-focused > form > input', searchtext)//set the search value manually
			.click('#global-search-container > div.search-container.search-focused > form > div > div.icon-search')
			.waitForElementVisible('#content > div.sentence-sorting.search-sentence', 1000)//wait for header
			//verify header for the search text
			.assert.containsText('div.sentence-sorting.search-sentence > span.search-term-text.sorting-text-align', searchtext)
			//verify loading of the result panel. this have to be passed even when no results found for the search criteria.
			.waitForElementVisible('div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child', 2000)

			.element('css selector', 'div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child > div.cards >  div.post', function (result) {
				if (result.status != -1) { //If images results are found, move to first image
					browser.moveToElement('div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child > div.cards >  div:nth-child(1)', 65.5, 100, function () {//load the hover over text of the first image result
						browser.waitForElementVisible('div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child > div.cards >  div:nth-child(1) > div.hover', 3000)
						//assert hover text for the search text 
						browser.assert.containsText('div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child > div.cards >  div:nth-child(1) >div.hover > p > span.matched-search-term > span.matched-search-term', searchtext)
					})
					browser.end();
				}
				browser.end();
			});
	}
};
