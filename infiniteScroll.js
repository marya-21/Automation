const LoginPage = require("./test/pageobjects/login.page");
const SecurePage = require("./test/pageobjects/secure.page");

describe("Step 4 - Inifinite Scroll", function () {
  beforeEach(async function () {
    await LoginPage.login("gordon", "password123", "dataon1");
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("Step 4 - Inifinite Scroll", async function () {
    await browser.url(
      ` "https://sf7dev.dataon.com/ent/hrm.training.manage-training-course"`
    );
    await driver.manage().window().setRect({ width: 783, height: 728 });
    await driver.wait(
      until.elementLocated(By.css(".ant-btn-default > span:nth-child(2)")),
      30000
    );
    await driver.wait(
      until.elementTextIs(
        await driver.findElement(By.css(".text-xs")),
        "See Description"
      ),
      30000
    );
    await driver.close();
  });
});
