const { test, expect } = require('@playwright/test');
const path = require('path');

test('Upload a file successfully', async ({ page }) => {

    // Open the website
    await page.goto('https://playwrightlab.github.io/index.html');

  

    // Locate the file input
    const fileInput = page.locator('#uploadBrowseLabel');

    // Scroll down to the file upload section
  await fileInput.scrollIntoViewIfNeeded();

    // Set the file path
    const filePath = path.join('C:\\capstoneproject\\tests\\sample.txt');

    // Upload the file
    await fileInput.setInputFiles(filePath);

    // Verify that the file is selected
    await expect(fileInput).toHaveValue(/sample\.txt/);

});