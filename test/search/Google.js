module.exports = {
  before(browser) {
    browser.page
      .catalog()
      .navigate()
      .waitForElementVisible("@pageTitle", "Catalog title visible")
      .assert.titleContains("TestGym", "title TestGym")
      .assert.textContains("@pageTitle", "Каталог", "Catalog ok");
  },
  after(browser) {
    browser.end();
  },

  "Search for Google car": function (browser) {
    browser.page
      .catalog()
      .search("Google")
      .waitForElementVisible("@pageTitle", "Page title here")
      .assert.titleContains("TestGym", "title TestGym")
      .assert.textContains("@pageTitle", "Каталог", "Page title 'Каталог'")
      .assert.urlContains("Google", "Element found")
      .assert.textContains("@productTitle", "Google car", "Google title here");
  },
};
