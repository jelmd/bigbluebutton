var page = require('./page');

var landingPage = Object.create(page, {
  open: {
    value: function () {
      return page.open.call(this, 'demo/demoHTML5.jsp');
    },
  },
  title: {
    value: 'Join Meeting via HTML5 Client',
  },
  url: {
    value: 'http://localhost:8080/demo/demoHTML5.jsp',
  },
  username: {
    get: function () {
      return $('input[name=username]');
    },
  },
  joinButton: {
    get: function () {
      return $('input[type=submit]');
    },
  },
  joinWithButtonClick: {
    value: function () {
      this.joinButton.click();
    },
  },
  joinWithEnterKey: {
    value: function () {
      page.pressEnter();
    },
  },
  loadedHomePage: {
    get: function () {
      return $('#app');
    },
  },
});

// To use in the future tests that will require login
browser.addCommand('loginToClient', function (page) {
  page.open();
  page.username.waitForExist();
  page.username.setValue('Maxim');
  page.joinWithButtonClick();
});

module.exports = landingPage;

