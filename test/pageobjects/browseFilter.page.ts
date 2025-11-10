import { ChainablePromiseElement } from 'webdriverio';

export default class BrowseFilterPage {
  private listsBtn: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private createListOption: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private listNameField: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private saveButton: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private newList: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private filterIcon: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private iconBack: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private searchInput: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private itemList: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private addItem : ChainablePromiseElement<Promise<WebdriverIO.Element>>;

  constructor() {
    this.listsBtn = $('//*[@resource-id="com.purplecover.anylist:id/list_folder_add_menu"]');
    this.createListOption = $('//*[@text="Create List"]');
    this.listNameField = $('//*[@text="List Name"]');
    this.saveButton = $('//*[@text="SAVE"]');
    this.newList = $('//android.view.View[@resource-id="com.purplecover.anylist:id/selectable_row_background_binding"]');
    this.iconBack = $('//android.widget.ImageButton[@content-desc="Back"]');
    this.filterIcon = $('//*[@resource-id="com.purplecover.anylist:id/search_list_folder_action"]');
    this.searchInput= $('//*[@text="Search Lists"]');
    this.itemList = $('(//android.widget.LinearLayout[@resource-id="com.purplecover.anylist:id/folder_item_text_container"])[6]')
    this.addItem = $('//*[@text="Add Item"]')
    this.filterAddItem = $('')
  }

  async createList(listName: string) {
    await this.listsBtn.waitForDisplayed({ timeout: 10000 });
    await this.listsBtn.click();

    await this.createListOption.waitForDisplayed({ timeout: 10000 });
    await this.createListOption.click();

    await this.listNameField.waitForDisplayed({ timeout: 10000 });
    await this.listNameField.setValue(listName);

    await driver.pause(1000);

    await this.saveButton.waitForDisplayed({ timeout: 10000 });
    await this.saveButton.click();
  }

  async isNewListDisplayed(): Promise<boolean> {
    await this.newList.waitForDisplayed({ timeout: 10000 });
    return await this.newList.isDisplayed();
  }

  async ClickBack() {
  await this.iconBack.waitForEnabled({ timeout: 5000 });
  await this.iconBack.click();
}

  async openFilter() {
    await this.filterIcon.waitForDisplayed({ timeout: 10000 });
    await this.filterIcon.click();
  }

  async enterSearchInput(textlist: string) {
    await this.searchInput.waitForDisplayed({ timeout: 10000 });
    await this.searchInput.clearValue();
    await this.searchInput.setValue(textlist);
  }

  async isListVisible(listName: string) {
  const list = await $(`//*[@text="${listName}"]`);
  return await list.isDisplayed();
}

  async openList() {
    await this.itemList.waitForDisplayed({ timeout: 10000 });
    await this.itemList.click();
  }

   async clicKAddItem() {
    await this.itemList.waitForDisplayed({ timeout: 10000 });
    await this.itemList.click();
  }

  async applyFilter(optionText: string) {
    await this.filterAddItem.waitForDisplayed({ timeout: 10000 });
    await this.filterAddItem.click();
  }

}

