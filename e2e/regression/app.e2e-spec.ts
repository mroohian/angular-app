import { AppHomePage } from '../page-objects/app-home.po';

// Component:
describe('angular4: [App Component]', () => {
  let page: AppHomePage;

  // Test Initialization:
  beforeEach(() => {
    page = new AppHomePage();
    page.navigateTo();
  });

  // Feature 1:
  describe('[Feature 1: Header Message]', () => {
    // Scenario 1:
    it('should display page header message.', () => {
      expect(page.Header.getText()).toEqual('Welcome to Angular4!');
    });

    // Scenario 1:
    it('should have Angular4 in the header message.', () => {
      expect(page.Header.getText()).toContain('Angular4!');
    });
  });

  // Feature 2:
  describe('[Feature 2: SearchBox]', () => {
    // Background:
    beforeEach(() => {
      // TODO: page.Header.openHamburgerMenu();
    });

    // Scenario 1:
    it('should display the search box.', () => {
      page.navigateTo();
      expect(true).toEqual(true);
    });

  });
});
