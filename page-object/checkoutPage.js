const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.fullNameField = page.locator('#shopFullName');
    this.addressField = page.locator('#shopAddress');
    this.cityField = page.locator('#shopCity');
    this.pincodeField = page.locator('#shopPincode');
    this.phoneField = page.locator('#shopPhone');
    this.continueToPaymentBtn = page.locator('#shopToPayment');
  }

  async fillCheckoutForm(user) {
    await this.fullNameField.fill(user.name);
    await this.addressField.fill(user.address);
    await this.cityField.fill(user.city);
    await this.pincodeField.fill(user.pincode);
    await this.phoneField.fill(user.phone);
  }

  async proceedToPayment() {
    await this.continueToPaymentBtn.click();
    //await expect(this.page).toHaveURL(/payment/i); // optional check if payment page loads
  }
}

module.exports = CheckoutPage;
