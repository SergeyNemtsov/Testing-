module.exports = {
    before(browser) {
    browser.page.Lenovo()
    .navigate()
    .waitForElementVisible('@catalog', 'Catalog title visible')
    .assert.containsText('@catalog', 'Каталог', 'Catalog ok')
    },

    after(browser) {
    browser.end();
    },


    'Search for Lego yoga': function (browser) {
    browser.page.Lenovo()
    .search('Lenovo')
    .waitForElementVisible('@pageTitle', 'Lenovo title here')
    
    .assert.title('TestGym', 'title ok')
    .assert.containsText('@pageTitle', 'Lenovo yoga', 'Lenovo title ok');
    },
    };