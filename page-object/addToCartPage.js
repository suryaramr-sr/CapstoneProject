const { expect } = require('@playwright/test');
require('dotenv').config();

class AddToCartPage {
  constructor(page) {
    this.page = page;
    this.cartSection = page.locator('section:has-text("Shopping Cart")');
    this.proceedToCheckoutBtn = page.locator('text=Proceed to Checkout');
    this.couponField = page.locator('input[placeholder="Enter coupon code"]');
    this.subtotal = page.getByTestId('shop-subtotal');
    this.discount = page.getByTestId('shop-discount');
    this.total = page.getByTestId('shop-total'); 
  }

  async navigateToSite() {
    await this.page.goto(`${process.env.BASE_URL}/index.html`);
  }

  async addProductToCart(productName) {
  // Use test ID directly for the Triumph product
  const addToCartBtn = this.page.getByTestId('add-cart-triumph');

  // Wait until the button is attached and visible
  await addToCartBtn.waitFor({ state: 'visible', timeout: 5000 });

  // Click the button
  await addToCartBtn.click();

  // Verify cart updates
  await expect(this.cartSection).toContainText(productName, { timeout: 5000 });
}


  async applyCoupon(couponCode) {
    await this.couponField.fill(couponCode);
     const applyBtn = this.page.getByTestId('shop-apply-coupon');
     await applyBtn.waitFor({ state: 'visible', timeout: 5000 });
     await applyBtn.click();
    // Wait for discount field to appear
    await this.discount.waitFor({ state: 'visible', timeout: 5000 });
  }

  async verifyDiscountApplied(expectedSubtotal, expectedDiscount, expectedTotal) {
    await expect(this.subtotal).toContainText(expectedSubtotal);
    await expect(this.discount).toContainText(expectedDiscount);
    await expect(this.total).toContainText(expectedTotal);
  }

  async goToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }
}

module.exports = AddToCartPage ;
