const { expect } = require('@playwright/test');

class PaymentPage {
  constructor(page) {
    this.page = page;
    this.creditDebitOption = page.locator('text=Credit / Debit Card');
    this.upiOption = page.locator('text=UPI');
    this.codOption = page.locator('text=Cash on Delivery');
    this.placeOrderBtn = page.locator('text=Place Order');
    this.backBtn = page.locator('text=Back');
  }

  async selectPaymentMethod(method) {
    switch (method.toLowerCase()) {
      case 'card':
        await this.creditDebitOption.click();
        break;
      case 'upi':
        await this.upiOption.click();
        break;
      case 'cod':
        await this.codOption.click();
        break;
      default:
        throw new Error(`Unknown payment method: ${method}`);
    }
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
    
  }
}

module.exports = PaymentPage;
