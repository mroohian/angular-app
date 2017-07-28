import { AppHomePage } from './app-home.po';

describe('angular4 App', () => {
  let page: AppHomePage;

  beforeEach(() => {
    page = new AppHomePage();
  });

  it('should display page header message.', () => {
    page.navigateTo();
    expect(page.getPageHeaderText()).toEqual('Welcome to Angular4!');
  });
});
