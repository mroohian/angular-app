import { AppHomePage } from '../../page-objects/app-home.po';
import { SearchBox } from '../../page-objects/widgets/searchbox.widget';

describe('angular4: [SearchBox Component]', () => {
  let page: AppHomePage;
  let searchBox: SearchBox;

  // Test Initialization:
  beforeEach(() => {
    page = new AppHomePage();
    page.navigateTo();

    searchBox = new SearchBox(page.getRoot());
  });

  describe('[Feature 1: Dropdown]', () => {
    it('should be able to enter characters.', () => {
      searchBox.setValue('abc');

      expect(searchBox.getValue()).toEqual('abc');
    });

    it('should open dropdown after entering some characters.', () => {
      searchBox.setValue('abc');

      const searchResultDropDown = searchBox.getSearchResultDropDown();

      expect(searchResultDropDown).toBeTruthy();
    });
  });
});
