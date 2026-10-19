const { test, expect } = require('@playwright/test');
const Validlogin = require("../page-object/Validlogin");
const users=require("../test-data/users.json");

test.describe('Sign Out and Dashboard Tests', () => {

    // Run Sign Out test 
    test('Verify Sign Out ', async ({ page }) => {
            const login = new Validlogin(page);

            // Open login page
            await login.goto();

            // Login using JSON data
            await login.validLogin(users.validUser.email, users.validUser.password);

            // Verify welcome page
            await login.assertWelcomeMessage();

            // Click Sign Out
            await login.signOut();

            // Verify return to login page
            await login.assertSignOutSuccessful();
        });

        // Run Dashboard test for each user
        test('Verify Dashboard display', async ({ page }) => {
            const login = new Validlogin(page);

            // Open login page
            await login.goto();

            // Login using JSON data
            await login.validLogin(users.validUser.email, users.validUser.password);

            // Click Go to Dashboard
            await login.goToDashboard();

            // Verify dashboard page
            await login.assertDashboardPage();
        });

    })


