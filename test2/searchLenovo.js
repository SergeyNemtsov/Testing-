module.exports = {
    before(browser) {
    browser
    .page.Lenovo()
    .navigate()
    .waitForElementVisible('@catalog', 'Catalog title visible')
    .assert.containsText('@catalog', 'Каталог', 'Catalog ok')
    },

    after(browser) {
    browser.end();
    },


    'Search for Lego yoga': function (browser) {
    browser
    .page.Lenovo()
    .search('Lenovo')
    .waitForElementVisible('@pageTitle', 'Lenovo title here')

    browser.strictClick('@searchBar')
    
    .assert.title('TestGym', 'title ok')
    .assert.containsText('@pageTitle', 'Lenovo yoga', 'Lenovo title ok')

    browser .page.Lenovo() 
    .sections.topMenu()
    .assert.textContains('@main', 'Главная');


    let {word} = browser.globals.searchText;

    browser.page.Lenovo()
    .search(word)
    .waitForElementVisible('@pageTitle','Page title here')
    .assert.title(word,'title ok')
    .assert.containsText('@pageTitle', word,word+' title ok');
    },
    };

   
