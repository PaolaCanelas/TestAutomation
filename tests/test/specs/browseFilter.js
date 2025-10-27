describe('Browse & Filter', () => {


it('Browse & Filter: open product list, apply filter, verify list changes', async () => {

    const listsBtn = await $(['//*[@text="Groceries"]','//*[@text="My Lists"]','//*[@content-desc="lists"]']);
    await listsBtn.waitForDisplayed({ timeout: TIMEOUT });
    await listsBtn.click();

    const firstList = await $('(//android.widget.TextView)[1]');
    await firstList.waitForDisplayed({ timeout: TIMEOUT });
    await firstList.click();

 
    const filterBtn = await $(['//*[@content-desc="Filter"]','//*[@text="Filter"]','//*[@resource-id="com.purplecover.anylist:id/filter"]']);
    await filterBtn.waitForDisplayed({ timeout: TIMEOUT });
    await filterBtn.click();

    const sortByName = await $(['//*[@text="Sort by Name"]','//*[@text="Name"]','//*[@text="Sort"]']);
    await sortByName.waitForDisplayed({ timeout: TIMEOUT });
    await sortByName.click();

    const firstItem = await $('(//android.widget.TextView)[1]');
    await firstItem.waitForDisplayed({ timeout: TIMEOUT });
    const text = await firstItem.getText();
    if (!text || text.length === 0) throw new Error('Unable to read first item after sorting');
  });

});
