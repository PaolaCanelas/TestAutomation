import { expect } from "@wdio/globals";

describe("AnyList - Login", () => {

  beforeEach(async () => {
    const getStartedButton = await $('//android.widget.Button[@resource-id="com.purplecover.anylist:id/first_launch_get_started_button"]');
    if (await getStartedButton.isDisplayed()) {
      await getStartedButton.click();
    }

    const loginButton = await $('//*[@text="Sign In"]');
    await loginButton.waitForDisplayed({ timeout: 10000 });
    await loginButton.click();
  });

  it("should not be able to login with invalid credentials", async () => {
    const emailField = await $('//*[@text="Email Address"]');
    const passwordField = await $('//*[@text="Password"]');
    const signInButton = await $('//*[@text="Sign In with AnyList Account"]');

    await emailField.setValue("wrong_user@mail.com");
    await passwordField.addValue("Control123");
    await signInButton.click();

    const errorBanner = await $('//*[@resource-id="com.purplecover.anylist:id/parentPanel"]');
    await errorBanner.waitForDisplayed({ timeout: 10000 });

    const errorText = await errorBanner.getText();
    expect(errorText).toContain("The username and password entered do not match. Please try again.");

    const okButton = await $('//*[@text="OK"]');
    await okButton.waitForDisplayed({ timeout: 5000 });
    await okButton.click();
  });

  it("should be able to login with valid credentials", async () => {
    const emailField = await $('//*[@text="Email Address"]');
    const passwordField = await $('//*[@text="Password"]');
    const signInButton = await $('//*[@text="	Sign In with AnyList Account"]');

    await emailField.setValue("test_user@mail.com");
    await passwordField.addValue("Control123");
    await signInButton.click();

    const homeTitle = await $('//*[@text="Lists"]');
    await homeTitle.waitForDisplayed({ timeout: 10000 });

    expect(await homeTitle.isDisplayed()).toBe(true);
  });
});
