import { BasePage } from './base/base-page.po';
import { PageHeader } from './widgets/page-header.widget';
import { browser, by, element } from 'protractor';

export class AppHomePage extends BasePage {
  public get Header(): PageHeader {
    return new PageHeader(this.getRoot());
  }

  navigateTo() {
    return browser.get('/');
  }
}
