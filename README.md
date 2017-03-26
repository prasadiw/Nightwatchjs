# Nightwatchjs
This contains nightwatch automated tests for basic image upload, search and page navigations.

### Requirement 1: New Post

####Test Suit 1: ImageUpload.js

Verify image upload functionality from the home page

TC 1: Test Load Imgur web site

TC 2: Test Image Upload

- Test image upload button functionality in the home page: 

Verify button visibility button click navigation to the image upload pop up

- Test uploading image using the image upload pop up

Verify upload pop up loading and binding and uploading the specified image.

- Test uploaded image

Verify new post header element availability in the page uploaded image availability in the page.

####Test Suit 2: ExtraImagesUpload.js

Verify extra images upload functionality

TC 1: Test image upload from home page

TC2: Test 'Add another image' functionality

Verify image placement to the correct place holder by 'Add another image' functionality

TC3: Test 'Add more image' functionality

Verify image placement to the correct place holder by 'Add more images' functionality


### Requirement 2: Search

####Test Suit: SearchImages.js

This verifies the basic search functionality from the home page

TC 1: Test Load Imgur web site

TC 2: Test Search Text

- Verify locating the search input container
- Verify search button functionality
- Verify search results are tied to the search query by locating search text in the page header and result image titles.


### Requirement 3: Random Mode

####Test Suit: RandomMode.js

This verifies the page navigation to a random post from home page.

TC 1: Test Load Imgur web site

TC 2: Test Loading Random Mode

- Verify locating Random Mode button and page navigation upon button click
- Verify new page with a random post by locating post header and post image/images, locating Random posts panel header.

### Special comments and Errors:

* Test fails can be happened due to time outs with element loading due to slow internet bandwidth.

* intermitted error : Failed to create a new post from home page.

[![Intermitted error - New Post](C:\Users\Admin\Desktop\error screenshots)

### Instructions:

1. Clone the project 

2. Install the required dependencies using below command:

   npm install

3. Run tests:

- step 1: Copy test/tests you want to run in to ./test folder from v1.0 folder (v1.0 folder includes all the tests related to this project)
- step 2: Run below command

  npm test

### References

Nightwatch set up and configuration : https://github.com/dwyl/learn-nightwatch

Nightwatch tests : https://github.com/dwyl/learn-nightwatch

Nightwatch tests : http://nightwatchjs.org/guide

### Tools used

IDE : Visual Studio Code 1.10
