const pageCommands = {
    search(word) {
    this
    .setValue('@searchBar', word)
    .click({selector: '@submitButton', index: 0});
    return this; // Return page object for chaining
    }
};



    module.exports = {
    url: 'http://testshop.sedtest-school.ru/',
    commands: [pageCommands],
    elements: {
    catalog:  {selector: '/html/body/div[1]/div[1]/div[1]', locateStrategy: 'xpath'},
    searchBar: 'input[type="text"]',
    submitButton: '[name="search"]',
    pageTitle: {selector: '/html/body/div[1]/div[3]/div', locateStrategy: 'xpath'},

    sections:{
topMenu: {
selector: {selector: '//*[@id="navbarCollapse"]', locateStrategy: 'xpath'},
elements: {
main: '#nav_link_main',
toComein: {selector: '//*[@id="navbarCollapse"]/div/a[3]', locateStrategy: 'xpath'},
favorites: {selector: '//*[@id="navbarCollapse"]/div/a[2]/img', locateStrategy: 'xpath'}
          }
        }
            }


   
            }
}; 



