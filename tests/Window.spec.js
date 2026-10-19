// windowHandling.spec.js
const { test, expect } = require('@playwright/test');
const WindowHandlingPage = require('../page-object/windowHandlingPage');

test.describe('Window Handling Screen', () => {
  
  test('should open a new tab', async ({ page }) => {
    const windowPage = new WindowHandlingPage(page);
    await windowPage.goto();

    const newPage = await windowPage.clickOpenNewTab();
    await newPage.waitForLoadState();
    expect(newPage.url()).not.toBe('');
  });

  test('should open a popup window', async ({ page }) => {
    const windowPage = new WindowHandlingPage(page);
    await windowPage.goto();

    // Use popup event instead of context().waitForEvent('page')
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      windowPage.openPopupButton.click()
    ]);

    await popup.waitForLoadState();
    expect(popup.url()).not.toBe('');
  });

  test('should simulate canceling print dialog and exit cleanly', async ({ page }) => {
    const windowPage = new WindowHandlingPage(page);
    await windowPage.goto();

    // Capture console logs to verify cancel simulation
    const logs = [];
    page.on('console', msg => logs.push(msg.text()));

    await windowPage.triggerPrintDialog();

    // Assert that our simulated cancel ran
    expect(logs).toContain('Simulated print dialog, auto-cancelled');
  });

});