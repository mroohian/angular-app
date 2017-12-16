import { browser, by, element, promise, ElementFinder } from 'protractor';

export class PageHeaderWidget {
  private headerElement: ElementFinder;

  constructor(parentElement: ElementFinder) {
    this.headerElement = parentElement.element(by.css('article > h1'));
  }

  getText(): promise.Promise<string> {
    return this.headerElement.getText();
  }
}
