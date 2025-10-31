import CreateAccountPage from '../pageobjects/account.page';

describe('AnyList - Create Account', () => {
  let createAccountPage: CreateAccountPage;
  const appPackage = 'com.purplecover.anylist'; 

  beforeEach(async () => {
    try {
      await driver.terminateApp(appPackage);
    } catch (e) {
      console.warn('La app no estaba activa:', e.message);
    }

    await driver.activateApp(appPackage);

    // Reinstancia la página y abre la pantalla de creación de cuenta
    createAccountPage = new CreateAccountPage();
    await createAccountPage.openCreateAccountScreen();
  });

  it('should create a new account successfully', async () => {
    await createAccountPage.createAccount();
  });
});
