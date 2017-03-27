var config = require('../nightwatch.conf.js');
var searchtext = 'nightwatch'

module.exports = {
	'Load Imgur web site': function (browser) {
		browser
			.url('http://imgur.com/')//load url
			.waitForElementVisible('body', 1000)
			.assert.title('Imgur: The most awesome images on the Internet')//verify the page title
	},

	'Search Text Test': function (browser) {
		browser
			.waitForElementVisible('body', 5000)
			.waitForElementVisible('div#secondary-nav > ul.user-nav > li#global-search-container > div.search-container.search-closed', 5000)
			.click('div#secondary-nav > ul.user-nav > li#global-search-container > div.search-container.search-closed > form.search-form > div.search-icon-container > div.icon-search')//click on search control
			.setValue('div#secondary-nav > ul.user-nav > li#global-search-container > div.search-container.search-focused > form > input', searchtext)//set the search value manually
			.click('div#secondary-nav > ul.user-nav > li#global-search-container > div.search-container.search-focused > form > div > div.icon-search')
			.waitForElementVisible('#content > div.sentence-sorting.search-sentence', 1000)//wait for header
			//verify header for the search text
			.assert.containsText('div.sentence-sorting.search-sentence > span.search-term-text.sorting-text-align', searchtext)
			//verify loading of the result panel. this have to be passed even when no results found for the search criteria.
			.waitForElementVisible('div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child', 5000)
			.end()
	}
};
