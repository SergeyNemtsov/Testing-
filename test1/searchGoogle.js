module.exports = {
    before(browser) {
    browser
    .page.Google()
    .navigate()
    .waitForElementVisible('@catalog', 'Catalog title visible')
    .assert.containsText('@catalog', 'Каталог', 'Catalog ok')
    },

    after(browser) {
    browser.end();
    },


    'Search for Google car': function (browser) {
    browser
    .page.Google()
    .search('Google')
    .waitForElementVisible('@pageTitle', 'Google title here')

    browser.strictClick('@searchBar')
    
    .assert.title('TestGym', 'title ok')
    .assert.containsText('@pageTitle', 'Google car', 'Google title ok')

    browser.page.Google() 
    .sections.topMenu()
    .assert.textContains('@main', 'Главная');


    let {word} = browser.globals.searchText;

    browser.page.Google()
    .search(word)
    .waitForElementVisible('@pageTitle','Page title here')
    .assert.title(word,'title ok')
    .assert.containsText('@pageTitle', word,word+' title ok');
    },
    };

   
   