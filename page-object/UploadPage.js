const path = require('path');
const { expect } = require('@playwright/test');
require('dotenv').config();

class UploadPage {
  constructor(page) {
    this.page = page;
    this.fileInput = page.locator('#uploadBrowseLabel');
  }

  async navigate() {
    await this.page.goto(`${process.env.BASE_URL}/index.html`);
  }

  async uploadFile(fileName) {
    const filePath = path.join('C:\\capstoneproject\\tests',fileName);
    await this.fileInput.scrollIntoViewIfNeeded();
    await this.fileInput.setInputFiles(filePath);
  }

  async verifyFileSelected(fileName) {
    await expect(this.fileInput).toHaveValue(new RegExp(fileName));
  }
}

module.exports = { UploadPage };
