require('dotenv').config();
const { expect } = require('@playwright/test');

class NotificationPage {
    constructor(page) {
        this.page = page;
        this.notificationpage=page.locator('.card-header');

        // Notification buttons
        this.successToastButton = page.getByRole('button', {
            name: 'Success Toast'
        });

        this.errorToastButton = page.getByRole('button', {
            name: 'Error Toast'
        });

        this.warningToastButton = page.getByRole('button', {
            name: 'Warning Toast'
        });

        this.infoToastButton = page.getByRole('button', {
            name: 'Info Toast'
        });

        // Locator for the notification message displayed after clicking
        // Adjust this selector if the website uses a different toast element.
        this.toastMessage = page.locator(
            '[role="alert"], [role="status"], .toast, .toast-message'
        ).first();
    }

    // Open the page using the URL from .env
    async goto() {
       await this.page.goto(`${process.env.BASE_URL}/index.html`);
    }

    async locatepage(){
        await notificationpage.scrollIntoViewIfNeeded();
    }

    // Click the Success Toast button
    async clickSuccessToast() {
        await this.successToastButton.click();
    }

    // Click the Error Toast button
    async clickErrorToast() {
        await this.errorToastButton.click();
    }

    // Click the Warning Toast button
    async clickWarningToast() {
        await this.warningToastButton.click();
    }

    // Click the Info Toast button
    async clickInfoToast() {
        await this.infoToastButton.click();
    }

    // Verify that a notification message is displayed
    async verifyToastIsVisible() {
        await expect(this.toastMessage).toBeVisible();
    }
}

module.exports = NotificationPage;
