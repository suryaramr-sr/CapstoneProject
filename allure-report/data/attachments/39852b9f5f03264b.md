# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Loginpage.spec.js >> Invalid user login to playwrightlab
- Location: tests\Loginpage.spec.js:13:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Test timeout of 60000ms exceeded.
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
  2  | class InvalidLoginpage{
  3  |     constructor(page){
  4  |         this.page = page;
  5  |         this.emailInput = page.locator('#loginEmail');
  6  |         this.passwordInput = page.locator('#loginPassword');
  7  |         this.signInButton = page.getByRole('button', { name: 'Sign In' });
  8  |         this.errorMessage = page.locator('[data-testid="login-email-error"]');
  9  |                
  10 |       }
  11 |     async goto() {
  12 |       await this.page.goto(`${process.env.BASE_URL}`);
  13 |     }
  14 |       async invalidLogin(email, password) {
> 15 |       await this.emailInput.fill(email);
     |                             ^ Error: locator.fill: Test ended.
  16 |       await this.passwordInput.fill(password);
  17 |       await this.signInButton.click(); 
  18 |       await expect(this.errorMessage).toBeVisible();
  19 |     }
  20 |      async assertErrorMessage() {
  21 |     try {
  22 |       await expect(this.errorMessage).toBeVisible();
  23 |     } catch (error) {
  24 |     }
  25 | }
  26 | }
  27 | module.exports =InvalidLoginpage;
```