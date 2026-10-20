const { test } = require('@playwright/test');
const { UploadPage } = require('../page-object/UploadPage');

test('Upload a file successfully', async ({ page }) => {
  const uploadPage = new UploadPage(page);

  await uploadPage.navigate();
  await uploadPage.uploadFile('sample.txt');
  await uploadPage.verifyFileSelected('sample.txt');
});
