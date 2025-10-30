// import { expect } from '@wdio/globals';

// describe('Browse & Filter', () => {

//     const TIMEOUT = 10000;

//     it('Browse & Filter: Create List', async () => {

//         const listsBtn = await $('//*[@resource-id="com.purplecover.anylist:id/list_folder_add_menu"]');
//         await listsBtn.waitForDisplayed({ timeout: TIMEOUT });
//         await listsBtn.click();

//         const createList = await $('//*[@text="Create List"]');
//         await createList.waitForDisplayed({ timeout: TIMEOUT });
//         await createList.click();

//         const listNameField = await $('//*[@text="List Name"]');
//         await listNameField.waitForDisplayed({ timeout: TIMEOUT });
//         await listNameField.setValue('List test demo');

//         await driver.pause(1000);

//         const saveButton = await $('//*[@text="SAVE"]');
//         await saveButton.waitForDisplayed({ timeout: TIMEOUT });
//         await saveButton.click();

//         const newList = await $('//android.view.View[@resource-id="com.purplecover.anylist:id/selectable_row_background_binding"]');
//         await expect(newList).toBeDisplayed();
//     });

//     it('Browse & Filter: Filter product list', async () => {

//         const iconFilter = await $('//*[@resource-id="com.purplecover.anylist:id/search_list_folder_action"]');
//         await iconFilter.waitForDisplayed({ timeout: TIMEOUT });
//         await iconFilter.click();

//     });

// });
