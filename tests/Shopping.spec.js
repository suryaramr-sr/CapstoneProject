const { test } = require('@playwright/test');
const AddToCartPage  = require('../page-object/addToCartPage');
const CheckoutPage = require('../page-object/checkoutPage');
const PaymentPage = require('../page-object/paymentPage');
const ConfirmationPage = require('../page-object/confirmationPage');
const testData = require('../test-data/testData.json');


test('Shopping flow - Full purchase journey with coupon', async ({ page }) => {
  // Add to Cart
  const addToCartPage = new AddToCartPage(page);
  await addToCartPage.navigateToSite();
  // Locate the file input
  const shoppingTitle = page.locator('#shoppingTitle');

    // Scroll down to the form registration section
  await shoppingTitle.scrollIntoViewIfNeeded();
  
  await addToCartPage.addProductToCart(testData.product);
  await addToCartPage.applyCoupon(testData.coupon);
  await addToCartPage.verifyDiscountApplied(
    testData.pricing.subtotal,
    testData.pricing.discount,
    testData.pricing.total
  );
  await addToCartPage.goToCheckout();

  // Checkout
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillCheckoutForm(testData.user);
  await checkoutPage.proceedToPayment();

  // Payment
  const paymentPage = new PaymentPage(page);
  await paymentPage.selectPaymentMethod(testData.paymentMethod);
  await paymentPage.placeOrder();

  // Confirmation
  const confirmationPage = new ConfirmationPage(page);
  await confirmationPage.verifyOrderPlaced();
  await confirmationPage.continueShopping();
});
