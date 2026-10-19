const{expect}=require('@playwright/test')
require('dotenv').config();
class InvalidLoginpage{
    constructor(page){
        this.page = page;
        this.emailInput = page.locator('#loginEmail');
        this.passwordInput = page.locator('#loginPassword');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.errorMessage = page.locator('[data-testid="login-email-error"]');
               
      }
    async goto() {
      await this.page.goto(`${process.env.BASE_URL}/login.html`);
    }
      async invalidLogin(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.signInButton.click(); 
      await expect(this.errorMessage).toBeVisible();
    }
     async assertErrorMessage() {
    try {
      await expect(this.errorMessage).toBeVisible();
    } catch (error) {
    }
}
}
module.exports =InvalidLoginpage;