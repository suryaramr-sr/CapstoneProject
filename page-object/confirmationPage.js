const { expect } = require('@playwright/test');

class ConfirmationPage {
  constructor(page) {
    this.page = page;
    this.successMessage = page.locator('text=Order Placed Successfully!');
    this.orderId = page.locator('text=Order ID');
    this.continueShoppingBtn = page.locator('#shopContinueShopping');
  }

  async verifyOrderPlaced() {
    await expect(this.successMessage).toBeVisible();
    await expect(this.orderId).toBeVisible();
  }

  async continueShopping() {
    await this.continueShoppingBtn.click();
   
  }
}

module.exports = ConfirmationPage;
