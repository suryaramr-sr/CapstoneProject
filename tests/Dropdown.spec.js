const { test } = require('@playwright/test');
const SearchableDropdown = require('../page-object/searchableDropdown');
const testData = require('../test-data/city.json');

test.describe('Searchable dropdown test', () => {
  test(`should filter and select ${testData.city}`, async ({ page }) => {
    const dropdown = new SearchableDropdown(page);
    await dropdown.navigate();
    await dropdown.searchCity(testData.city);
    await dropdown.verifySelectedCity(testData.city);
  });
});