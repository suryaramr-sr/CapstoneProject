const { test, expect } = require('@playwright/test');

const DynamicTablePage = require('../page-object/DynamicTablePage');


test.describe('Dynamic Table Refresh Tests', () => {

    test('Verify first row values change after page reload', async ({ page }) => {

        const dynamicTable = new DynamicTablePage(page);

        // Step 1: Open the page
        await dynamicTable.goto();
     

        // Step 2: Capture the first row before refreshing
        const initialValues = await dynamicTable.getFirstRowValues();

        console.log('Initial first row:', initialValues);

        let valuesChanged = false;

        // Step 3: Refresh the page up to five times
        for (let i = 1; i <= 5; i++) {

            await dynamicTable.reloadPage();

            // Capture the first row after refresh
            const refreshedValues =
                await dynamicTable.getFirstRowValues();

            console.log(`First row after refresh ${i}:`, refreshedValues);

            // Check whether the values differ from the initial row
            if (refreshedValues !== initialValues) {
                valuesChanged = true;

                console.log(`Values changed after refresh ${i}`);

                break;
            }
        }

        // Step 4: Verify that at least one refresh changed the values
        expect(
            valuesChanged,
            'First row values did not change after five refreshes'
        ).toBe(true);

    });

});