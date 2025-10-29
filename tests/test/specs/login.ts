import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';

describe('AnyList - Login', () => {
  const loginPage = new LoginPage();

  beforeEach(async () => {
    await loginPage.openLoginScreen();
  });

  it('should not be able to login with invalid credentials', async () => {
    await loginPage.login('wrong_user@mail.com', 'Control123');

    const errorText = await loginPage.getErrorText();
    expect(errorText).toContain(
      'The username and password entered do not match. Please try again.'
    );

    await loginPage.confirmError();
  });

  it('should be able to login with valid credentials', async () => {
    await loginPage.login('test_user@mail.com', 'Control123');

    const isHomeVisible = await loginPage.isHomeDisplayed();
    expect(isHomeVisible).toBe(true);
  });
});
