module.exports = {
    command: function(selector) {
    return this
    .waitForElementVisible('//body/div[1]/div[1]/div[1]/h4')
    .click('input[type="text"]');
    }
    };