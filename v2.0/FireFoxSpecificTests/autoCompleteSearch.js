var config = require('../nightwatch.conf.js');
var searchtext = 'nightwatch'

module.exports = {
	'Load Imgur web site': function (browser) {
		browser
			.url('http://imgur.com/')//load url
			.waitForElementVisible('body', 1000)
			.assert.title('Imgur: The most awesome images on the Internet')//verify the page title
			.waitForElementVisible('body', 1000)
	},

	'Test Search Text': function (browser) {
		browser			
			.waitForElementVisible('#global-search-container', 1000)
			.click('#global-search-container > div.search-container.search-closed > form.search-form > div.search-icon-container > div.icon-search')//click on search control
			.setValue('#global-search-container > div.search-container.search-focused > form > input', searchtext)//set the search value manually
			.click('#global-search-container > div.search-container.search-focused > form > div > div.icon-search')
			.waitForElementVisible('#content > div.sentence-sorting.search-sentence', 1000)//wait for header
			//verify header for the search text
			.assert.containsText('div.sentence-sorting.search-sentence > span.search-term-text.sorting-text-align', searchtext)
			//verify loading of the result panel. this have to be passed even when no results found for the search criteria.
			.waitForElementVisible('div.panel.hidden > div#imagelist > div.posts.br5.posts-search.first-child', 2000)
	},
	
	'Test Auto Complete Search with TAGS': function (browser) {
		browser
			.waitForElementVisible('body', 1000)
			.waitForElementVisible('#global-search-container', 1000)
			.click('#global-search-container > div.search-container.search-focused > form.search-form > div.search-icon-container > div.icon-search')//click on search control
			//clear the current search text
			.clearValue('#global-search-container > div.search-container.search-focused > form > input')
			//set the search text
			.setValue('#global-search-container > div.search-container.search-focused > form > input', searchtext)
			//wait for global search auto complete panel
			.waitForElementVisible('#global-search-container > div.search-container.search-focused > div.global-search-autocomplete',5000)
			.pause(2000)
			//If Tag suggestions are found, search by tags
			.element('css selector', '#global-search-container > div.search-container.search-focused > div.global-search-autocomplete > div:nth-child(1) > div.tag-icon', function (result) {
				if (result.status != -1) { //wait for auto suggestions using Tags
				    //click on first tagged result
				    browser.click('#global-search-container > div.search-container.search-focused > div.global-search-autocomplete > div:nth-child(1) > a:nth-child(3)')
					browser.waitForElementVisible('body', 5000)
					///verify url for tags
					//browser.assert.urlContains('imgur.com/t/')
					browser.waitForElementVisible('#content > div.sentence-sorting', 5000)//wait for header
					//verify header for the search text
			        //browser.assert.containsText('#content > div.sentence-sorting > div.combobox.front-page-section.sorting-text-align > div.selection > div.name', searchtext)
			        //verify loading of the result panel. this have to be passed even when no results found for the search criteria.
			        browser.waitForElementVisible('div.panel.hidden > div#imagelist > div.posts.br5.first-child', 5000)
					
			}
			    //Navigate to home page
				 browser.click('a[href="//imgur.com"]')
	  			 browser.waitForElementVisible('body', 1000)
	             browser.assert.title('Imgur: The most awesome images on the Internet')
			
			});

			
	},
	
	'Test Auto Complete Search with USERS': function (browser) {
		browser
			.waitForElementVisible('body', 5000)
			.waitForElementVisible('#global-search-container', 1000)
			.click('#global-search-container > div.search-container.search-closed > form.search-form > div.search-icon-container > div.icon-search.searchable')//click on search control
			//set the search text
			.setValue('#global-search-container > div.search-container.search-focused > form > input', searchtext)
			//wait for global search auto complete panel
			.waitForElementVisible('#global-search-container > div.search-container.search-focused > div.global-search-autocomplete',5000)
			
			//If user suggestions are found, search by users
			.element('css selector', '#global-search-container > div.search-container.search-focused > div.global-search-autocomplete > div:nth-child(2) > div.user-icon', function (result) {
				if (result.status != -1) { //wait for auto suggestions using Users
				    //click on first user result
				    browser.click('#global-search-container > div.search-container.search-focused > div.global-search-autocomplete > div:nth-child(2) > a:nth-child(3)')
					browser.waitForElementVisible('body', 1000)
					browser.pause(2000)
					browser.assert.urlContains('imgur.com/user/')//assert page url for user page
					browser.waitForElementVisible('#captions > div.panel-header.textbox', 1000)//wait for header					
					browser.element('css selector','#captions > div.captions-container.infinite-scroll-loaded', function (result) {
				if (result.status != -1) { //If user comments results are found, locate the first user comment
						browser.waitForElementVisible('#captions > div.captions-container.infinite-scroll-loaded > div > div > div:nth-child(1) > div.comment-wrapper', 3000)
						//verify username for the search text
						browser.assert.containsText('#captions > div.captions-container.infinite-scroll-loaded > div > div > div:nth-child(1) > div.comment-wrapper > div.comment > div > div.usertext.cf > div.author > a.comment-username', searchtext)
					    browser.end();
						}
					});					
				    browser.end();
				}
				 browser.end();
			});
			 browser.end();
			}
			
};
