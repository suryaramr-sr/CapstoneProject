require('dotenv').config();
const testData = require('./dropdownData.json');

class DropdownPage {
  constructor(page) {
    this.page = page;
    this.priorityDropdown = page.locator('select#priority'); 
    this.citySearchBox = page.locator('input[placeholder="Type to filter cities..."]');
  }

  async goto() {
    await this.page.goto(`${process.env.BASE_URL}/index.html`);
  }

  async selectPriority() {
    await this.priorityDropdown.selectOption(testData.priority);
  }

  async selectCity() {
    await this.citySearchBox.fill(testData.city);
    await this.page.locator(`text=${testData.city}`).click();
  }
}

module.exports = DropdownPage;

