import { browser, by, element } from 'protractor';

export class AppHomePage {
  navigateTo() {
    return browser.get('/');
  }

  getPageHeaderText() {
    return element(by.css('app-root article > h1')).getText();
  }
}
