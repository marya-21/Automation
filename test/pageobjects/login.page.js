const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#userName");
  }

  get inputPassword() {
    return $("#password");
  }

  get inputCompany() {
    return $("#accountName");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async login(username, password, companny) {
    await $("#userName").click();
    await $("#userName").click();
    // await this.inputUsername.waitForExist({ timeout: 5000 });
    await this.inputPassword.setValue(password);
    await this.inputUsername.setValue(username);
    await $("#password").click();
    await this.inputCompany.setValue(companny);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open(value) {
    return super.open(value);
  }
}

module.exports = new LoginPage();
