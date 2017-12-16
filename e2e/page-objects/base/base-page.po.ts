import { browser, by, element, ElementFinder } from 'protractor';

export abstract class BasePage {
  abstract navigateTo();

  getRoot(): ElementFinder {
    return browser.element(by.tagName('app-root'));
  }
}
