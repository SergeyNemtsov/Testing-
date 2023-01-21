module.exports = {
    before(browser) {
    browser.page.Google()
    .navigate()
    .waitForElementVisible('@catalog', 'Catalog title visible')
    .assert.containsText('@catalog', 'Каталог', 'Catalog ok')
    },

    after(browser) {
    browser.end();
    },


    'Search for Google car': function (browser) {
    browser.page.Google()
    .search('Google')
    .waitForElementVisible('@pageTitle', 'Google title here')
    
    .assert.title('TestGym', 'title ok')
    .assert.containsText('@pageTitle', 'Google car', 'Google title ok');
    },
    };