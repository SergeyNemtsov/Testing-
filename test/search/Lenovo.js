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

  "Search for Lenovo": function (browser) {
    browser.page
      .catalog()
      .search("Lenovo")
      .waitForElementVisible("@pageTitle", "Page title here")
      .assert.titleContains("TestGym", "title TestGym")
      .assert.textContains("@pageTitle", "Каталог", "Page title 'Каталог'")
      .assert.urlContains("Lenovo", "Element found")
      .assert.textContains("@productTitle", "Lenovo yoga", "Lenovo title ok");
  },
};
