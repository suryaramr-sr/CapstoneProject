
// tests/registration.spec.js
const { test, expect } = require('@playwright/test');
const { RegistrationForm} = require("../page-object/RegistrationForm");
const { readExcelData } = require("../utils/excelReader");

test('Register users with Excel data', async ({ page }) => {
  const registrationPage = new RegistrationForm(page);
  await registrationPage.goto();
  // Locate the file input
  const formInput = page.locator('#registrationCardHeader');

    // Scroll down to the form registration section
  await formInput.scrollIntoViewIfNeeded();
  

  // Read data from Excel using your utilityy
  const data = await readExcelData('C:/Users/HP/Desktop/users.xlsx','Sheet1'); 

  for (const row of data) {
    //await registrationPage.goto();
    
    await registrationPage.register(
      row.FullName,
      row.EmailAddress,
      row.Password,
      row.PhoneNumber,
      row.DateOfBirth,
      row.Country,
      row.Gender,
      row.Skills,
      row.Bio,
      row.Agree
    );

    // Example check: success message
    await expect(page.locator('text=Registration Successful')).toBeVisible();
    // Test reset functionality
    await registrationPage.goto(); // reload form
    await registrationPage.fullNameInput.fill('Temp User');
    await registrationPage.resetForm();

    // Verify reset clears the field
    await expect(registrationPage.fullNameInput).toHaveValue('');
  }
});
