# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Loginpage.spec.js >> Valid user login
- Location: tests\Loginpage.spec.js:6:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#loginEmail')

```

# Test source

```ts
  1  | const{expect}=require('@playwright/test')
  2  | class LoginPage{
  3  |     constructor(page){
  4  |         this.page = page;
  5  |         this.emailInput = page.locator('#loginEmail');
  6  |         this.passwordInput = page.locator('#loginPassword');
  7  |         this.signInButton = page.getByRole('button', { name: 'Sign In' });
  8  |         this.backToHomeButton = page.locator('#backToHome');
  9  |         this.welcomeText = page.locator('#welcomeTitle');
  10 |         this.signoutButton=page.locator('#logoutBtn');
  11 |         this.dashboadrdButton=page.locator('#goToDashboard');
  12 |         this.homePage=page.locator('//h1[@data-testid="hero-title"]');
  13 |         
  14 |       }
  15 |     async goto() {
  16 |       await this.page.goto(`${process.env.BASE_URL}`);
  17 |     }
  18 |       async validLogin(email, password) {
> 19 |       await this.emailInput.fill(email);
     |                             ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  20 |       await this.passwordInput.fill(password);
  21 |       await this.signInButton.click(); 
  22 |     }
  23 | 
  24 |    async assertWelcomeMessage() {
  25 |     await expect(this.welcomeText).toBeVisible();
  26 |   }
  27 | 
  28 |   async assertTitleText(){
  29 |     await expect(this.homePage).toBeVisible();
  30 |   }
  31 |   // Sign Out functionality
  32 |     async signOut() {
  33 |         await this.signoutButton.click();
  34 |     }
  35 | 
  36 |     // Verify successful logout
  37 |     async assertSignOutSuccessful() {
  38 |         await expect(this.signInButton).toBeVisible();
  39 |     }
  40 | 
  41 |     // Go to Dashboard functionality
  42 |     async goToDashboard() {
  43 |         await this.dashboadrdButton.click();
  44 |     }
  45 | 
  46 |     // Verify dashboard page
  47 |     async assertDashboardPage() {
  48 |         await expect(this.homePage).toBeVisible();
  49 |     }
  50 |     
  51 |   
  52 |   
  53 | }
  54 | 
  55 | module.exports =LoginPage;
```