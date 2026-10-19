require('dotenv').config(); // load .env variables

class DynamicTablePage {
    constructor(page) {
        this.page = page;

        this.heading = page.getByRole('heading', {
            name: 'Dynamic Table'
        });

        this.table = page.locator('#dynamicFruitTable');
        this.headers = this.table.locator('thead th');
        this.rows = this.table.locator('tbody tr');
    }

    // Open the website
    async goto() {
        await this.page.goto(`${process.env.BASE_URL}/index.html`);
    }

    // Reload the page
    async reloadPage() {
        await this.page.reload();

        // Wait until the table and its first row are visible
        await expect(this.table).toBeVisible();
        await expect(this.rows.first()).toBeVisible();
    }

    // Get all column headers
    async getHeaderTexts() {
        const headerTexts = await this.headers.allTextContents();

        return headerTexts.map(header =>
            header.trim().toLowerCase()
        );
    }

    // Capture the first row's values, matched to their headers
    async getFirstRowValues() {
        const headerTexts = await this.headers.allTextContents();

        const firstRow = this.rows.first();
        const cellTexts = await firstRow.locator('td').allTextContents();

        // Pair each cell with its header, then sort by header name.
        // Sorting makes the snapshot independent of column position.
        const rowData = headerTexts.map((header, index) => [
            header.trim().toLowerCase(),
            cellTexts[index].trim()
        ]);

        rowData.sort(([headerA], [headerB]) =>
            headerA.localeCompare(headerB)
        );

        return JSON.stringify(rowData);
    }

    async getRowCount() {
        return await this.rows.count();
    }

    async getCellCount(rowIndex) {
        return await this.rows.nth(rowIndex).locator('td').count();
    }
}

const { expect } = require('@playwright/test');

module.exports = DynamicTablePage;