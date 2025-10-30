import { ChainablePromiseElement } from 'webdriverio';

export default class CreateAccountPage {
  private getStartedButton: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private createAccountButton: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private emailField: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
  private passwordField: ChainablePromiseElement<Promise<WebdriverIO.Element>>;

  constructor() {
    this.getStartedButton = $('//*[@text="Get Started"]');
    this.createAccountButton = $('//*[@text="Create Account"]');
    this.emailField = $('//*[@text="Email Address"]');
    this.passwordField = $('//*[@text="Password"]');
  }

  async openCreateAccountScreen() {
    if (await this.getStartedButton.isDisplayed()) {
      await this.getStartedButton.click();
      await this.createAccountButton.waitForDisplayed({ timeout: 10000 });
      await this.createAccountButton.click();
    } else {
      console.log('App is already started, skipping the welcome screen');
    }
  }

  async enterEmail(email: string) {
    await this.emailField.waitForDisplayed({ timeout: 10000 });
    await this.emailField.clearValue();
    await this.emailField.setValue(email);
  }

  async enterPassword(password: string) {
    await this.passwordField.waitForDisplayed({ timeout: 5000 });
    await this.passwordField.clearValue();
    await this.passwordField.setValue(password);
  }

  async tapCreateAccount() {
    await this.createAccountButton.waitForEnabled({ timeout: 10000 });
    await this.createAccountButton.click();
  }


  async createAccount() {
    const uniqueEmail = `user_${Date.now()}@mail.com`;
    await this.enterEmail(uniqueEmail);
    await this.enterPassword('Control123');
    await this.tapCreateAccount();
  }
}
