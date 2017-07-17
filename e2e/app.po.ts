import { browser, by, element } from 'protractor';

export class MyAngular1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root app-content h1')).getText();
  }
}
