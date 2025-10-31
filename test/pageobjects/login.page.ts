import { ChainablePromiseElement } from 'webdriverio';

export default class LoginPage {
  private signInTab: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private usernameInput: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private passwordInput: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private signInWithAnyListAccountButton: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private errorBanner: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private okButton: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private homeTitle: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private dontAllowButton: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private settingsButton: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private accountSecction: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private signOut: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  
  constructor() {
    this.signInTab = $('//*[@text="Sign In"]');
    this.usernameInput = $('//*[@text="Email Address"]');
    this.passwordInput = $('//*[@text="Password"]');
    this.signInWithAnyListAccountButton = $('//*[@text="Sign In with AnyList Account"]');
    this.errorBanner = $('//android.widget.TextView[@resource-id="android:id/message"]');
    this.okButton = $('//*[@text="OK"]');
    this.dontAllowButton = $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]');
    this.settingsButton = $('(//android.widget.ImageView[@resource-id="com.purplecover.anylist:id/navigation_bar_item_icon_view"])[4]');
    this.accountSecction = $('(//android.view.ViewGroup[@resource-id="com.purplecover.anylist:id/delete_row_background_binding"])[1]');
    this.signOut = $('//*[@text="Sign Out"]');
    this.homeTitle = $('//*[@text="Lists"]');
  }

  async openLoginScreen() {
    const getStartedButton = await $('//*[@text="Get Started"]');
    if (await getStartedButton.isDisplayed()) {
      await getStartedButton.click();
    }

    await this.signInTab.waitForDisplayed({ timeout: 10000 });
    await this.signInTab.click();
  }

  async enterUsername(username: string) {
    await this.usernameInput.waitForDisplayed({ timeout: 10000 });
    await this.usernameInput.clearValue();
    await this.usernameInput.setValue(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.waitForDisplayed({ timeout: 5000 });
    await this.passwordInput.clearValue();
    await this.passwordInput.setValue(password);
  }

  async tapLogin() {
    await this.signInWithAnyListAccountButton.waitForDisplayed({ timeout: 5000 });
    await this.signInWithAnyListAccountButton.click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.tapLogin();
  }

  async getErrorText(): Promise<string> {
    await this.errorBanner.waitForDisplayed({ timeout: 10000 });
    const elementText = await this.errorBanner.getText();
    return elementText;
  }

  async confirmError() {
    await this.okButton.waitForDisplayed({ timeout: 5000 });
    await this.okButton.click();
  }

  async confirmDontAllow() {
    await this.dontAllowButton.waitForDisplayed({ timeout: 5000 });
    await this.dontAllowButton.click();
  }

  async clickSettings() {
    await this.settingsButton.waitForDisplayed({ timeout: 5000 });
    await this.settingsButton.click();
  }

  async clickAccount() {
    await this.accountSecction.waitForDisplayed({ timeout: 5000 });
    await this.accountSecction.click();
  }

   async clickSignOut() {
    await this.signOut.waitForDisplayed({ timeout: 5000 });
    await this.signOut.click();
  }

  async isHomeDisplayed(): Promise<boolean> {
    await this.homeTitle.waitForDisplayed({ timeout: 10000 });
    return await this.homeTitle.isDisplayed();
  }
}
