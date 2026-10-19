# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\signout.spec.js >> Sign Out and Dashboard Tests >> Verify Sign Out 
- Location: tests\signout.spec.js:8:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 60000ms.
```

```
Fixture "trace recording" timeout of 60000ms exceeded during teardown.
```

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#loginEmail')

```

# Test source

```ts
  1  | const{expect}=require('@playwright/test')
  2  | require('dotenv').config();
  3  | class LoginPage{
  4  |     constructor(page){
  5  |         this.page = page;
  6  |         this.emailInput = page.locator('#loginEmail');
  7  |         this.passwordInput = page.locator('#loginPassword');
  8  |         this.signInButton = page.getByRole('button', { name: 'Sign In' });
  9  |         this.backToHomeButton = page.locator('#backToHome');
  10 |         this.welcomeText = page.locator('#welcomeTitle');
  11 |         this.signoutButton=page.locator('#logoutBtn');
  12 |         this.dashboadrdButton=page.locator('#goToDashboard');
  13 |         this.homePage=page.locator('//h1[@data-testid="hero-title"]');
  14 |         
  15 |       }
  16 |     async goto() {
  17 |       await this.page.goto(`${process.env.BASE_URL}`);
  18 |     }
  19 |       async validLogin(email, password) {
> 20 |       await this.emailInput.fill(email);
     |                             ^ Error: locator.fill: Test ended.
  21 |       await this.passwordInput.fill(password);
  22 |       await this.signInButton.click(); 
  23 |     }
  24 | 
  25 |    async assertWelcomeMessage() {
  26 |     await expect(this.welcomeText).toBeVisible();
  27 |   }
  28 | 
  29 |   async assertTitleText(){
  30 |     await expect(this.homePage).toBeVisible();
  31 |   }
  32 |   // Sign Out functionality
  33 |     async signOut() {
  34 |         await this.signoutButton.click();
  35 |     }
  36 | 
  37 |     // Verify successful logout
  38 |     async assertSignOutSuccessful() {
  39 |         await expect(this.signInButton).toBeVisible();
  40 |     }
  41 | 
  42 |     // Go to Dashboard functionality
  43 |     async goToDashboard() {
  44 |         await this.dashboadrdButton.click();
  45 |     }
  46 | 
  47 |     // Verify dashboard page
  48 |     async assertDashboardPage() {
  49 |         await expect(this.homePage).toBeVisible();
  50 |     }
  51 |     
  52 |   
  53 |   
  54 | }
  55 | 
  56 | module.exports =LoginPage;
```