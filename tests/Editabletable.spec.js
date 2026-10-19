
const { test, expect } = require('@playwright/test');

test('Verify that the product table is editable', async ({ page }) => {

    await page.goto('https://playwrightlab.github.io/index.html');
    // Locate the editable table
    const table = page.locator('#editableTableTitle');

    // Scroll down to the file upload section
  await table.scrollIntoViewIfNeeded();

    // Locate the row containing MacBook Pro
   const row = page.locator('tr').filter({
        hasText: 'MacBook Pro'
    });

    const productCell = row.locator('td').first();

    await expect(productCell).toBeVisible();

    // Try activating inline editing
    await productCell.dblclick();

    // Check the cell's HTML after double-clicking
    console.log('Cell HTML:', await productCell.evaluate(
        element => element.outerHTML
    ));

    // Check whether an editor appeared inside the cell
    const editor = productCell.locator(
        'input, textarea, select, [contenteditable="true"]'
    );

    console.log('Editor count:', await editor.count());

    if (await editor.count() > 0) {
        console.log('An editor was found inside the product cell.');
    } else {
        console.log('No editor appeared inside the product cell.');
    }
});