
const { test, expect } = require('@playwright/test');
const NotificationPage = require('../page-object/NotificationPage');

test.describe('Play Lab Notification Tests', () => {

    let notificationPage;

    test.beforeEach(async ({ page }) => {
        notificationPage = new NotificationPage(page);

        // Open the notification page
        await notificationPage.goto();
        await notificationPage.locatepage();
        
        // Check that the Success Toast button is visible
        await expect(
            notificationPage.successToastButton
        ).toBeVisible();
    });

    test('Verify Success Toast notification', async () => {
        await notificationPage.clickSuccessToast();

        // Verify notification appears
        await notificationPage.verifyToastIsVisible();
    });

    test('Verify Error Toast notification', async () => {
        await notificationPage.clickErrorToast();

        await notificationPage.verifyToastIsVisible();
    });

    test('Verify Warning Toast notification', async () => {
        await notificationPage.clickWarningToast();

        await notificationPage.verifyToastIsVisible();
    });

    test('Verify Info Toast notification', async () => {
        await notificationPage.clickInfoToast();

        await notificationPage.verifyToastIsVisible();
    });

});
