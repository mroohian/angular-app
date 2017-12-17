import { browser, by, element } from 'protractor';

// Smoke Test
describe('angular-app: Smoke Test', () => {
  // Test Initialization:
  beforeEach(() => {
    browser.get('/');
  });

  // Scenario 1:
  it('should load the page.', () => {
    expect(element(by.css('app-root'))).toBeTruthy();
  });
});
