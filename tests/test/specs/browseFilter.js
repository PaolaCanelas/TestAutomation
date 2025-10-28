describe('Browse & Filter', () => {


it('Browse & Filter: Create List ', async () => {

    const listsBtn = await $(['//*[@resource-id="com.purplecover.anylist:id/list_folder_add_menu"]']);
    await listsBtn.waitForDisplayed({ timeout: TIMEOUT });
    await listsBtn.click();

    const CreateList = await $('//*[@text="Create List"]');
    await CreateList.waitForDisplayed({ timeout: TIMEOUT });
    await CreateList.click();


    const listNameField = await $('//*[@text="List Name"]');
    await listNameField.waitForDisplayed({ timeout: 10000 });
    await listNameField.setValue("List test demo");

    await driver.pause(1000);

    const saveButton = await $('//*[@text="SAVE"]');
    await saveButton.waitForDisplayed({ timeout: 10000 });
    await saveButton.click();

    const newList = await $('//android.view.View[@resource-id="com.purplecover.anylist:id/selectable_row_background_binding"]');
    await expect(newList).toBeDisplayed();

});

it('Browse & Filter: Filter product list ', async () => {

    const iconoFilter = await $(['//*[@resource-id="com.purplecover.anylist:id/search_list_folder_action"]']);
    await iconoFilter .waitForDisplayed({ timeout: TIMEOUT });
    await iconoFilter .click();

});

});
