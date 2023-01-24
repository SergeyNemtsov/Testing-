module.exports = {
  before(browser) {
    browser.page
      .Tesla()
      .navigate()
      .waitForElementVisible("@catalog", "Catalog title visible")
      .assert.textContains("@catalog", "Каталог", "Catalog ok");
  },

  after(browser) {
    browser.end();
  },

  "Search for Tesla": function (browser) {
    browser.page
      .Tesla()
      .search("Tesla")
      .waitForElementVisible("@pageTitle", "Tesla title here");

    browser.page.Tesla().strictClick("@searchBar");

    browser.page
      .Tesla()
      .assert.title("TestGym", "title ok")
      .assert.textContains(
        "@pageTitle",
        "Tesla car XXXX III" || "Tesla car X",
        "Tesla title ok"
      );

    browser.page
      .Tesla()
      .section.topMenu.assert.textContains("@main", "Главная");

    let word = browser.globals.searchText;

    browser.page
      .Tesla()
      .search(word)
      .waitForElementVisible("@pageTitle", "Page title here")
      .assert.title(word, "TestGym")
      .assert.textContains("@pageTitle", word, word + "TestGym");
  },
};
