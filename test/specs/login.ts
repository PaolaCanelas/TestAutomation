import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import BrowseFilterPage from '../pageobjects/browseFilter.page'

describe('AnyList - application', () => {

  beforeEach(async () => {
    
    const appPackage = 'com.purplecover.anylist';
    try {
      await driver.terminateApp(appPackage);
    } catch (e) {
      console.warn('App :', e.message);
    }
    
    await driver.activateApp(appPackage);
  });

  it('should not be able to login with invalid credentials', async () => {
    const loginPage = new LoginPage();

    try {
      await loginPage.openLoginScreen();

      await loginPage.login('wrong_user@mail.com', 'Control123');

      const errorText = await loginPage.getErrorText();
      await expect(errorText).toContain(
        'The username and password entered do not match. Please try again.'
      );

      await loginPage.confirmError();

    } catch (err) {
      console.error('Error when performing invalid login test:', err);
    } finally {
      console.log('Finished invalid login test');
    }
  });

   it('should be able to login with valid credentials', async () => {
    const loginPage = new LoginPage();
    try {
      await loginPage.openLoginScreen();

      await loginPage.login('test_user@mail.com', 'Control123');

      // await allowAnyListToSendYouNotificationsModal.clickOnDontAllow();

      const isHomeVisible = await loginPage.isHomeDisplayed();
      await expect(isHomeVisible).toBe(true);

    } catch (err) {
      console.error('Error when performing valid login test:', err);
    } finally {
      console.log('Finished valid login test');
    }
  });

  it('should create a new list successfully', async () => {
    const browseFilterPage = new BrowseFilterPage();
    await browseFilterPage.createList('List test QA');
    expect(await browseFilterPage.isListVisible('List test QA')).toBe(true);
    await browseFilterPage.ClickBack();
  });

  it('should open the filter menu', async () => {
    const browseFilterPage = new BrowseFilterPage();
    await browseFilterPage.openFilter();
    await browseFilterPage.enterSearchInput('List test QA');
    expect(await browseFilterPage.isListVisible('List test QA')).toBe(true);
  });

});
