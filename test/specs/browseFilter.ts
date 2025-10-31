import BrowseFilterPage from '../pageobjects/browseFilter.page';

describe('Browse & Filter', () => {
  let browseFilterPage: BrowseFilterPage;

  beforeEach(async () => {
    browseFilterPage = new BrowseFilterPage();
  });

  it('should create a new list successfully', async () => {
    await browseFilterPage.createList('List Demo test');
    expect(await browseFilterPage.isNewListDisplayed()).toBe(true);
    await browseFilterPage.ClickBack();


  });

  it('should open the filter menu', async () => {
    await browseFilterPage.openFilter();
    await browseFilterPage.enterSearchInput('List test demo');
    expect(await browseFilterPage.isListVisible('List Demo test')).toBe(true);


  });
});
