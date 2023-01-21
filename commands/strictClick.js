module.exports = {
    command: function(selector) {
    return this
    .waitForElementVisible('/html/body/div[1]/div[3]/div')
    .click('input[type="text"]');
    }
    };