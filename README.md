# Nightwatchjs
This contains nightwatch automated tests for basic image upload, search and page navigations.

### Requirement 1: New Post

####Test Suit 1: ImageUpload.js

Verify image upload functionality from the home page

- Test image upload button functionality in the home page: 

   Verify button visibility button click navigation to the image upload pop up

- Test uploading image using the image upload pop up

   Verify upload pop up loading and binding and uploading the specified image.

- Test uploaded image

   Verify new post header element availability in the page uploaded image availability in the page.

####Test Suit 2: ExtraImagesUpload.js

Verify extra images upload functionality

- Test image upload from home page

- Test 'Add another image' functionality

  Verify image placement to the correct place holder by 'Add another image' functionality

- Test 'Add more image' functionality

  Verify image placement to the correct place holder by 'Add more images' functionality


### Requirement 2: Search

####Test Suit 1: searchImages.js

This verifies the basic search functionality from the home page

TC 2: Test Search Text

- Verify locating the search input container

- Verify search button functionality

- Verify search results are tied to the search query by locating search text in the page header and result image titles.

####Test Suit 2: autoCompleteSearch.js

This verifies the auto complete search fucntionality

- Verify auto complete search with tags

- Verfy auto complete serach with user

- Verify correct page navigation

- Verify search results are tied to the search query

### Requirement 3: Random Mode

####Test Suit: RandomMode.js

This verifies the page navigation to a random post from home page.

- Verify locating Random Mode button and page navigation upon button click

- Verify new page with a random post by locating post header and post image/images, locating Random posts panel header.

- Verify the page navigation by page url

### Special comments and Errors:

* Test fails can be happened due to time outs with element loading due to slow internet bandwidth.

* Intermitted error : Failed to create a new post from home page. Error Text : 'There was an error. Please try again.'

  Screenshot: 

* This project includes seperate tests for Firefox browser with refactored tests.

### Instructions:

1. Clone the project 

2. Install the required dependencies using below command:

   npm install

3. Download latest selenium stand-alone server and include/replace it in to the .\node_modules\nightwatch\bin folder

4. Download latest gecko driver and copy it in to the .\node_modules\nightwatch\bin folder

3. Run tests:

- step 1: Copy test/tests you want to run in to ./test folder from v1.0 folder (v1.0 folder includes all the tests related to this project) 

- step 2: Run below command

  npm test

Note for compatibility test : 

The default configuration of this project is for run tests in the Chrome browser. In order to run tests in the firefox browser, refer ./nightwatch.conf.js configuration file and follow the comments in the file.

A seperate refactored tests for firefox browser are included in the .\v1.0\FireFoxTests directory

### References

Nightwatch set up and configuration : https://github.com/dwyl/learn-nightwatch

Nightwatch tests : https://github.com/dwyl/learn-nightwatch

Nightwatch tests : http://nightwatchjs.org/guide

### Tools used

Code Editor : Visual Studio Code
