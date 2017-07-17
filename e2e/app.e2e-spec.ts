import { MyAngular1Page } from './app.po';

describe('my-angular1 App', () => {
  let page: MyAngular1Page;

  beforeEach(() => {
    page = new MyAngular1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Angular4!');
  });
});
