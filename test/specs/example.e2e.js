const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await browser.url("https://sf7dev.dataon.com/");

    await $("#userName").click();
    await $("#userName").click();
    // await this.inputUsername.waitForExist({ timeout: 5000 });
    await $("#password").setValue("password123");
    await $("#userName").setValue("gordon");
    await $("#password").click();
    await $("#accountName").setValue("dataon1");
    await $('button[type="submit"]').click();
    await browser.url(
      "https://sf7dev.dataon.com/ent/hrm.training.manage-training-course"
    );
    // await LoginPage.login("gordon", "password123", "dataon1");
    await $("#filter-list-training-course_SEARCH_COURSECODE").addValue("coba");

    browser.pause(10000);

    // await browser.pause(1000);
    // await $("#email").addValue("coba");
  });
});
