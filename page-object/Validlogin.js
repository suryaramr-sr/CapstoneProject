const{expect}=require('@playwright/test')
require('dotenv').config();
class LoginPage{
    constructor(page){
        this.page = page;
        this.emailInput = page.locator('#loginEmail');
        this.passwordInput = page.locator('#loginPassword');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.backToHomeButton = page.locator('#backToHome');
        this.welcomeText = page.locator('#welcomeTitle');
        this.signoutButton=page.locator('#logoutBtn');
        this.dashboadrdButton=page.locator('#goToDashboard');
        this.homePage=page.locator('//h1[@data-testid="hero-title"]');
        
      }
    async goto() {
      await this.page.goto(`${process.env.BASE_URL}/login.html`);
    }
      async validLogin(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.signInButton.click(); 
    }

   async assertWelcomeMessage() {
    await expect(this.welcomeText).toBeVisible();
  }

  async assertTitleText(){
    await expect(this.homePage).toBeVisible();
  }
  // Sign Out functionality
    async signOut() {
        await this.signoutButton.click();
    }

    // Verify successful logout
    async assertSignOutSuccessful() {
        await expect(this.signInButton).toBeVisible();
    }

    // Go to Dashboard functionality
    async goToDashboard() {
        await this.dashboadrdButton.click();
    }

    // Verify dashboard page
    async assertDashboardPage() {
        await expect(this.homePage).toBeVisible();
    }
    
  
  
}

module.exports =LoginPage;