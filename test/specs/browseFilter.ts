import BrowseFilterPage from '../pageobjects/browseFilter.page';

describe('Browse & Filter', () => {
  let browseFilterPage: BrowseFilterPage;

  beforeEach(async () => {
    browseFilterPage = new BrowseFilterPage();
  });

  it('should create a new list successfully', async () => {
    await browseFilterPage.createList('List test QA');
    expect(await browseFilterPage.isListVisible('List test QA')).toBe(true);
    await browseFilterPage.ClickBack();
  });

  it('should open the filter menu', async () => {
    await browseFilterPage.openFilter();
    await browseFilterPage.enterSearchInput('List test QA');
    expect(await browseFilterPage.isListVisible('List test QA')).toBe(true);
  });

  // it('should apply a filter and update the list', async () => { 
  //   await browseFilterPage.openList('List test QA'); 
  //   await browseFilterPage.clicKAddItem(); 
  //   await browseFilterPage.applyFilter('Milk'); 
  //   const firstItemAfter = await browseFilterPage.getFirstItemText(); 
  //   expect(firstItemBefore).not.toEqual(firstItemAfter); });
  // }

  
});
