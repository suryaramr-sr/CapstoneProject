require('dotenv').config();
class RegistrationForm {
  constructor(page) {
    this.page = page;
    this.fullNameInput = page.locator('#fullName');
    this.emailInput = page.getByTestId('input-email');
    this.passwordInput = page.locator('input[placeholder="Min 8 characters"]');
    this.phoneInput = page.locator('input[placeholder="+1 (555) 000-0000"]');
    this.dobInput = page.getByTestId('input-dob');
    this.countrySelect = page.getByTestId('select-country');
    this.genderRadio = (gender) => this.page.getByTestId(`radio-${gender.toLowerCase()}`);
    this.skillCheckbox = (skill) => page.locator(`input[type="checkbox"][value="${skill}"]`);
    this.bioTextarea = page.locator('textarea[placeholder="Tell us about yourself..."]');
    this.agreementCheckbox = page.getByTestId('check-terms');
    this.submitButton = page.locator('button:has-text("Register")');
    this.resetButton = page.locator('button[type="reset"][data-testid="btn-reset"]');
  }

  async goto() {
    await this.page.goto(`${process.env.BASE_URL}/index.html`);
  }

  async register(fullName, email, password, phone, dob, country, gender, skills, bio, agree) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.phoneInput.fill(String(phone));

    const formattedDob = new Date(dob).toISOString().split('T')[0];
    await this.dobInput.fill(formattedDob);
    await this.page.getByTestId('select-country').selectOption({ label: country });
   
   //  Gender selection
  if (gender.toLowerCase() === 'female') {
    await this.page.getByTestId('radio-female').check();
  } else if (gender.toLowerCase() === 'male') {
    await this.page.getByTestId('radio-male').check();
  } else {
    await this.page.getByTestId('radio-other').check();
  }
        
   for (const skill of skills.split(',')) {
   await this.skillCheckbox(skill.trim().toLowerCase()).check();


    }

    await this.bioTextarea.fill(bio);

    if (agree === true || String(agree).toLowerCase() === 'yes') {
  await this.agreementCheckbox.check();
}

await this.submitButton.click();
  }

  async resetForm() {
   await this.resetButton.click();
  }
}

module.exports = { RegistrationForm };
