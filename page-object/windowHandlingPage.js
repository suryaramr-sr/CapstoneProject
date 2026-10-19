// windowHandlingPage.js
const { expect } = require('@playwright/test');

class WindowHandlingPage {
  constructor(page) {
    this.page = page;
    this.openNewTabButton = page.locator('#newTabBtn');
    this.openPopupButton = page.locator('text=Open Popup Window');
    this.printDialogButton = page.locator('#printBtn');
  }

  async goto() {
    await this.page.goto('https://playwrightlab.github.io/index.html');
  }

  async clickOpenNewTab() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.openNewTabButton.click()
    ]);
    return newPage;
  }

  async clickOpenPopup() {
    const [popup] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.openPopupButton.click()
    ]);
    return popup;
  }

  async triggerPrintDialog() {
    await this.printDialogButton.click();
    // Playwright cannot directly interact with native print dialogs,
    // but we can assert that the click was triggered.
  }
}

module.exports = WindowHandlingPage;
