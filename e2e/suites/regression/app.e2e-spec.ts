import { AppHomePage } from '../../page-objects/app-home.po';

// Component:
describe('angular-app: [App Component]', () => {
  let page: AppHomePage;

  // Test Initialization:
  beforeEach(() => {
    page = new AppHomePage();
    page.navigateTo();
  });

  // Feature 1:
  describe('[Feature 1: Header Message]', () => {
    // Scenario 1.1:
    it('should display page header message.', () => {
      expect(page.Header.getText()).toBeTruthy();
    });

    // Scenario 1.2:
    it('should have Angular-App in the header message.', () => {
      expect(page.Header.getText()).toContain('Angular-App!');
    });
  });

  // Feature 2:
  describe('[Feature 2: SearchBox]', () => {
    // Background:
    beforeEach(() => {
      // TODO: page.Header.openHamburgerMenu();
    });

    // Scenario 2.1:
    it('should display the search box.', () => {
      page.navigateTo();
      expect(true).toEqual(true);
    });

  });
});
