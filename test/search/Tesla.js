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

  "Search for Tesla": function (browser) {
    browser.page
      .catalog()
      .search("Tesla")
      .waitForElementVisible("@pageTitle", "Page title here")
      .assert.titleContains("TestGym", "title TestGym")
      .assert.textContains("@pageTitle", "Каталог", "Page title 'Каталог'")
      .assert.urlContains("Tesla", "Element found")
      .assert.textContains(
        "@productTitle",
        "Tesla car XXXX III" || "Tesla car X",
        "Tesla title ok"
      );
  },
};
