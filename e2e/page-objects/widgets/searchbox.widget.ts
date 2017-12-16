import { browser, by, element, promise, ElementFinder } from 'protractor';

export class SearchBox {
  private searchBox: ElementFinder;

  constructor(parentElement: ElementFinder) {
    this.searchBox = parentElement.element(by.tagName('app-searchbox'));
  }

  getInputBox(): ElementFinder {
    return this.searchBox.element(by.tagName('input'));
  }

  getSearchResultDropDown(): ElementFinder {
    return this.searchBox.element(by.css('search-result'));
  }

  setValue(text: string) {
    this.getInputBox().sendKeys(text);
  }

  getValue(): promise.Promise<string> {
    return this.getInputBox().getAttribute('value');
  }
}
