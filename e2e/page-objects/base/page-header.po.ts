import { browser, by, element, promise, ElementFinder } from 'protractor';

export class PageHeader {
  /*private headerElement: ElementFinder;

  constructor(headerElement: ElementFinder) {
    this.headerElement = headerElement;
  }*/
  // Effectively this is the same as above
  constructor(private headerElement: ElementFinder) { }

  getText(): promise.Promise<string> {
    return this.headerElement.element(by.css('article > h1')).getText();
  }
}
