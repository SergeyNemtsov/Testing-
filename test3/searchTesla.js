module.exports = {
    before(browser) {
    browser
    .page.Tesla()
    .navigate()
    .waitForElementVisible('@catalog', 'Catalog title visible')
    .assert.containsText('@catalog', 'Каталог', 'Catalog ok')
},

    after(browser) {
    browser.end();
    },


    'Search for Tesla': function (browser) {
    browser
    .page.Tesla()
    .search('Tesla')
    .waitForElementVisible('@pageTitle', 'Tesla title here');

    browser.strictClick('@searchBar')
    
    .assert.title('TestGym', 'title ok')
    .assert.containsText('@pageTitle', 'Tesla car XXXX III' && 'Tesla car X', 'Tesla title ok')

    browser .page.Tesla() 
    .sections.topMenu() 
    .assert.textContains('@main', 'Главная');

    

    let {word} = browser.globals.searchText;

    browser.page.Tesla()
.search(word)
.waitForElementVisible('@pageTitle','Page title here')
.assert.title(word,'title ok')
.assert.containsText('@pageTitle', word,word+' title ok');
    },
};






    