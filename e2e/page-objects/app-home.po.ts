import { BasePage } from './base/base-page.po';
import { PageHeaderWidget } from './widgets/page-header.widget';
import { browser, by, element } from 'protractor';

export class AppHomePage extends BasePage {
  public get Header(): PageHeaderWidget {
    return new PageHeaderWidget(this.getRoot());
  }

  navigateTo() {
    return browser.get('/');
  }
}
