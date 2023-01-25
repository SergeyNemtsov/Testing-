const pageCommands = {
  search(word) {
    this.setValue("@searchBar", [word, browser.Keys.ENTER]);
    return this;
  },
};

module.exports = {
  url: "http://testshop.sedtest-school.ru/",
  commands: [pageCommands],
  elements: {
    pageTitle: "[class='col-md-3 mt-2']",
    searchBar: 'input[type="text"]',
    productTitle: "[class='card-body']",
  },
  sections: {
    topMenu: {
      selector: '[id="navbarCollapse"]',
      elements: {
        main: "#nav_link_main > a",
        myCart: '[href="/mycart/"]',
        favorites: '[href="/myfavorites/"]',
        toComein: '[href="/users/auth/"]',
      },
    },
  },
};
