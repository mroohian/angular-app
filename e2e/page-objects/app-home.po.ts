import { BasePage } from './base/base-page.po';
import { PageHeader } from './base/page-header.po';
import { browser, by, element } from 'protractor';

export class AppHomePage extends BasePage {
  public get Header(): PageHeader {
    return new PageHeader(element(by.css('app-root')));
  }

  navigateTo() {
    return browser.get('/');
  }
}
