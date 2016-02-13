'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('write to be heard', function() {


  describe('sign in, up and out', function() {

    beforeEach(function() {
      browser.get('/');
    });


    it('should goto sign in page', function() {
      var el8 = element(by.css('.signout'));
      el8.click();
      var el = element(by.css('.signin'));
      el.click();
      var el2 = element(by.css('.form-signin-heading'));
      expect(el2.getText()).toMatch(/Sign in/);
    });

    it('should sign in', function() {
      var el5 = element(by.css('.signout'));
      el5.click();
      var el8 = element(by.css('.signin'));
      el8.click();
      var el = element(by.id('username'));
      el.sendKeys('test1234');
      var el2 = element(by.id('password'));
      el2.sendKeys('test1234');
      var el3 = element(by.css('.submitButton'));
      el3.click();
      var el4 = element(by.css('.welcomePage'));
      expect(el4.getText()).toMatch(/Welcome/);
    });

    it('should sign up', function() {
      var el = element(by.css('.signout'));
      el.click();
      var el8 = element(by.css('.signup'));
      el8.click();
      var newUser = "test"+Math.floor((Math.random()*10000)+1).toString();
      var el2 = element(by.id('username'));
      el2.sendKeys(newUser);
      var el3 = element(by.id('FirstName'));
      el3.sendKeys(newUser);
      var el4 = element(by.id('LastName'));
      el4.sendKeys(newUser);
      var el5 = element(by.id('password'));
      el5.sendKeys(newUser);
      var el6 = element(by.css('.submitButton'));
      el6.click();
      var el7 = element(by.css('.welcomePage'));
      expect(el7.getText()).toMatch(/Welcome/);
    });


  });


  describe();



});
