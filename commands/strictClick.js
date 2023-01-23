module.exports = {
    command: function(selector) {
    return this
    .waitForElementVisible({selector: '//body/div[1]/div[1]/div[1]', locateStrategy: 'xpath'})
    .click('input[type="text"]');
    }
    };