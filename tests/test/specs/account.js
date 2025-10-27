describe("AnyList - Create Account", () => {
  beforeEach(async () => {
    const getStartedButton = await $('//android.widget.Button[@resource-id="com.purplecover.anylist:id/first_launch_get_started_button"]');

    if (await getStartedButton.isDisplayed()) {
      await getStartedButton.click();

      const createAccountButton = await $('//*[@text="Create Account"]');
      await createAccountButton.waitForDisplayed({ timeout: 10000 });
      await createAccountButton.click();
    } else {
      console.log("App is already started, skipping the welcome screen");
    }
  });

  it("should create a new account successfully", async () => {
    const emailField = await $('//*[@text="Email Address"]');
    await emailField.waitForDisplayed({ timeout: 10000 });

    const uniqueEmail = `user_${Date.now()}@mail.com`;
    await emailField.setValue(uniqueEmail);

    const passwordField = await $('//*[@text="Password"]');
    await passwordField.addValue("Control123");

    const createAccountButton = await $('//*[@text="Create Account"]');
    await createAccountButton.waitForEnabled({ timeout: 10000 });
    await createAccountButton.click();
  });
});
